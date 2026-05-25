import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <span className="text-2xl font-bold">Parktony</span>
            </div>
            <p className="text-neutral-300 text-sm">
              La solución inteligente para gestionar tu parqueadero.
              Creado con amor para Tony.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4">Producto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/servicios" className="text-neutral-300 hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/app-movil" className="text-neutral-300 hover:text-white transition-colors">
                  App Móvil
                </Link>
              </li>
              <li>
                <Link to="/beneficios" className="text-neutral-300 hover:text-white transition-colors">
                  Beneficios
                </Link>
              </li>
              <li>
                <Link to="/precios" className="text-neutral-300 hover:text-white transition-colors">
                  Precios
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-neutral-300 hover:text-white transition-colors">
                  Iniciar Sesión
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/sobre-nosotros" className="text-neutral-300 hover:text-white transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-white transition-colors">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-white transition-colors">
                  Política de Privacidad
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary-light" />
                <span className="text-neutral-300">hola@parktony.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary-light" />
                <span className="text-neutral-300">+57 300 123 4567</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary-light mt-1" />
                <span className="text-neutral-300">
                  Medellín, Colombia
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-700 mt-8 pt-8 text-center text-sm text-neutral-400">
          <p>© 2026 Parktony. Todos los derechos reservados. Desarrollado con ❤️ para Tony 🐱</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
