import { Bell } from 'lucide-react';
import { useAuth } from '../features/auth/context/AuthContext';

const TopBar = ({ title }) => {
  const { user } = useAuth();

  return (
    <div className="bg-white border-b border-neutral-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Page Title */}
        <h1 className="text-2xl font-bold text-neutral-900">{title}</h1>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <button className="relative p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User Avatar */}
          <div className="flex items-center space-x-3">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-neutral-900">{user?.name || 'Usuario'}</p>
              <p className="text-xs text-neutral-500">{user?.role === 'admin' ? 'Administrador' : 'Operador'}</p>
            </div>
            <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center text-white font-semibold">
              {user?.name?.charAt(0) || 'U'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
