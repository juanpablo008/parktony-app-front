import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, XCircle, Clock, ArrowRight } from 'lucide-react';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

const ConfirmacionPago = () => {
  const [status, setStatus] = useState('pending'); // pending, success, failed
  const [registrationData, setRegistrationData] = useState(null);

  useEffect(() => {
    // Intentar obtener datos del registro desde localStorage
    const savedData = localStorage.getItem('parkTonyRegistration');
    if (savedData) {
      const data = JSON.parse(savedData);
      setRegistrationData(data);
      setStatus('success');
    } else {
      // Si no hay datos, verificar parámetros de URL
      const urlParams = new URLSearchParams(window.location.search);
      const transactionId = urlParams.get('id');

      if (transactionId) {
        // Aquí verificarías el estado de la transacción con tu backend
        setStatus('pending');
      } else {
        setStatus('failed');
      }
    }
  }, []);

  const renderContent = () => {
    switch (status) {
      case 'success':
        return (
          <>
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-neutral-900 mb-3">
                ¡Registro Exitoso! 🎉
              </h1>
              <p className="text-lg text-neutral-600">
                Tu cuenta en ParkTony ha sido creada exitosamente
              </p>
            </div>

            {registrationData && (
              <Card className="mb-6">
                <h2 className="text-xl font-semibold text-neutral-900 mb-4">
                  Detalles de tu Registro
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-neutral-200">
                    <span className="text-neutral-600">Parqueadero:</span>
                    <span className="font-semibold text-neutral-900">
                      {registrationData.companyName}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-neutral-200">
                    <span className="text-neutral-600">Plan:</span>
                    <span className="font-semibold text-neutral-900">
                      {registrationData.plan}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-neutral-200">
                    <span className="text-neutral-600">Email:</span>
                    <span className="font-semibold text-neutral-900">
                      {registrationData.adminEmail}
                    </span>
                  </div>
                  {registrationData.payment && (
                    <div className="flex justify-between py-2">
                      <span className="text-neutral-600">ID de Transacción:</span>
                      <span className="font-mono text-sm text-neutral-900">
                        {registrationData.payment.transactionId}
                      </span>
                    </div>
                  )}
                </div>
              </Card>
            )}

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-blue-900 mb-3">
                Próximos Pasos:
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-blue-800 text-sm">
                <li>Revisa tu correo electrónico para confirmar tu cuenta</li>
                <li>Inicia sesión con tus credenciales</li>
                <li>Completa la configuración inicial de tu parqueadero</li>
                <li>Comienza tu prueba gratuita de 14 días</li>
              </ol>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/login" className="flex-1">
                <Button variant="primary" size="lg" className="w-full justify-center">
                  Ir al Login
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/" className="flex-1">
                <Button variant="outline" size="lg" className="w-full justify-center">
                  Volver al Inicio
                </Button>
              </Link>
            </div>
          </>
        );

      case 'pending':
        return (
          <>
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-100 rounded-full mb-6">
                <Clock className="w-12 h-12 text-yellow-600" />
              </div>
              <h1 className="text-3xl font-bold text-neutral-900 mb-3">
                Procesando tu Pago
              </h1>
              <p className="text-lg text-neutral-600">
                Estamos verificando tu transacción. Esto puede tomar unos momentos.
              </p>
            </div>

            <div className="flex justify-center mb-6">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-dark"></div>
            </div>

            <Card>
              <p className="text-center text-neutral-600">
                Si el proceso toma más de 5 minutos, por favor contacta a soporte
                o intenta iniciar sesión más tarde.
              </p>
            </Card>

            <div className="flex justify-center mt-6">
              <Link to="/">
                <Button variant="secondary">
                  Volver al Inicio
                </Button>
              </Link>
            </div>
          </>
        );

      case 'failed':
      default:
        return (
          <>
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-6">
                <XCircle className="w-12 h-12 text-red-600" />
              </div>
              <h1 className="text-3xl font-bold text-neutral-900 mb-3">
                Hubo un Problema
              </h1>
              <p className="text-lg text-neutral-600">
                No pudimos completar tu registro en este momento
              </p>
            </div>

            <Card className="mb-6">
              <h3 className="font-semibold text-neutral-900 mb-3">
                ¿Qué puedes hacer?
              </h3>
              <ul className="space-y-2 text-neutral-600 text-sm">
                <li className="flex items-start">
                  <span className="text-primary-dark mr-2">•</span>
                  Verifica que tu método de pago tenga fondos suficientes
                </li>
                <li className="flex items-start">
                  <span className="text-primary-dark mr-2">•</span>
                  Intenta registrarte nuevamente
                </li>
                <li className="flex items-start">
                  <span className="text-primary-dark mr-2">•</span>
                  Contacta a nuestro equipo de soporte si el problema persiste
                </li>
              </ul>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/registro" className="flex-1">
                <Button variant="primary" size="lg" className="w-full justify-center">
                  Intentar de Nuevo
                </Button>
              </Link>
              <Link to="/" className="flex-1">
                <Button variant="outline" size="lg" className="w-full justify-center">
                  Volver al Inicio
                </Button>
              </Link>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {renderContent()}

        <div className="mt-8 text-center">
          <p className="text-sm text-neutral-500">
            ¿Necesitas ayuda?{' '}
            <a href="mailto:soporte@parktony.com" className="text-primary-dark hover:text-primary-light">
              Contacta Soporte
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmacionPago;
