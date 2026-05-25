import LandingLayout from '../../layouts/LandingLayout';
import { Target, Eye, Award, Users, Heart, Zap } from 'lucide-react';

const SobreNosotrosPage = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovación',
      description: 'Desarrollamos soluciones tecnológicas que transforman la forma de gestionar parqueaderos.',
    },
    {
      icon: Heart,
      title: 'Compromiso',
      description: 'Nos dedicamos al éxito de nuestros clientes con soporte y mejoras continuas.',
    },
    {
      icon: Users,
      title: 'Colaboración',
      description: 'Trabajamos junto a nuestros clientes para entender y resolver sus necesidades reales.',
    },
    {
      icon: Zap,
      title: 'Eficiencia',
      description: 'Optimizamos procesos para ahorrar tiempo y recursos en la operación diaria.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Parqueaderos Activos' },
    { number: '50K+', label: 'Vehículos Diarios' },
    { number: '99.9%', label: 'Uptime' },
    { number: '4.9/5', label: 'Satisfacción' },
  ];

  return (
    <LandingLayout>
      <div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-dark via-primary-dark to-primary-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transformando la Gestión de Parqueaderos
            </h1>
            <p className="text-xl text-neutral-100 mb-8">
              ParkTony nace de la necesidad de modernizar la industria de parqueaderos en Colombia,
              brindando tecnología accesible y fácil de usar para todos.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Misión */}
            <div className="bg-neutral-50 rounded-2xl p-8 border-2 border-primary-light">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-dark rounded-full mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">Nuestra Misión</h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Proporcionar una plataforma integral que simplifique la administración de parqueaderos,
                aumentando la rentabilidad de nuestros clientes y mejorando la experiencia de los conductores
                a través de tecnología innovadora y accesible.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-neutral-50 rounded-2xl p-8 border-2 border-primary-light">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-light rounded-full mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">Nuestra Visión</h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Ser la plataforma líder en gestión de parqueaderos en Latinoamérica, reconocidos por
                nuestra capacidad de innovación continua y el impacto positivo en la movilidad urbana
                de las ciudades donde operamos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-primary-dark to-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-neutral-100 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Los principios que guían cada decisión y desarrollo en ParkTony
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-light bg-opacity-10 rounded-full mb-4">
                  <value.icon className="w-7 h-7 text-primary-dark" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-dark rounded-full mb-6">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Nuestra Historia
            </h2>
          </div>

          <div className="space-y-8">
            <div className="bg-neutral-50 rounded-xl p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-20 text-center">
                  <div className="text-2xl font-bold text-primary-dark">2024</div>
                  <div className="text-sm text-neutral-600">Inicio</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    Fundación de ParkTony
                  </h3>
                  <p className="text-neutral-600">
                    Identificamos la necesidad de modernizar la gestión de parqueaderos en Colombia.
                    Comenzamos a desarrollar una plataforma que fuera fácil de usar, asequible y completa.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 rounded-xl p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-20 text-center">
                  <div className="text-2xl font-bold text-primary-dark">2025</div>
                  <div className="text-sm text-neutral-600">Crecimiento</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    Expansión del Servicio
                  </h3>
                  <p className="text-neutral-600">
                    Lanzamos la plataforma web completa con sistema contable integrado. Más de 100
                    parqueaderos confían en ParkTony para sus operaciones diarias.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 rounded-xl p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-20 text-center">
                  <div className="text-2xl font-bold text-primary-dark">2026</div>
                  <div className="text-sm text-neutral-600">Innovación</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    App Móvil para Conductores
                  </h3>
                  <p className="text-neutral-600">
                    Estamos desarrollando la aplicación móvil que permitirá a los conductores encontrar,
                    comparar y reservar espacios de parqueo en tiempo real, conectando parqueaderos con usuarios.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </LandingLayout>
  );
};

export default SobreNosotrosPage;
