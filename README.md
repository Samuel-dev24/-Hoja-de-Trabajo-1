ENDER SAMUEL CABRERA CARINO
9490-20-959

API para gestionar usuarios con autenticación mediante JSON Web Tokens (JWT).
Node.js
npm
Pasos****
Clona el repositorio:
bash
Copiar código
git clone URL_DEL_REPOSITORIO
Navega al directorio del proyecto:
bash
Copiar código
cd nombre_del_proyecto
Instala dependencias:
bash
Copiar código
npm install
Crea un archivo .env:
makefile
Copiar código
JWT_SECRET=tu_clave_secreta
Ejecuta la API:
bash
Copiar código
npm start
La API estará disponible en http://localhost:3000.


Descripción de los endpoints
1. Login
Método: POST
Endpoint: /login
Ejemplo de solicitud:
json
Copiar código
{
    "email": "user@example.com",
    "password": "password"
}
Respuesta:
json
Copiar código
{
    "token": "tu_token_jwt"
}
2. Listar usuarios
Método: GET
Endpoint: /users
Ejemplo de solicitud:
http
Copiar código
GET /users
Authorization: Bearer tu_token_jwt
Respuesta:
json
Copiar código
[
    {
        "id": 1,
        "email": "user1@example.com"
    }
]
3. Actualizar usuario
Método: PUT
Endpoint: /users/:id
Ejemplo de solicitud:
json
Copiar código
{
    "email": "nuevo_email@example.com"
}
Respuesta:
json
Copiar código
{
    "message": "Usuario actualizado"
}
4. Eliminar usuario
Método: DELETE
Endpoint: /users/:id
Ejemplo de solicitud:
http
Copiar código
DELETE /users/1
Respuesta:
json
Copiar código
{
    "message": "Usuario eliminado"


   https://hoja-de-trabajo-7.onrender.com 
