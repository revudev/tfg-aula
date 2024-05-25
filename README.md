# 🚀 Aula De Emprendimiento - TFG Denys Revutskyi

### Introducción y Objetivos

📚 **"Aula Emprende"** es una plataforma educativa para el IES Enrique Tierno Galván que busca ampliar el conocimiento sobre emprendimiento entre los estudiantes, ayudándolos a ser autónomos. Ofrece recursos, guías y herramientas interactivas para desarrollar habilidades emprendedoras, permitiendo a los alumnos crear y gestionar sus propios planes de negocio usando tecnologías modernas como Angular 17.

### Funcionalidades Principales

1. 📖 **Información** sobre cómo ser autónomo y emprender.
2. 📊 **Secciones temáticas** sobre creación de planes de negocio, eventos, y análisis DAFO.
3. 🛠️ **Herramientas interactivas** para elaborar y guardar planes de negocio.
4. 🧑‍🏫 **Comentarios y orientación** de profesores.

### Tecnologías Utilizadas

- 🅰️ **Angular 17**: Desarrollo del frontend.
- 🎨 **Tailwind CSS**: Diseño y estilización.
- 🟢 **Node.js y Express**: Backend y lógica del servidor.
- 🌐 **Nginx**: Servidor web.
- 🦆 **DuckDNS**: Gestión del nombre de dominio.
- ☁️ **AWS**: Despliegue en la nube.
- 🧩 **PrimeNg y Material Angular**: Componentes UI.

### Motivación

💡 **El proyecto** nace del interés en el emprendimiento y la oportunidad de enseñar Angular. Busca fomentar el espíritu emprendedor desde edades tempranas y mejorar habilidades en desarrollo web moderno.

### Futuro

🔧 **Se planea** mejorar la experiencia del usuario y el diseño de la plataforma para incrementar su usabilidad y atractivo visual.


> [!TIP]
> ### Configuración Inicial del Proyecto

💻 **Clona el proyecto:**
```bash
git clone https://github.com/revudev/tfg-aula.git
```

📂 **Navega a los directorios frontend y backend e instala las dependencias:**
```bash
cd frontend && npm install && cd ../back && npm install
```

▶️ **Ejecuta el frontend:**
```bash
ng serve
```

▶️ **Ejecuta el backend:**
```bash
npm run den # Esto construirá y ejecutará el servidor backend
```

🚀 **Despliegue:**
El proyecto se desplegará en un servidor ![Nginx](https://img.shields.io/badge/Nginx-Server-green) con HTTPS y DDNS, así como en Vercel.

> [!TIP]
> ### Consejos Adicionales

🛠️ **Herramientas de desarrollo:**
- Utiliza **VS Code** para una experiencia de desarrollo mejorada. Extensiones como Angular Language Service, ESLint y Prettier pueden ayudar a mantener la calidad del código.
- Usa **Postman** para probar tus endpoints de API.

🔐 **Variables de entorno:**
- Almacena datos sensibles como credenciales de bases de datos y claves API en variables de entorno. Usa el paquete `dotenv` para Node.js para gestionar estas variables.
