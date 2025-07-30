# Tests con Vitest y React Testing Library

Este proyecto incluye 4 tests básicos y fáciles de implementar usando **Vitest** y **React Testing Library**.

## Tests Implementados

### 1. **Text Component** (`Text.test.tsx`)
- **Renderización de texto**: Verifica que el componente muestre el texto correctamente
- **Aplicación de estilos**: Confirma que los estilos (tamaño, peso, color, alineación) se apliquen correctamente

### 2. **CustomButton Component** (`CustomButton.test.tsx`)
- **Renderización del botón**: Verifica que el botón se muestre con el texto correcto
- **Funcionalidad onClick**: Confirma que la función onClick se ejecute al hacer clic
- **Estado deshabilitado**: Verifica que el botón se deshabilite cuando la prop `disabled` es `true`

### 3. **SplashScreen Component** (`SplashScreen.test.tsx`)
- **Renderización de la pantalla**: Verifica que la pantalla de carga se muestre correctamente
- **Atributos de imagen**: Confirma que la imagen tenga los atributos `src` y `alt` correctos

### 4. **HomeIcon Component** (`HomeIcon.test.tsx`)
-  **Renderización del SVG**: Verifica que el icono SVG se renderice correctamente
-  **Aplicación de color**: Confirma que el color se aplique según la prop pasada
-  **Dimensiones correctas**: Verifica que el SVG tenga las dimensiones y viewBox correctos

##  Comandos para ejecutar los tests

```bash
# Ejecutar todos los tests una vez
npm test -- --run

# Ejecutar tests en modo watch (se ejecutan automáticamente al hacer cambios)
npm test

# Ejecutar tests con interfaz gráfica (requiere instalación adicional)
npm run test:ui
```

##  Conceptos importantes utilizados

### **React Testing Library**
- `render()`: Renderiza componentes para testing
- `screen.getByText()`: Busca elementos por su texto
- `screen.getByRole()`: Busca elementos por su rol (button, textbox, etc.)
- `screen.getByAltText()`: Busca imágenes por su texto alternativo
- `expect().toBeInTheDocument()`: Verifica que un elemento esté en el DOM
- `expect().toHaveAttribute()`: Verifica que un elemento tenga ciertos atributos
- `expect().toHaveStyle()`: Verifica que un elemento tenga ciertos estilos CSS

### **Vitest**
- `describe()`: Agrupa tests relacionados
- `it()`: Define un test individual
- `expect()`: Realiza aserciones
- `vi.fn()`: Crea funciones mock para testing

### **User Events**
- `userEvent.setup()`: Configura eventos de usuario
- `user.click()`: Simula clics del usuario

## Configuración

Los tests están configurados con:
- **Vitest** como test runner
- **jsdom** como entorno de testing (simula el navegador)
- **@testing-library/jest-dom** para matchers adicionales
- Configuración en `vite.config.ts` y `src/test/setup.ts`

