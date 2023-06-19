# Store API

## Descripción
Este es un proyecto de una API para una tienda en línea. Proporciona endpoints para gestionar productos y usuarios, incluyendo registro, inicio de sesión y operaciones CRUD en productos.

## Tecnologías utilizadas
- Node.js
- Express.js
- MySQL
- JSON Web Tokens (JWT)
- Bcrypt

## Instalación
1. Clona este repositorio en tu máquina local.
2. Ejecuta `npm install` para instalar las dependencias.
3. Configura la conexión a la base de datos MySQL en el archivo `config.js`.
4. Ejecuta `npm start` para iniciar el servidor.

## Endpoints

### Usuarios
- `POST /register`: Registra un nuevo usuario en la base de datos.
- `POST /login`: Inicia sesión y devuelve un token de autenticación JWT.

### Productos
- `GET /products`: Obtiene todos los productos.
- `POST /products`: Crea un nuevo producto.
- `DELETE /products/:id`: Elimina un producto por su ID.
- `PUT /products/:id`: Actualiza un producto existente por su ID.
