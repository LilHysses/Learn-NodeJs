| Término                   | Definición                                                                                 |
| ------------------------- | ------------------------------------------------------------------------------------------ |
| **Node.js**               | Entorno de ejecución para JavaScript fuera del navegador, basado en el motor V8 de Chrome. |
| **NPM**                   | Gestor de paquetes de Node.js (instala librerías).                                         |
| **CommonJS / `require`**  | Sistema de módulos tradicional en Node.js (usa `require` y `module.exports`).              |
| **`package.json`**        | Archivo que describe el proyecto (dependencias, scripts, etc.).                            |
| **Script NPM**            | Comando personalizado en el `package.json`, ejecutado con `npm run`.                       |


| Término           | Definición                                                                                  |
| ----------------- | ------------------------------------------------------------------------------------------- |
| **Express**       | Framework minimalista para crear servidores y APIs en Node.js.                              |
| **Middleware**    | Funciones que se ejecutan antes de llegar al controlador final (autenticación, logs, etc.). |
| **Ruta (Route)**  | Endpoint de la API, como `GET /productos`.                                                  |
| **Router**        | Módulo de Express que permite dividir las rutas en archivos.                                |
| **Controlador**   | Función que maneja la lógica de una ruta.                                                   |
| **Body Parser**   | Middleware para leer datos enviados por el cliente (JSON, formulario, etc.).                |
| **`req` y `res`** | Objetos que representan la petición y la respuesta en Express.                              |
| **`next()`**      | Función que pasa al siguiente middleware.                                                   |
