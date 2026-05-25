import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import Button from '../../../components/ui/Button';
import Card from '../../../components/ui/Card';

const Pricing = () => {
  const plans = [
    {
      name: 'Básico',
      price: '99.000',
      period: '/mes',
      description: 'Perfecto para parqueaderos pequeños',
      features: [
        'Hasta 50 espacios',
        'Control de ingreso/salida',
        'Reportes básicos',
        'Soporte por email',
        '1 usuario administrador',
      ],
      popular: false,
    },
    {
      name: 'Profesional',
      price: '199.000',
      period: '/mes',
      description: 'Ideal para parqueaderos medianos',
      features: [
        'Hasta 150 espacios',
        'Todo del plan Básico',
        'Sistema contable completo',
        'Reportes avanzados con gráficas',
        'Soporte prioritario',
        'Hasta 3 usuarios',
        'App móvil para conductores',
      ],
      popular: true,
    },
    {
      name: 'Empresarial',
      price: '349.000',
      period: '/mes',
      description: 'Para operaciones grandes',
      features: [
        'Espacios ilimitados',
        'Todo del plan Profesional',
        'Múltiples parqueaderos',
        'API personalizada',
        'Soporte 24/7',
        'Usuarios ilimitados',
        'Personalización de marca',
        'Exportación de datos',
      ],
      popular: false,
    },
  ];

  return (
    <section id="precios" className="py-12 lg:py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            Planes Diseñados para Tu Negocio
          </h2>
          <p className="text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto">
            Elige el plan que mejor se adapte al tamaño de tu parqueadero.
            Todos incluyen 14 días de prueba gratis.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${
                plan.popular
                  ? 'border-2 border-primary-light shadow-xl lg:scale-105'
                  : 'border border-neutral-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-primary-light text-white px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap shadow-md">
                    Más Popular
                  </span>
                </div>
              )}

              <div className={`text-center ${plan.popular ? 'pt-8' : 'pt-6'}`}>
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-neutral-600 mb-6">{plan.description}</p>

                <div className="mb-6 flex flex-col items-center">
                  <div className="flex items-baseline justify-center flex-wrap">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-dark break-all">
                      ${plan.price}
                    </span>
                    <span className="text-neutral-600 ml-1 text-base">{plan.period}</span>
                  </div>
                </div>

                <Link to="/registro" state={{ plan: plan.name }}>
                  <Button
                    variant={plan.popular ? 'primary' : 'outline'}
                    size="lg"
                    className="w-full mb-6"
                  >
                    Comenzar Prueba Gratis
                  </Button>
                </Link>

                <div className="text-left space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-primary-light flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Garantía */}
        <div className="mt-12 text-center">
          <p className="text-neutral-600">
            ✓ 14 días de prueba gratis • Sin tarjeta de crédito requerida • Cancela cuando quieras
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
