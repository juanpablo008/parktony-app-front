import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

const DashboardLayout = () => {
  const location = useLocation();

  // Map routes to page titles
  const pageTitles = {
    '/app': 'Dashboard',
    '/app/control': 'Control de Ingreso/Salida',
    '/app/espacios': 'Gestión de Espacios',
    '/app/contable': 'Sistema Contable',
    '/app/perfil': 'Perfil de Empresa',
    '/app/usuarios': 'Gestión de Usuarios',
  };

  const currentTitle = pageTitles[location.pathname] || 'Parktony';

  return (
    <div className="flex h-screen bg-neutral-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <TopBar title={currentTitle} />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
