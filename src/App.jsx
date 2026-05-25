import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './features/auth/context/AuthContext';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/landing/HomePage';
import ServiciosPage from './pages/landing/ServiciosPage';
import AppMovilPage from './pages/landing/AppMovilPage';
import BeneficiosPage from './pages/landing/BeneficiosPage';
import PreciosPage from './pages/landing/PreciosPage';
import SobreNosotrosPage from './pages/landing/SobreNosotrosPage';
import Registro from './pages/landing/Registro';
import ConfirmacionPago from './pages/landing/ConfirmacionPago';
import Login from './features/auth/Login';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './features/dashboard/Dashboard';
import ParkingControl from './features/parking-control/ParkingControl';
import SpacesManagement from './features/spaces-management/SpacesManagement';
import Accounting from './features/accounting/Accounting';

// Protected Route wrapper
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-light border-t-primary-dark rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-neutral-600">Cargando...</p>
        </div>
      </div>
    );
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

// Public Route wrapper (redirect to dashboard if already logged in)
const PublicRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-light border-t-primary-dark rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-neutral-600">Cargando...</p>
        </div>
      </div>
    );
  }

  return !isAuthenticated ? children : <Navigate to="/app" replace />;
};

function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/servicios" element={<ServiciosPage />} />
      <Route path="/app-movil" element={<AppMovilPage />} />
      <Route path="/beneficios" element={<BeneficiosPage />} />
      <Route path="/precios" element={<PreciosPage />} />
      <Route path="/sobre-nosotros" element={<SobreNosotrosPage />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/registro/confirmacion" element={<ConfirmacionPago />} />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />

      {/* Protected Routes - Dashboard */}
      <Route
        path="/app"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="control" element={<ParkingControl />} />
        <Route path="espacios" element={<SpacesManagement />} />
        <Route path="contable" element={<Accounting />} />
        {/* Placeholder routes - to be implemented */}
        <Route path="perfil" element={<div className="text-center py-12"><h2 className="text-2xl font-bold text-neutral-900">Perfil de Empresa - Próximamente</h2></div>} />
        <Route path="usuarios" element={<div className="text-center py-12"><h2 className="text-2xl font-bold text-neutral-900">Gestión de Usuarios - Próximamente</h2></div>} />
      </Route>

      {/* Catch all - redirect to landing */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
