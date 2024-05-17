# 🚀 Aula De Emprendimiento - TFG Denys Revutskyi
## Angular | TailWindCSS | Express.js

This project utilizes modern technologies such as Angular, Node.js, Express, and Tailwind CSS, providing a frontend and backend structure optimized for maintenance. It leverages PrimeNg, Angular Material libraries, and Tailwind CSS for styling. MySQL is used as the database.

> [!TIP]
>### Initial Project Setup:
1. **Clone the project:**
    ```bash
    git clone https://github.com/revudev/tfg-aula.git
    ```

2. **Navigate to the front and back directories and install the dependencies:**
    ```bash
    cd front
    npm install
    cd ../back
    npm install
    ```

3. **Run the frontend:**
    ```bash
    ng serve
    ```

4. **Run the backend:**
    ```bash
    npm run den # This will build and run the backend server
    ```

5. **Deployment:**
    The project will be deployed on an ![Nginx](https://img.shields.io/badge/Nginx-Server-green) server with HTTPS and DDNS, as well as on Vercel.

> [!TIP]
>### Additional Tips:
1. **Development Tools:**
   - Use **VS Code** for an enhanced development experience. Extensions like Angular Language Service, ESLint, and Prettier can help maintain code quality.
   - Utilize **Postman** to test your API endpoints.

2. **Environment Variables:**
   - Store sensitive data like database credentials and API keys in environment variables. Use the `dotenv` package for Node.js to manage these variables.
