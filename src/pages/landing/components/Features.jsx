import { Car, DollarSign, BarChart3, Clock, Shield, Smartphone } from 'lucide-react';
import Card from '../../../components/ui/Card';

const Features = () => {
  const features = [
    {
      icon: Car,
      title: 'Control de Ingreso/Salida',
      description: 'Registra la entrada y salida de vehículos con cálculo automático de tarifas según el tiempo de estadía.',
    },
    {
      icon: DollarSign,
      title: 'Sistema Contable Integrado',
      description: 'Gestiona ingresos, medios de pago y genera reportes financieros detallados automáticamente.',
    },
    {
      icon: BarChart3,
      title: 'Reportes en Tiempo Real',
      description: 'Visualiza estadísticas de ocupación, ingresos y tendencias con gráficas interactivas.',
    },
    {
      icon: Clock,
      title: 'Disponibilidad 24/7',
      description: 'Accede a tu panel administrativo desde cualquier lugar y en cualquier momento.',
    },
    {
      icon: Shield,
      title: 'Seguro y Confiable',
      description: 'Tus datos están protegidos con encriptación y respaldos automáticos diarios.',
    },
    {
      icon: Smartphone,
      title: 'Multi-dispositivo',
      description: 'Compatible con computadoras, tablets y smartphones para máxima flexibilidad.',
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Todo lo que Necesitas para Gestionar tu Parqueadero
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Una plataforma completa con todas las herramientas esenciales para optimizar
            la operación de tu negocio.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-light bg-opacity-10 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-primary-dark" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-neutral-600">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
