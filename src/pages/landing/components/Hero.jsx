import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary-dark via-primary-dark to-primary-light text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Gestiona tu Parqueadero de Forma Inteligente
            </h1>
            <p className="text-xl text-neutral-100 mb-8">
              La solución completa para administrar parqueaderos: control de ingresos y salidas,
              sistema contable integrado y reportes en tiempo real.
            </p>

            {/* Benefits List */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-primary-light" />
                <span className="text-lg">Control total de ocupación en tiempo real</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-primary-light" />
                <span className="text-lg">Contabilidad automática y reportes detallados</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-primary-light" />
                <span className="text-lg">Acceso desde cualquier dispositivo</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/registro" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-lg font-medium rounded-lg bg-white text-primary-dark hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-all duration-200">
                  Comenzar Ahora <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </Link>
              <Link to="/beneficios" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-lg font-medium rounded-lg border-2 border-white text-white hover:bg-white hover:text-primary-dark focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-all duration-200">
                  Ver Beneficios
                </button>
              </Link>
            </div>
          </div>

          {/* Right Image - Parking Photo */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/parking-hero.jpg"
                alt="Parqueadero moderno"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient for better integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent opacity-30"></div>
            </div>

            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-4 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div>
                  <p className="text-sm text-neutral-600">Ocupación actual</p>
                  <p className="text-2xl font-bold text-primary-dark">85%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
