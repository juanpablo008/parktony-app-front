import { useState, useEffect, useCallback } from 'react';
import { WOMPI_CONFIG, loadWompiScript, getPlanPrice } from '../config/wompi';

/**
 * Hook REAL de Wompi - Usar cuando tengas tu propia cuenta de Wompi
 *
 * PASOS PARA ACTIVAR:
 * 1. Crea tu cuenta en https://comercios.wompi.co/
 * 2. Verifica tu identidad
 * 3. Obtén tus llaves de producción
 * 4. Actualiza VITE_WOMPI_PUBLIC_KEY en .env
 * 5. Renombra este archivo a useWompi.js
 */
export const useWompi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  // Cargar script de Wompi al montar el componente
  useEffect(() => {
    loadWompiScript()
      .then(() => {
        setIsScriptLoaded(true);
      })
      .catch((err) => {
        console.error('Error cargando Wompi:', err);
        setError('No se pudo cargar la pasarela de pago');
      });
  }, []);

  const generateReference = () => {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 9);
    return `PARKTONY-${timestamp}-${random}`;
  };

  const openCheckout = useCallback(async (formData) => {
    if (!isScriptLoaded) {
      setError('La pasarela de pago aún no está lista. Intenta de nuevo.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const price = getPlanPrice(formData.plan);
      const reference = generateReference();

      // Configuración REAL del checkout de Wompi
      const checkoutConfig = {
        currency: WOMPI_CONFIG.currency,
        amountInCents: price * 100,
        reference: reference,
        publicKey: WOMPI_CONFIG.publicKey,
        redirectUrl: window.location.origin + '/registro/confirmacion',
        customerData: {
          email: formData.adminEmail,
          fullName: formData.adminName,
          phoneNumber: formData.phone,
          phoneNumberPrefix: '+57',
        },
      };

      console.log('🔐 Wompi Config:', {
        publicKey: WOMPI_CONFIG.publicKey,
        environment: WOMPI_CONFIG.environment,
        amount: price,
        amountInCents: price * 100,
        reference: reference,
      });

      // Validar que tenemos la llave pública
      if (!WOMPI_CONFIG.publicKey || WOMPI_CONFIG.publicKey === '') {
        throw new Error('No se ha configurado VITE_WOMPI_PUBLIC_KEY en el archivo .env');
      }

      // Crear la instancia del checkout REAL
      const checkout = new window.WidgetCheckout(checkoutConfig);

      // Abrir el modal de Wompi REAL
      checkout.open((result) => {
        if (result.transaction && result.transaction.status === 'APPROVED') {
          console.log('✅ Pago aprobado:', result);
          handlePaymentSuccess(result, formData);
        } else if (result.transaction && result.transaction.status === 'DECLINED') {
          console.log('❌ Pago rechazado:', result);
          setError('El pago fue rechazado. Por favor, intenta con otro método de pago.');
        } else if (result.transaction && result.transaction.status === 'ERROR') {
          console.log('⚠️ Error en el pago:', result);
          setError('Hubo un error procesando el pago. Por favor, intenta de nuevo.');
        }
        setIsLoading(false);
      });

    } catch (err) {
      console.error('❌ Error al abrir checkout:', err);

      let errorMessage = 'Error al procesar el pago. Por favor, intenta de nuevo.';

      if (err.message) {
        errorMessage = err.message;
      }

      if (err.message && err.message.includes('publicKey')) {
        errorMessage = 'Error de configuración: Llave pública de Wompi no válida. Por favor, contacta al administrador.';
      }

      setError(errorMessage);
      setIsLoading(false);
    }
  }, [isScriptLoaded]);

  const handlePaymentSuccess = (paymentResult, formData) => {
    const registrationData = {
      ...formData,
      payment: {
        transactionId: paymentResult.transaction.id,
        reference: paymentResult.transaction.reference,
        status: paymentResult.transaction.status,
        paymentMethod: paymentResult.transaction.paymentMethodType,
        amount: paymentResult.transaction.amountInCents / 100,
      },
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem('parkTonyRegistration', JSON.stringify(registrationData));

    alert('¡Registro exitoso! 🎉\n\nTu cuenta ha sido creada.\n\nTransacción ID: ' + paymentResult.transaction.id);

    window.location.href = '/login';
  };

  return {
    openCheckout,
    isLoading,
    error,
    isScriptLoaded,
  };
};
