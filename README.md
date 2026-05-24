# ParkTony Frontend

Frontend de ParkTony desarrollado con React + Vite.

## 🚀 Inicio Rápido

### 1. Instalar Dependencias

```bash
npm install
```

### 2. Configurar Variables de Entorno

```bash
# Copia el archivo de ejemplo
cp .env.example .env

# Edita .env y configura tus llaves de Wompi
```

### 3. Ejecutar en Desarrollo

```bash
npm run dev
```

El servidor estará disponible en: `http://localhost:5173`

## 🔐 Variables de Entorno

### Archivo `.env`

**IMPORTANTE:** Nunca subas el archivo `.env` a git. Está incluido en `.gitignore`.

#### Variables Requeridas:

```bash
# Wompi Payment Gateway
VITE_WOMPI_PUBLIC_KEY=pub_test_xxx  # Llave pública de Wompi
VITE_WOMPI_SECRET_KEY=prv_test_xxx  # Solo para backend
VITE_WOMPI_ENV=sandbox              # sandbox o production

# Application
VITE_APP_ENV=development            # development o production
VITE_APP_NAME=ParkTony
VITE_APP_URL=http://localhost:5173

# API (para integración futura con backend)
VITE_API_URL=http://localhost:3000/api
```

#### Obtener Llaves de Wompi:

1. **Desarrollo/Testing:**
   - Usa las llaves de prueba incluidas en `.env.example`
   - Llave pública de prueba: `pub_test_G4gqMN5LnYAXJK8xQl56nCL9vHsSOGBD`

2. **Producción:**
   - Crea una cuenta en [Wompi Comercios](https://comercios.wompi.co/)
   - Obtén tus llaves de producción desde el dashboard
   - Actualiza `VITE_WOMPI_PUBLIC_KEY` y `VITE_WOMPI_ENV=production`

## 📦 Scripts Disponibles

```bash
npm run dev        # Ejecutar en desarrollo
npm run build      # Compilar para producción
npm run preview    # Vista previa del build de producción
npm run lint       # Ejecutar linter
```

## 🔒 Seguridad

### Variables de Entorno

- ✅ Usa `VITE_` como prefijo para exponer variables al frontend
- ❌ NUNCA expongas llaves privadas/secretas en el frontend
- ❌ NUNCA subas el archivo `.env` a git
- ✅ Usa `.env.example` como plantilla sin valores sensibles

### Wompi

- ✅ Solo usa la `Public Key` en el frontend
- ❌ NUNCA uses la `Secret Key` en el frontend
- ✅ La `Secret Key` solo debe usarse en el backend

## 📚 Documentación Adicional

- [Integración con Wompi](../docs/WOMPI_INTEGRATION.md)
- [Guía de Desarrollo](../docs/FRONTEND_GUIDE.md)

## 🆘 Troubleshooting

### El checkout de Wompi no se abre

1. Verifica que `VITE_WOMPI_PUBLIC_KEY` esté configurada en `.env`
2. Revisa la consola del navegador para errores
3. Asegúrate de que la llave sea válida

### Variables de entorno no se actualizan

1. Detén el servidor de desarrollo (Ctrl+C)
2. Reinicia el servidor: `npm run dev`
3. Vite solo carga las variables al iniciar el servidor
