import { Smartphone, MapPin, DollarSign, Clock, Search, Star } from 'lucide-react';
import Card from '../../../components/ui/Card';

const MobileApp = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Encuentra Parqueaderos Cerca',
      description: 'Localiza parqueaderos disponibles en tiempo real cerca de tu ubicación.',
    },
    {
      icon: DollarSign,
      title: 'Compara Precios',
      description: 'Visualiza tarifas por hora y por día para elegir la mejor opción.',
    },
    {
      icon: Clock,
      title: 'Disponibilidad en Vivo',
      description: 'Consulta cuántos espacios hay disponibles antes de llegar.',
    },
    {
      icon: Search,
      title: 'Búsqueda Inteligente',
      description: 'Filtra por precio, distancia, servicios y tipo de vehículo.',
    },
  ];

  return (
    <section id="app-movil" className="py-12 lg:py-16 xl:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12 items-center">
          {/* Left Side - Mobile App Mockup */}
          <div className="relative order-2 xl:order-1">
            <div className="relative mx-auto max-w-[280px] sm:max-w-sm lg:max-w-md">
              {/* Phone Frame */}
              <div className="relative bg-gradient-to-br from-primary-dark to-primary-light rounded-[2.5rem] sm:rounded-[3rem] p-3 sm:p-4 shadow-2xl">
                <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden">
                  {/* Mock App Screen */}
                  <div className="bg-neutral-50 p-4 sm:p-6">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center mb-4 sm:mb-6">
                      <span className="text-[10px] sm:text-xs font-medium text-neutral-600">9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-neutral-400 rounded-sm"></div>
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-neutral-400 rounded-sm"></div>
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-neutral-400 rounded-sm"></div>
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="mb-4 sm:mb-6">
                      <h3 className="text-lg sm:text-2xl font-bold text-primary-dark mb-1 sm:mb-2">ParkTony</h3>
                      <p className="text-[10px] sm:text-sm text-neutral-600">Encuentra tu parqueadero ideal</p>
                    </div>

                    {/* Search Bar */}
                    <div className="bg-white rounded-lg shadow-sm p-2 sm:p-3 mb-4 sm:mb-6 flex items-center">
                      <Search className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-400 mr-1.5 sm:mr-2" />
                      <span className="text-[10px] sm:text-sm text-neutral-500">Buscar parqueaderos...</span>
                    </div>

                    {/* Parking Cards */}
                    <div className="space-y-3 sm:space-y-4">
                      {/* Card 1 */}
                      <div className="bg-white rounded-lg shadow-md p-3 sm:p-4">
                        <div className="flex justify-between items-start mb-1.5 sm:mb-2">
                          <div className="min-w-0 flex-1 mr-2">
                            <h4 className="font-semibold text-neutral-900 text-xs sm:text-sm truncate">Parqueadero Centro</h4>
                            <div className="flex items-center text-[10px] sm:text-xs text-neutral-600 mt-0.5 sm:mt-1">
                              <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5 sm:mr-1 flex-shrink-0" />
                              <span>0.5 km</span>
                            </div>
                          </div>
                          <div className="flex items-center bg-green-100 text-green-700 text-[10px] sm:text-xs font-medium px-1.5 sm:px-2 py-0.5 sm:py-1 rounded flex-shrink-0">
                            <span>15 disp.</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-2 sm:mt-3">
                          <div className="flex items-center space-x-2 sm:space-x-3">
                            <div>
                              <p className="text-[10px] sm:text-xs text-neutral-600">Por hora</p>
                              <p className="text-xs sm:text-sm font-bold text-primary-dark">$3,500</p>
                            </div>
                            <div className="h-5 sm:h-6 w-px bg-neutral-300"></div>
                            <div>
                              <p className="text-[10px] sm:text-xs text-neutral-600">Por día</p>
                              <p className="text-xs sm:text-sm font-bold text-primary-dark">$25,000</p>
                            </div>
                          </div>
                          <div className="flex items-center flex-shrink-0">
                            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
                            <span className="text-[10px] sm:text-xs font-medium ml-0.5 sm:ml-1">4.8</span>
                          </div>
                        </div>
                      </div>

                      {/* Card 2 */}
                      <div className="bg-white rounded-lg shadow-md p-3 sm:p-4">
                        <div className="flex justify-between items-start mb-1.5 sm:mb-2">
                          <div className="min-w-0 flex-1 mr-2">
                            <h4 className="font-semibold text-neutral-900 text-xs sm:text-sm truncate">Estacionamiento Norte</h4>
                            <div className="flex items-center text-[10px] sm:text-xs text-neutral-600 mt-0.5 sm:mt-1">
                              <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5 sm:mr-1 flex-shrink-0" />
                              <span>1.2 km</span>
                            </div>
                          </div>
                          <div className="flex items-center bg-yellow-100 text-yellow-700 text-[10px] sm:text-xs font-medium px-1.5 sm:px-2 py-0.5 sm:py-1 rounded flex-shrink-0">
                            <span>3 disp.</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-2 sm:mt-3">
                          <div className="flex items-center space-x-2 sm:space-x-3">
                            <div>
                              <p className="text-[10px] sm:text-xs text-neutral-600">Por hora</p>
                              <p className="text-xs sm:text-sm font-bold text-primary-dark">$2,800</p>
                            </div>
                            <div className="h-5 sm:h-6 w-px bg-neutral-300"></div>
                            <div>
                              <p className="text-[10px] sm:text-xs text-neutral-600">Por día</p>
                              <p className="text-xs sm:text-sm font-bold text-primary-dark">$20,000</p>
                            </div>
                          </div>
                          <div className="flex items-center flex-shrink-0">
                            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
                            <span className="text-[10px] sm:text-xs font-medium ml-0.5 sm:ml-1">4.5</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 bg-primary-light text-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-lg">
                <p className="text-[10px] sm:text-xs font-semibold">Próximamente</p>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 xl:order-2">
            <div className="inline-flex items-center bg-primary-light bg-opacity-10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
              <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-primary-dark mr-2" />
              <span className="text-xs sm:text-sm font-semibold text-primary-dark">App Móvil para Conductores</span>
            </div>

            <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-neutral-900 mb-3 sm:mb-4">
              Encuentra Parqueadero en Segundos
            </h2>
            <p className="text-base sm:text-lg xl:text-xl text-neutral-600 mb-6 xl:mb-8">
              Con la app móvil de ParkTony, los conductores pueden encontrar, comparar y reservar
              espacios de parqueo de forma rápida y sencilla.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 xl:mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary-light bg-opacity-10 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-primary-dark" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-0.5 sm:mb-1 text-sm sm:text-base">{feature.title}</h3>
                    <p className="text-xs sm:text-sm text-neutral-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Download Buttons Placeholder */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                disabled
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 bg-neutral-900 text-white rounded-lg font-medium text-sm sm:text-base hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                App Store
              </button>
              <button
                disabled
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 bg-neutral-900 text-white rounded-lg font-medium text-sm sm:text-base hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Google Play
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
