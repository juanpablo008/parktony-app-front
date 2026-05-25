import { Link } from 'react-router-dom';
import LandingHeader from './components/LandingHeader';
import Footer from './components/Footer';
import ImageCarousel from '../../components/ui/ImageCarousel';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import {
  ArrowRight,
  Car,
  DollarSign,
  BarChart3,
  Clock,
  CheckCircle,
  Star,
  Users,
  Building2,
  Smartphone
} from 'lucide-react';

const HomePage = () => {
  const [statsRef, statsVisible] = useScrollAnimation({ threshold: 0.2 });
  const [featuresRef, featuresVisible] = useScrollAnimation({ threshold: 0.1 });
  const [testimonialsRef, testimonialsVisible] = useScrollAnimation({ threshold: 0.1 });
  const [bannerRef, bannerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [pricingRef, pricingVisible] = useScrollAnimation({ threshold: 0.1 });
  const [ctaRef, ctaVisible] = useScrollAnimation({ threshold: 0.2 });
  const [carouselRef, carouselVisible] = useScrollAnimation({ threshold: 0.2 });

  const carouselImages = [
    {
      src: '/parking-hero.jpg',
      alt: 'Parqueadero moderno',
      caption: 'Gestión Inteligente',
      description: 'Control total de tu parqueadero en tiempo real'
    },
    {
      src: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&q=80',
      alt: 'Sistema de control',
      caption: 'Tecnología Avanzada',
      description: 'Plataforma diseñada para maximizar eficiencia'
    },
    {
      src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      alt: 'Reportes y análisis',
      caption: 'Reportes Detallados',
      description: 'Analiza tendencias y toma mejores decisiones'
    },
    {
      src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      alt: 'Dashboard analytics',
      caption: 'Dashboard Intuitivo',
      description: 'Visualiza todas tus métricas importantes'
    },
    {
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      alt: 'App móvil',
      caption: 'App para Conductores',
      description: 'Los usuarios encuentran parqueadero desde su celular'
    },
    {
      src: 'https://images.unsplash.com/photo-1565008576549-57569a791960?w=800&q=80',
      alt: 'Barrera automática',
      caption: 'Acceso Automatizado',
      description: 'Barreras y control de acceso inteligente'
    },
    {
      src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
      alt: 'Sistema contable',
      caption: 'Contabilidad Automática',
      description: 'Reportes financieros generados al instante'
    },
    {
      src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80',
      alt: 'Soporte en línea',
      caption: 'Soporte 24/7',
      description: 'Equipo dedicado para ayudarte en todo momento'
    }
  ];

  const features = [
    {
      icon: Car,
      title: 'Control Total',
      description: 'Gestiona ingresos, salidas y ocupación en tiempo real',
      link: '/servicios',
      linkText: 'Ver Servicios'
    },
    {
      icon: Smartphone,
      title: 'App Móvil',
      description: 'Conecta con conductores que buscan parqueadero',
      link: '/app-movil',
      linkText: 'Conocer App'
    },
    {
      icon: DollarSign,
      title: 'Sistema Contable',
      description: 'Automatiza tu contabilidad y genera reportes al instante',
      link: '/servicios',
      linkText: 'Ver Más'
    },
    {
      icon: BarChart3,
      title: 'Reportes Inteligentes',
      description: 'Analiza tendencias y toma decisiones basadas en datos',
      link: '/beneficios',
      linkText: 'Ver Beneficios'
    },
  ];

  const stats = [
    { icon: Building2, number: '500+', label: 'Parqueaderos Activos' },
    { icon: Users, number: '50K+', label: 'Usuarios Diarios' },
    { icon: Star, number: '4.9/5', label: 'Satisfacción' },
    { icon: Clock, number: '99.9%', label: 'Disponibilidad' },
  ];

  const testimonials = [
    {
      name: 'Carlos Ramírez',
      role: 'Dueño de Parqueadero Centro',
      content: 'Desde que implementamos ParkTony, nuestros ingresos aumentaron un 35%. La automatización nos ahorró horas de trabajo administrativo.',
      rating: 5,
    },
    {
      name: 'María González',
      role: 'Gerente Operaciones Parkings del Norte',
      content: 'La plataforma es increíblemente fácil de usar. Nuestro equipo la aprendió en menos de una hora y ahora procesamos vehículos 3 veces más rápido.',
      rating: 5,
    },
    {
      name: 'Jorge Herrera',
      role: 'Administrador Estacionamiento Sur',
      content: 'El sistema de reportes nos permite tomar decisiones informadas. Los clientes también aman poder ver disponibilidad desde su celular.',
      rating: 5,
    },
  ];

  const plans = [
    { name: 'Básico', price: '99.000', spaces: '50' },
    { name: 'Profesional', price: '199.000', spaces: '150', popular: true },
    { name: 'Empresarial', price: '349.000', spaces: 'Ilimitado' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <LandingHeader />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary-dark to-primary-light text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center bg-white rounded-full px-4 py-2 mb-8 shadow-lg">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-2 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-primary-dark">
                <span className="hidden sm:inline">Calificado 4.9/5 por más de 500 parqueaderos</span>
                <span className="sm:hidden">4.9/5 • 500+ parqueaderos</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6">
              El Sistema Más Completo para Tu Parqueadero
            </h1>

            <p className="text-xl md:text-2xl text-neutral-100 mb-10 max-w-3xl mx-auto">
              Aumenta tus ingresos, reduce costos operativos y ofrece la mejor experiencia
              a tus clientes con tecnología de primer nivel
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/registro" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-white text-primary-dark hover:bg-neutral-100 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200">
                  Comenzar Prueba Gratis
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </Link>
              <Link to="/servicios" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg border-2 border-white text-white hover:bg-white hover:text-primary-dark transition-all duration-200">
                  Ver Demostración
                </button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-neutral-200">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                <span>14 días gratis</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                <span>Sin tarjeta de crédito</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                <span>Cancela cuando quieras</span>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 -mb-px">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block" preserveAspectRatio="none">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className={`py-16 bg-white transition-opacity duration-700 ${statsVisible ? 'opacity-100' : 'opacity-0-init'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center ${statsVisible ? 'animate-scale-in' : 'opacity-0-init'}`}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-light bg-opacity-10 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-primary-dark" />
                </div>
                <div className="text-4xl font-bold text-primary-dark mb-2">
                  {stat.number}
                </div>
                <div className="text-neutral-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section ref={featuresRef} className={`py-20 bg-neutral-50 transition-opacity duration-700 ${featuresVisible ? 'opacity-100' : 'opacity-0-init'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold text-neutral-900 mb-4 ${featuresVisible ? 'animate-fade-in-up' : 'opacity-0-init'}`}>
              Todo lo que Necesitas en un Solo Lugar
            </h2>
            <p className={`text-xl text-neutral-600 max-w-3xl mx-auto ${featuresVisible ? 'animate-fade-in-up' : 'opacity-0-init'}`} style={{ animationDelay: '100ms' }}>
              Una plataforma completa diseñada para maximizar la eficiencia de tu parqueadero
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border-2 border-transparent hover:border-primary-light transition-shadow duration-300 ${featuresVisible ? 'animate-fade-in-up' : 'opacity-0-init'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-dark rounded-xl mb-4">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 mb-4">
                  {feature.description}
                </p>
                <Link
                  to={feature.link}
                  className="inline-flex items-center text-primary-dark font-semibold hover:text-primary-light transition-colors"
                >
                  {feature.linkText}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className={`py-20 bg-white transition-opacity duration-700 ${testimonialsVisible ? 'opacity-100' : 'opacity-0-init'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold text-neutral-900 mb-4 ${testimonialsVisible ? 'animate-fade-in-up' : 'opacity-0-init'}`}>
              Lo que Dicen Nuestros Clientes
            </h2>
            <p className={`text-xl text-neutral-600 max-w-3xl mx-auto ${testimonialsVisible ? 'animate-fade-in-up' : 'opacity-0-init'}`} style={{ animationDelay: '100ms' }}>
              Más de 500 parqueaderos confían en ParkTony para sus operaciones diarias
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-neutral-50 rounded-xl p-6 border-2 border-neutral-200 hover:border-primary-light transition-colors duration-300 ${testimonialsVisible ? 'animate-fade-in-up' : 'opacity-0-init'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-neutral-700 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-neutral-900">{testimonial.name}</p>
                  <p className="text-sm text-neutral-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section ref={bannerRef} className={`relative min-h-[600px] overflow-hidden py-20 transition-opacity duration-700 ${bannerVisible ? 'opacity-100' : 'opacity-0-init'}`}>
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/parking-hero.jpg"
            alt="Parqueadero moderno"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/70 via-primary-dark/60 to-primary-light/50"></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center justify-center py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 mb-6">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400 mr-2 flex-shrink-0" />
              <span className="text-sm sm:text-base text-white font-semibold">Tecnología de Clase Mundial</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-4">
              Más que un Software,<br />
              <span className="text-primary-light">Tu Socio de Crecimiento</span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-xl md:text-2xl text-neutral-100 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              Únete a la revolución digital de parqueaderos en Colombia.
              Aumenta tus ingresos, reduce costos y ofrece experiencias excepcionales.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              <div className="text-center">
                <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-2">500+</div>
                <div className="text-xs sm:text-sm text-neutral-200">Parqueaderos Activos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-2">30%</div>
                <div className="text-xs sm:text-sm text-neutral-200">Aumento Promedio</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-2">24/7</div>
                <div className="text-xs sm:text-sm text-neutral-200">Soporte Dedicado</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link to="/registro" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg bg-white text-primary-dark hover:bg-neutral-100 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-200">
                  <span className="hidden sm:inline">Comienza tu Transformación</span>
                  <span className="sm:hidden">Comenzar Ahora</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </Link>
              <Link to="/servicios" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg border-2 border-white text-white hover:bg-white hover:text-primary-dark transition-all duration-200">
                  Ver Cómo Funciona
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Animated Particles Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-primary-light/40 rounded-full animate-pulse delay-75"></div>
          <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse delay-150"></div>
          <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-primary-light/30 rounded-full animate-pulse delay-300"></div>
        </div>
      </section>

      {/* Image Carousel */}
      <section ref={carouselRef} className={`py-12 bg-neutral-100 transition-opacity duration-700 ${carouselVisible ? 'opacity-100' : 'opacity-0-init'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={`text-2xl sm:text-3xl font-bold text-neutral-900 mb-3 ${carouselVisible ? 'animate-fade-in-up' : 'opacity-0-init'}`}>
              ParkTony en Acción
            </h2>
            <p className={`text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto ${carouselVisible ? 'animate-fade-in-up' : 'opacity-0-init'}`} style={{ animationDelay: '100ms' }}>
              Descubre cómo nuestra plataforma transforma la gestión de parqueaderos
            </p>
          </div>
          <div className={`h-64 sm:h-80 rounded-xl overflow-hidden shadow-lg ${carouselVisible ? 'animate-scale-in' : 'opacity-0-init'}`} style={{ animationDelay: '200ms' }}>
            <ImageCarousel images={carouselImages} autoPlayInterval={5000} />
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section ref={pricingRef} className={`py-20 bg-neutral-50 transition-opacity duration-700 ${pricingVisible ? 'opacity-100' : 'opacity-0-init'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold text-neutral-900 mb-4 ${pricingVisible ? 'animate-fade-in-up' : 'opacity-0-init'}`}>
              Planes para Cada Tamaño de Negocio
            </h2>
            <p className={`text-xl text-neutral-600 max-w-3xl mx-auto ${pricingVisible ? 'animate-fade-in-up' : 'opacity-0-init'}`} style={{ animationDelay: '100ms' }}>
              Comienza con 14 días de prueba gratis, sin tarjeta de crédito
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-8 text-center ${pricingVisible ? 'animate-fade-in-up' : 'opacity-0-init'} ${
                  plan.popular
                    ? 'border-2 border-primary-light shadow-xl ring-2 ring-primary-light ring-opacity-50'
                    : 'border-2 border-neutral-200'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.popular && (
                  <div className="bg-primary-light text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    MÁS POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary-dark">${plan.price}</span>
                  <span className="text-neutral-600">/mes</span>
                </div>
                <p className="text-neutral-600 mb-6">Hasta {plan.spaces} espacios</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/precios">
              <button className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold rounded-lg bg-primary-dark text-white hover:bg-primary-light transition-colors">
                Ver Todos los Planes
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section ref={ctaRef} className={`py-20 bg-gradient-to-r from-primary-dark to-primary-light text-white transition-opacity duration-700 ${ctaVisible ? 'opacity-100' : 'opacity-0-init'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${ctaVisible ? 'animate-fade-in-up' : 'opacity-0-init'}`}>
            Listo para Transformar tu Parqueadero?
          </h2>
          <p className={`text-xl text-neutral-100 mb-8 ${ctaVisible ? 'animate-fade-in-up' : 'opacity-0-init'}`} style={{ animationDelay: '100ms' }}>
            Únete a más de 500 parqueaderos que ya están optimizando sus operaciones con ParkTony
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${ctaVisible ? 'animate-fade-in-up' : 'opacity-0-init'}`} style={{ animationDelay: '200ms' }}>
            <Link to="/registro">
              <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-white text-primary-dark hover:bg-neutral-100 shadow-xl transition-all duration-200">
                Comenzar Ahora Gratis
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </Link>
            <Link to="/sobre-nosotros">
              <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg border-2 border-white text-white hover:bg-white hover:text-primary-dark transition-all duration-200">
                Conocer Más
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
