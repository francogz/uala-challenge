# Uala Challenge - Dashboard de Transacciones

Una aplicación web moderna para la visualización de transacciones financieras, desarrollada con React y TypeScript. La aplicación permite a los usuarios consultar su historial de transacciones, aplicar filtros avanzados y obtener insights sobre sus movimientos financieros.

## Instalación y Ejecución

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm (incluido con Node.js)
- Git

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd uala-challenge
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar el proyecto en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   
   La aplicación estará disponible en `http://localhost:5173`

### Comandos adicionales

- `npm run build` - Construir la aplicación para producción
- `npm run preview` - Previsualizar la build de producción
- `npm run lint` - Ejecutar análisis de código con ESLint
- `npm test` - Ejecutar tests unitarios
- `npm run test:ui` - Ejecutar tests con interfaz visual

## Arquitectura del Proyecto

El proyecto implementa una arquitectura basada en **Clean Architecture**, priorizando la separación de responsabilidades y la mantenibilidad del código. La estructura está organizada en las siguientes capas:

### Estructura de Directorios

```
src/
├── adapters/           # Adaptadores para transformación de datos
├── components/         # Componentes reutilizables y específicos
│   ├── common/        # Componentes genéricos
│   └── layout/        # Componentes de layout
├── context/           # Contextos de React para manejo de estado global
├── models/            # Tipos e interfaces de TypeScript
├── pages/             # Páginas principales de la aplicación
├── redux/             # Configuración de Redux Toolkit y APIs
├── routes/            # Configuración de enrutamiento
├── views/             # Vistas específicas con lógica de negocio
└── test/              # Tests unitarios
```

### Principios Arquitectónicos

**Separación de Responsabilidades**: Cada capa tiene una responsabilidad específica, facilitando el mantenimiento y testing del código.

**Inversión de Dependencias**: Los componentes de UI no dependen directamente de las implementaciones de datos, sino de abstracciones.

**Modularización**: El código está dividido en módulos cohesivos que pueden ser desarrollados y testeados de forma independiente.

## Decisiones Técnicas

### Tecnologías Principales

- **React 19**: Framework principal para la construcción de la interfaz de usuario
- **TypeScript**: Superset de JavaScript que añade tipado estático para mayor robustez
- **Vite**: Herramienta de build rápida y moderna para desarrollo
- **Emotion**: Biblioteca CSS-in-JS para estilos dinámicos y componentes estilizados

### Gestión de Estado

- **RTK Query**: Para la gestión eficiente de llamadas a APIs y cache de datos
- **React Context**: Para evitar prop drilling en componentes anidados y manejo de estados más globales

### Arquitectura de Datos

- **Modelos**: Definición de tipos TypeScript para garantizar consistencia de datos
- **Adaptadores**: Transformación de datos entre la API y la aplicación
- **Tipado Fuerte**: Implementación exhaustiva de tipos para prevenir errores en tiempo de ejecución

### Componentes y Reutilización

- **Componentes Modulares**: Diseño de componentes pequeños y reutilizables
- **Separación de Lógica**: Hooks personalizados para encapsular lógica de negocio
- **Sistema de Diseño**: Componentes base consistentes en toda la aplicación

### Testing

- **Vitest**: Framework de testing moderno y rápido
- **React Testing Library**: Para testing de componentes centrado en el usuario
- **Cobertura de Tests**: Tests unitarios para componentes críticos

## Posibles Mejoras Futuras

### Funcionalidades de Análisis

**Sistema de Métricas Avanzadas**: Implementación de un dashboard completo con métricas financieras detalladas, incluyendo análisis de tendencias, categorización automática de gastos.

**Exportación de Informes**: Desarrollo de una funcionalidad para generar y exportar informes personalizables en formatos PDF y Excel.

### Autenticación y Seguridad

**Sistema de Login Robusto**: Integración de un sistema de autenticación completo.

**Roles y Permisos**: Implementación de un sistema de roles para diferentes tipos de usuarios con permisos granulares.

### Expansión de Funcionalidades

**Catálogo de Productos**: Desarrollo de una sección dedicada para visualizar y gestionar el catálogo de productos y servicios disponibles, incluyendo funcionalidades de búsqueda y filtrado avanzado.

**Notificaciones en Tiempo Real**: Sistema de notificaciones para alertas de transacciones, cambios en el estado de cuenta y actualizaciones importantes.

---
