import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Car,
  Settings,
  DollarSign,
  Users,
  Building2,
  LogOut,
} from 'lucide-react';
import { useAuth } from '../features/auth/context/AuthContext';

const Sidebar = () => {
  const { user, logout } = useAuth();

  const navigation = [
    { name: 'Dashboard', href: '/app', icon: LayoutDashboard },
    { name: 'Control de Ingreso/Salida', href: '/app/control', icon: Car },
    { name: 'Gestión de Espacios', href: '/app/espacios', icon: Settings },
    { name: 'Sistema Contable', href: '/app/contable', icon: DollarSign },
    { name: 'Perfil Empresa', href: '/app/perfil', icon: Building2 },
  ];

  // Add Users menu only for admin
  if (user?.role === 'admin') {
    navigation.push({ name: 'Usuarios', href: '/app/usuarios', icon: Users });
  }

  return (
    <div className="flex flex-col h-full bg-primary-dark text-white w-64">
      {/* Logo */}
      <div className="flex items-center justify-center p-6 border-b border-primary-light border-opacity-20">
        <img
          src="/logo.png"
          alt="Parktony Logo"
          className="h-12 w-auto"
        />
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            end={item.href === '/app'}
            className={({ isActive }) =>
              `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-primary-light text-white'
                  : 'text-neutral-300 hover:bg-primary-light hover:bg-opacity-20 hover:text-white'
              }`
            }
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* User Info & Logout */}
      <div className="p-4 border-t border-primary-light border-opacity-20">
        <div className="flex items-center px-4 py-3 mb-2 bg-primary-light bg-opacity-10 rounded-lg">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 bg-primary-light rounded-full flex items-center justify-center text-white font-semibold">
              {user?.name?.charAt(0) || 'U'}
            </div>
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-white">{user?.name || 'Usuario'}</p>
            <p className="text-xs text-neutral-300">{user?.role === 'admin' ? 'Administrador' : 'Operador'}</p>
          </div>
        </div>
        <button
          onClick={logout}
          className="flex items-center w-full px-4 py-2 text-sm font-medium text-neutral-300 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-200"
        >
          <LogOut className="w-5 h-5 mr-3" />
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
