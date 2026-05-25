# ParkTony Frontend

<p align="center">
  <img src="https://img.shields.io/badge/React-18-blue?logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Vite-5-646CFF?logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/TailwindCSS-3-06B6D4?logo=tailwindcss" alt="Tailwind" />
  <img src="https://img.shields.io/badge/License-MIT-green" alt="License" />
</p>

<p align="center">
  <strong>Plataforma de gestión inteligente de parqueaderos</strong>
</p>

<p align="center">
  Frontend moderno y responsivo para ParkTony, diseñado para ofrecer una experiencia de usuario excepcional en la administración de parqueaderos en Colombia.
</p>

---

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Stack Tecnológico](#-stack-tecnológico)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Configuración](#-configuración)
- [Desarrollo](#-desarrollo)
- [Producción](#-producción)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Variables de Entorno](#-variables-de-entorno)
- [Integración de Pagos](#-integración-de-pagos)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)

---

## ✨ Características

- 🎨 **Diseño Responsivo** — Interfaz adaptable a todos los dispositivos
- 🖼️ **Carrusel Interactivo** — Galería de imágenes con transiciones suaves y modal de pantalla completa
- 💳 **Pagos Integrados** — Integración con Wompi para transacciones seguras
- 📊 **Dashboard Analítico** — Visualización de métricas y reportes en tiempo real
- 🔐 **Autenticación Segura** — Sistema de login y registro con validación
- 🚀 **Rendimiento Optimizado** — Carga rápida con code-splitting y lazy loading
- ♿ **Accesibilidad** — Cumple con estándares WCAG para inclusión digital

---

## 🛠️ Stack Tecnológico

| Categoría | Tecnología |
|-----------|------------|
| **Framework** | React 18 |
| **Build Tool** | Vite 5 |
| **Estilos** | TailwindCSS 3 |
| **Iconos** | Lucide React |
| **Rutas** | React Router v6 |
| **Estado** | React Context / Hooks |
| **Pagos** | Wompi SDK |
| **Animaciones** | CSS Transitions + Custom Hooks |

---

## 📋 Requisitos Previos

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 o **yarn** >= 1.22.0
- **Git** para control de versiones

---

## 📦 Instalación

### 1. Clonar el Repositorio

```bash
git clone https://github.com/juanpablo008/parktony-app-front.git
cd parktony-app-front
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Configurar Variables de Entorno

```bash
cp .env.example .env
```

Edita el archivo `.env` con tus configuraciones específicas.

---

## ⚙️ Configuración

### Variables de Entorno Requeridas

```bash
# Wompi Payment Gateway
VITE_WOMPI_PUBLIC_KEY=pub_test_xxx
VITE_WOMPI_ENV=sandbox

# Application
VITE_APP_ENV=development
VITE_APP_NAME=ParkTony
VITE_APP_URL=http://localhost:5173

# API Backend
VITE_API_URL=http://localhost:3000/api
```

> ⚠️ **Importante:** Nunca subas el archivo `.env` al repositorio. Está incluido en `.gitignore`.

---

## 💻 Desarrollo

### Iniciar Servidor de Desarrollo

```bash
npm run dev
```

El servidor estará disponible en: **http://localhost:5173**

### Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo con hot-reload |
| `npm run build` | Compila el proyecto para producción |
| `npm run preview` | Vista previa del build de producción localmente |
| `npm run lint` | Ejecuta el linter para verificar código |
| `npm run lint:fix` | Corrige automáticamente errores de linting |

---

## 🚀 Producción

### Construir para Producción

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`.

### Vista Previa del Build

```bash
npm run preview
```

### Despliegue

El proyecto puede desplegarse en cualquier servicio de hosting estático:

- **Vercel** — `vercel deploy`
- **Netlify** — `netlify deploy`
- **AWS S3 + CloudFront**
- **GitHub Pages**

---

## 📁 Estructura del Proyecto

```
src/
├── assets/              # Imágenes, iconos y recursos estáticos
│   └── images/          # Imágenes del carrusel y contenido visual
├── components/          # Componentes reutilizables
│   └── ui/              # Componentes de interfaz (ImageCarousel, ImageModal)
├── hooks/               # Custom hooks (useScrollAnimation, etc.)
├── layouts/             # Layouts de la aplicación (LandingLayout)
├── pages/               # Páginas de la aplicación
│   └── landing/         # Páginas de la landing page
│       ├── components/  # Componentes específicos de landing
│       └── HomePage.jsx # Página principal
└── utils/               # Utilidades y helpers
```

---

## 🔐 Variables de Entorno

### Seguridad

| Práctica | Estado |
|----------|--------|
| Prefijo `VITE_` para variables expuestas | ✅ |
| Llaves privadas solo en backend | ✅ |
| `.env` excluido de git | ✅ |
| `.env.example` como plantilla | ✅ |

### Wompi - Obtención de Llaves

1. **Desarrollo/Testing:**
   - Usa las llaves de prueba incluidas en `.env.example`
   - Llave pública de prueba: `pub_test_G4gqMN5LnYAXJK8xQl56nCL9vHsSOGBD`

2. **Producción:**
   - Crea una cuenta en [Wompi Comercios](https://comercios.wompi.co/)
   - Obtén tus llaves desde el dashboard
   - Actualiza `VITE_WOMPI_PUBLIC_KEY` y cambia `VITE_WOMPI_ENV=production`

---

## 💳 Integración de Pagos

ParkTony utiliza **Wompi** como pasarela de pagos para transacciones seguras.

### Características de Integración

- ✅ Checkout modal integrado
- ✅ Validación de transacciones en tiempo real
- ✅ Soporte para tarjetas de crédito/débito
- ✅ PSE y otros métodos de pago colombianos
- ✅ Webhooks para confirmación de pagos

### Documentación Adicional

- [Guía de Integración Wompi](../docs/WOMPI_INTEGRATION.md)
- [Documentación Oficial de Wompi](https://docs.wompi.co/)

---

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para contribuir:

1. Haz fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Haz commit de tus cambios (`git commit -m 'feat: add AmazingFeature'`)
4. Haz push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Convenciones de Commits

| Tipo | Descripción |
|------|-------------|
| `feat` | Nueva funcionalidad |
| `fix` | Corrección de bugs |
| `docs` | Cambios en documentación |
| `style` | Cambios de formato/estilo |
| `refactor` | Refactorización de código |
| `test` | Agregar o modificar tests |
| `chore` | Tareas de mantenimiento |

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

## 📞 Soporte

- **Email:** hola@parktony.com
- **Teléfono:** +57 300 123 4567
- **Horario:** Lun - Vie: 8am - 6pm

---

<p align="center">
  Hecho con ❤️ por el equipo de ParkTony
</p>
