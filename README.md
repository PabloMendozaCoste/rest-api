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
- `POST api/usuarios/Registrar`: Registra un nuevo usuario en la base de datos.
- `POST api/auth/login`: Inicia sesión y devuelve un token de autenticación JWT.

### Productos
- `GET /api/productos`: Obtiene todos los productos.
- `GET /api/productos:id`: Obtienes un producto.
- `POST /api/productos`: Crea un nuevo producto.
- `DELETE /api/productos`: Elimina un producto por su ID.
- `PUT /api/productos`: Actualiza un producto existente por su ID.
