import { TrendingUp, Target, Zap, Users } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Aumenta tus Ingresos',
      description: 'Optimiza la ocupación de tu parqueadero y reduce tiempos muertos. Nuestros clientes reportan un aumento del 30% en ingresos durante el primer trimestre.',
      stat: '+30%',
      statLabel: 'Aumento promedio',
    },
    {
      icon: Target,
      title: 'Reduce Costos Operativos',
      description: 'Automatiza tareas administrativas y elimina errores manuales. Ahorra tiempo en contabilidad y genera reportes instantáneos.',
      stat: '-40%',
      statLabel: 'Tiempo administrativo',
    },
    {
      icon: Zap,
      title: 'Eficiencia Garantizada',
      description: 'Procesa ingresos y salidas 3 veces más rápido. Sistema intuitivo que tu equipo aprenderá en minutos, no días.',
      stat: '3x',
      statLabel: 'Más rápido',
    },
    {
      icon: Users,
      title: 'Mejor Experiencia para Conductores',
      description: 'Los conductores pueden ver disponibilidad en tiempo real desde la app móvil, aumentando la afluencia a tu parqueadero.',
      stat: '+45%',
      statLabel: 'Más clientes',
    },
  ];

  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            ¿Por Qué Elegir Parktony?
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Transforma tu parqueadero en un negocio más rentable y eficiente.
            Estos son los resultados que nuestros clientes experimentan.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-neutral-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-primary-light"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-dark rounded-lg flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-neutral-600 mb-4">
                    {benefit.description}
                  </p>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-bold text-primary-dark">
                      {benefit.stat}
                    </span>
                    <span className="text-sm text-neutral-500">
                      {benefit.statLabel}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modelo de Negocio */}
        <div className="mt-16 bg-gradient-to-r from-primary-dark to-primary-light rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Nuestro Modelo de Suscripción
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">Suscripción</div>
                <p className="text-neutral-100">
                  Pago mensual simple y transparente según el tamaño de tu parqueadero
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">Sin Comisiones</div>
                <p className="text-neutral-100">
                  No cobramos porcentaje de tus ingresos. Todo lo que ganes es tuyo
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">Escalable</div>
                <p className="text-neutral-100">
                  Crece tu negocio sin preocuparte por costos adicionales inesperados
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
