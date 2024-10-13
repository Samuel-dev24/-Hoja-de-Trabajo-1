La API fue migrada de JavaScript a TypeScript para mejorar la seguridad y evitar errores de tipo. Se convirtieron los archivos a .ts, se configuró tsconfig.json, se definieron interfaces para validar la estructura de los objetos, y se adaptó el sistema de autenticación JWT.

Instrucciones para ejecutar la API localmente
Instalar dependencias: npm install
Compilar el proyecto: npm run build
Iniciar el servidor: npm start o npm run dev para desarrollo
URL de la API desplegada
La API está desplegada en Render: [https://hoja-de-trabajo-1-1.onrender.com]

Endpoints principales
POST /users: Crea un usuario.
GET /users: Lista todos los usuarios.
PUT /users/
: Actualiza un usuario.
DELETE /users/
: Elimina un usuario.
