# Aula De Emprendimiento - TFG Denys Revutskyi

## React + Vite + Tailwind CSS

Este proyecto destaca el uso de tecnologías modernas como React, Vite y Tailwind CSS, ofreciendo una estructura mínima para comenzar a trabajar con React en Vite, aprovechando el Reemplazo de Módulo en Caliente (HMR) y algunas reglas ESLint.

### Características Principales:
- **React con Vite y HMR:** Este proyecto utiliza dos plugins oficiales:
  - [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md): Emplea [Babel](https://babeljs.io/) para Fast Refresh.
  - [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc): Utiliza [SWC](https://swc.rs/) para lograr un rápido refresco.

### Configuración Inicial del Proyecto:

1. **Crear un Proyecto Vite con React:**
    ```bash
    npm create vite@latest my-project -- --template react
    ```
2. **Instalar Tailwind CSS y Dependencias:**
    ```bash
    npm install -D tailwindcss postcss autoprefixer
    ```
3. **Inicializar Configuración de Tailwind CSS:**
    ```bash
    npx tailwindcss init -p
    ```
4. **Despliegue:**
    El proyecto se desplegará en un servidor Nginx.
