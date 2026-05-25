// Configuración de Wompi
// Documentación: https://docs.wompi.co/docs/en/pagos-por-link-de-pago

// Validar que las variables de entorno estén configuradas
const validateEnvVars = () => {
  if (!import.meta.env.VITE_WOMPI_PUBLIC_KEY) {
    console.error('VITE_WOMPI_PUBLIC_KEY no está configurada en .env');
  }
  if (!import.meta.env.VITE_WOMPI_ENV) {
    console.warn('VITE_WOMPI_ENV no está configurada, usando "sandbox" por defecto');
  }
};

validateEnvVars();

// Determinar URLs según el entorno
const isProduction = import.meta.env.VITE_WOMPI_ENV === 'production';

export const WOMPI_CONFIG = {
  // Llave pública de Wompi (desde variables de entorno)
  // IMPORTANTE: Esta es una llave de prueba pública de Wompi
  // Para producción, obtén tu propia llave en https://comercios.wompi.co/
  publicKey: import.meta.env.VITE_WOMPI_PUBLIC_KEY || 'pub_test_qUs8suIYU35DfOclOCOT2GaSRK5dL3SB',

  // Llave privada (solo para backend, NO usar en frontend)
  // Esta variable existe solo para documentación, nunca debe usarse en el frontend
  secretKey: import.meta.env.VITE_WOMPI_SECRET_KEY || '',

  // URL base de la API (cambia según el entorno)
  apiUrl: isProduction ? 'https://production.wompi.co/v1' : 'https://sandbox.wompi.co/v1',

  // Moneda (COP para Colombia)
  currency: 'COP',

  // URL del script de Wompi
  scriptUrl: 'https://checkout.wompi.co/widget.js',

  // Entorno actual
  environment: import.meta.env.VITE_WOMPI_ENV || 'sandbox',
};

// Función para cargar el script de Wompi
export const loadWompiScript = () => {
  return new Promise((resolve, reject) => {
    // Verificar si ya está cargado
    if (window.WidgetCheckout) {
      resolve(window.WidgetCheckout);
      return;
    }

    const script = document.createElement('script');
    script.src = WOMPI_CONFIG.scriptUrl;
    script.async = true;

    script.onload = () => {
      if (window.WidgetCheckout) {
        resolve(window.WidgetCheckout);
      } else {
        reject(new Error('Wompi Widget no se cargó correctamente'));
      }
    };

    script.onerror = () => {
      reject(new Error('Error al cargar el script de Wompi'));
    };

    document.body.appendChild(script);
  });
};

// Función para obtener el precio según el plan
export const getPlanPrice = (planName) => {
  const prices = {
    'Básico': 99000,
    'Profesional': 199000,
    'Empresarial': 349000,
  };
  return prices[planName] || 199000;
};

// Función para formatear precio
export const formatPrice = (amount) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};
