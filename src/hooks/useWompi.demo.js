import { useState, useEffect, useCallback } from 'react';
import { WOMPI_CONFIG, loadWompiScript, getPlanPrice } from '../config/wompi';

/**
 * Hook personalizado para integración con Wompi
 *
 * IMPORTANTE: Este hook solo usa la Public Key de Wompi.
 * La Secret Key NUNCA debe usarse en el frontend.
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

  // Función para crear una referencia única de pago
  const generateReference = () => {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 9);
    return `PARKTONY-${timestamp}-${random}`;
  };

  // Función para abrir el checkout de Wompi
  const openCheckout = useCallback(async (formData) => {
    setIsLoading(true);
    setError(null);

    try {
      const price = getPlanPrice(formData.plan);
      const reference = generateReference();

      console.log('🔐 Wompi Config:', {
        publicKey: WOMPI_CONFIG.publicKey,
        environment: WOMPI_CONFIG.environment,
        amount: price,
        amountInCents: price * 100,
        reference: reference,
      });

      // MODO DEMO: Para desarrollo sin cuenta de Wompi
      // Simular proceso de pago exitoso
      console.log('💳 Modo DEMO: Simulando pago exitoso...');

      // Simular delay de procesamiento
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Crear resultado simulado
      const mockResult = {
        transaction: {
          id: `mock_${reference}`,
          status: 'APPROVED',
          reference: reference,
          paymentMethodType: 'CARD',
          amountInCents: price * 100,
          createdAt: new Date().toISOString(),
        }
      };

      console.log('✅ Pago simulado aprobado:', mockResult);

      // Guardar registro
      handlePaymentSuccess(mockResult, formData);

      setIsLoading(false);

    } catch (err) {
      console.error('❌ Error al procesar pago:', err);
      setError('Error al procesar el pago. Por favor, intenta de nuevo.');
      setIsLoading(false);
    }
  }, []);

  // Manejar pago exitoso
  const handlePaymentSuccess = (paymentResult, formData) => {
    // Aquí enviarías los datos a tu backend para crear la cuenta
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

    // Guardar en localStorage temporalmente (en producción, esto iría a tu API)
    localStorage.setItem('parkTonyRegistration', JSON.stringify(registrationData));

    // Mostrar mensaje de éxito
    alert('¡Registro exitoso! 🎉\n\nTu cuenta ha sido creada.\n\nTransacción ID: ' + paymentResult.transaction.id);

    // Redirigir al dashboard o página de confirmación
    window.location.href = '/login';
  };

  return {
    openCheckout,
    isLoading,
    error,
    isScriptLoaded,
  };
};
