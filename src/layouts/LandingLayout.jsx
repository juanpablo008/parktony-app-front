import { useState } from 'react';
import LandingHeader from '../pages/landing/components/LandingHeader';
import Footer from '../pages/landing/components/Footer';
import ImageCarousel from '../components/ui/ImageCarousel';
import { Phone, Mail, Clock, CheckCircle, Star, TrendingUp, Gift, Calculator } from 'lucide-react';
import servicios1 from '../assets/images/servicios-1.jpg';
import servicios2 from '../assets/images/servicios-2.jpg';
import servicios3 from '../assets/images/servicios-3.jpg';
import servicios4 from '../assets/images/servicios-4.jpg';
import servicios5 from '../assets/images/servicios-5.jpg';
import servicios6 from '../assets/images/servicios-6.jpg';
import servicios7 from '../assets/images/servicios-7.jpg';
import servicios8 from '../assets/images/servicios-8.jpg';
import servicios9 from '../assets/images/servicios-9.jpg';
import servicios10 from '../assets/images/servicios-10.jpg';

const LandingLayout = ({ children }) => {
  const [spaces, setSpaces] = useState('');
  const [monthlyRevenue, setMonthlyRevenue] = useState('');

  const calculateSavings = () => {
    if (!monthlyRevenue || monthlyRevenue === '') return 0;
    const revenue = parseFloat(monthlyRevenue.replace(/[^0-9]/g, ''));
    if (isNaN(revenue)) return 0;
    const annualRevenue = revenue * 12;
    const savings = annualRevenue * 0.30; // 30% de ahorro
    return Math.round(savings);
  };

  const formatCurrency = (value) => {
    if (!value) return '';
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const handleRevenueChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setMonthlyRevenue(value);
  };
  const carouselImages = [
    { src: servicios1, alt: 'Cámara de seguridad', caption: 'Seguridad 24/7', description: 'Monitoreo constante con cámaras de vigilancia' },
    { src: servicios2, alt: 'Auto enjabonado', caption: 'Lavado Premium', description: 'Servicio de lavado profesional integrado' },
    { src: servicios3, alt: 'Parqueadero vista aérea', caption: 'Vista Panorámica', description: 'Control total desde una perspectiva global' },
    { src: servicios4, alt: 'Parqueadero cubierto', caption: 'Espacios Protegidos', description: 'Parqueaderos techados con estructura segura' },
    { src: servicios5, alt: 'Navegación GPS', caption: 'App de Navegación', description: 'Encuentra tu parqueadero ideal con mapas en tiempo real' },
    { src: servicios6, alt: 'Auto con jabón', caption: 'Cuidado Vehicular', description: 'Servicios complementarios para tu vehículo' },
    { src: servicios7, alt: 'Pantalla del auto', caption: 'Integración Vehicular', description: 'Conectividad directa con el sistema de tu auto' },
    { src: servicios8, alt: 'Tarjeta de pago', caption: 'Pagos Seguros', description: 'Transacciones rápidas y protegidas' },
    { src: servicios9, alt: 'Parqueadero al aire libre', caption: 'Espacios Abiertos', description: 'Parqueaderos con áreas verdes y buena iluminación' },
    { src: servicios10, alt: 'Parqueadero vista aérea', caption: 'Gestión Inteligente', description: 'Optimización de espacios en tiempo real' }
  ];

  const benefits = [
    { icon: CheckCircle, text: 'Aumento del 30% en ingresos' },
    { icon: TrendingUp, text: 'Reducción de 40% en tiempo administrativo' },
    { icon: Star, text: 'Calificación 4.9/5 de clientes' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <LandingHeader />

      <div className="flex">
        {/* Main Content */}
        <div className="flex-1">
          {children}
        </div>

        {/* Aside Panel - Fixed on desktop */}
        <aside className="hidden xl:block xl:w-96 2xl:w-[28rem] sticky top-0 h-screen overflow-y-auto border-l border-neutral-200 bg-neutral-50">
          <div className="p-6 space-y-6">
            {/* Carousel Section */}
            <div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">
                ParkTony en Acción
              </h3>
              <div className="h-72 rounded-xl overflow-hidden shadow-lg">
                <ImageCarousel images={carouselImages} autoPlayInterval={5000} />
              </div>
            </div>

            {/* Trial Banner */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white text-center">
              <Gift className="w-12 h-12 mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-2">14 Días Gratis</h3>
              <p className="text-sm text-green-100 mb-4">
                Prueba todas las funcionalidades sin compromiso
              </p>
              <div className="space-y-2 text-left text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Sin tarjeta de crédito</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Acceso completo</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Cancela cuando quieras</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-primary-dark to-primary-light rounded-xl p-6 text-white">
              <h4 className="text-lg font-semibold mb-4">Resultados Comprobados</h4>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <benefit.icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Calculator */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-neutral-200">
              <div className="flex items-center space-x-2 mb-4">
                <Calculator className="w-5 h-5 text-primary-dark" />
                <h4 className="text-lg font-semibold text-neutral-900">
                  Calcula tu Ahorro
                </h4>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-neutral-600 block mb-2">
                    Número de espacios
                  </label>
                  <input
                    type="number"
                    placeholder="50"
                    value={spaces}
                    onChange={(e) => setSpaces(e.target.value)}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm text-neutral-600 block mb-2">
                    Ingresos mensuales actuales
                  </label>
                  <input
                    type="text"
                    placeholder="$5,000,000"
                    value={monthlyRevenue ? formatCurrency(monthlyRevenue) : ''}
                    onChange={handleRevenueChange}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light text-sm"
                  />
                </div>
                <div className="bg-gradient-to-br from-primary-dark to-primary-light rounded-lg p-4">
                  <p className="text-sm text-white mb-1">Ahorro estimado anual</p>
                  <p className="text-3xl font-bold text-white">
                    {calculateSavings() > 0 ? formatCurrency(calculateSavings()) : '$0'}
                  </p>
                  <p className="text-xs text-white mt-1">Basado en promedio del 30%</p>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-neutral-200">
              <h4 className="text-lg font-semibold text-neutral-900 mb-4">
                ¿Tienes Preguntas?
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-primary-dark flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-neutral-900">Llámanos</p>
                    <a href="tel:+573001234567" className="text-sm text-primary-dark hover:text-primary-light">
                      +57 300 123 4567
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-primary-dark flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-neutral-900">Escríbenos</p>
                    <a href="mailto:hola@parktony.com" className="text-sm text-primary-dark hover:text-primary-light">
                      hola@parktony.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-primary-dark flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-neutral-900">Horario</p>
                    <p className="text-sm text-neutral-600">Lun - Vie: 8am - 6pm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-primary-light rounded-xl p-6 text-white">
              <h4 className="text-lg font-semibold mb-2">
                Comienza Hoy Mismo
              </h4>
              <p className="text-sm text-neutral-100 mb-4">
                Únete a más de 500 parqueaderos que ya confían en ParkTony
              </p>
              <a
                href="/registro"
                className="block w-full text-center bg-white text-primary-dark font-semibold py-3 px-4 rounded-lg hover:bg-neutral-100 transition-colors"
              >
                Comenzar Ahora
              </a>
            </div>

            {/* Trust Badge */}
            <div className="text-center py-4">
              <div className="flex items-center justify-center space-x-2 text-sm text-neutral-600 mb-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Más de 500 parqueaderos activos</span>
              </div>
              <div className="flex items-center justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
                <span className="text-sm text-neutral-600 ml-2">4.9/5</span>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
};

export default LandingLayout;
