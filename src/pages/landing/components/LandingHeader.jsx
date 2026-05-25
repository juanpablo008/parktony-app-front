import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import { X, Menu } from 'lucide-react';

const LandingHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/servicios', label: 'Servicios' },
    { to: '/app-movil', label: 'App Móvil' },
    { to: '/beneficios', label: 'Beneficios' },
    { to: '/precios', label: 'Precios' },
    { to: '/sobre-nosotros', label: 'Sobre Nosotros' },
  ];

  return (
    <header className="bg-white border-b border-neutral-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
            <img src="/logo.png" alt="Parktony" className="h-8 sm:h-10 w-auto" />
            <span className="text-lg sm:text-xl font-bold text-primary-dark">Parktony</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-neutral-600 hover:text-primary-dark transition-colors text-sm lg:text-base"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons - Desktop only */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <Link to="/login">
              <Button variant="secondary" size="sm" className="lg:text-sm">
                Iniciar Sesión
              </Button>
            </Link>
            <Link to="/registro">
              <Button variant="primary" size="sm" className="lg:text-sm">
                Crear Cuenta
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex items-center justify-center p-2 rounded-lg hover:bg-neutral-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-neutral-700" />
            ) : (
              <Menu className="w-6 h-6 text-neutral-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-neutral-200 py-4">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-neutral-700 hover:text-primary-dark hover:bg-neutral-50 px-4 py-3 rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 pt-4 border-t border-neutral-200 space-y-3">
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="block">
                  <Button variant="secondary" size="md" className="w-full justify-center">
                    Iniciar Sesión
                  </Button>
                </Link>
                <Link to="/registro" onClick={() => setIsMobileMenuOpen(false)} className="block">
                  <Button variant="primary" size="md" className="w-full justify-center">
                    Crear Cuenta
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default LandingHeader;
