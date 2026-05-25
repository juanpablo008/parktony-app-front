import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in (from localStorage)
    const storedUser = localStorage.getItem('parktony_user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('parktony_user');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // Mock login - in production this would call the API
    setLoading(true);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));

      // Mock validation
      if (email && password) {
        const mockUser = {
          id: '1',
          email: email,
          name: email.includes('admin') ? 'Administrador' : 'Operador',
          role: email.includes('admin') ? 'admin' : 'empleado',
          parkingId: 'parking-001',
        };

        setUser(mockUser);
        setIsAuthenticated(true);
        localStorage.setItem('parktony_user', JSON.stringify(mockUser));

        return { success: true };
      } else {
        throw new Error('Credenciales inválidas');
      }
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('parktony_user');
  };

  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
