# Backend APV - Administración de pacientes de veterinaria 🐶
Este repositorio contiene el backend de una aplicación de administración de pacientes de veterinaria. El backend está construido en Nodejs con Express y utiliza las siguientes dependencias: bcrypt, cors, dotenv, express, jsonwebtoken, mongoose, nodemailer.

## Instalacion 
1. Clona el repositorio en tu entorno local.
2. Para instalar las dependencias de este proyecto, ejecute el siguiente comando en su terminal: 
```bash 
npm install
```
3. Antes de ejecutar el servidor, es necesario configurar algunas variables de entorno en un archivo .env. 
4. Para iniciar el servidor, ejecute el siguiente comando en su terminal:
```bash 
npm run dev
```
5. Una vez iniciado el servidor, se puede acceder a la API a través de la URL ```http://localhost:4000/```. El puerto 4000 esta definido por defecto en local, si desea cambiarlo dirijase al index.js y cambie el puerto.

## Variable de Entorno
1. La variable MONGO_URI es la URL de conexión a la base de datos de MongoDB. Esta variable debe ser configurada con la URL de su instancia de MongoDB.
2. La variable JWT_SECRET es la clave secreta utilizada para firmar y verificar los tokens de autenticación JWT. Esta variable debe ser configurada con una cadena de caracteres aleatoria y segura.
3. La variable EMAIL_USER es la dirección de correo electrónico utilizada para enviar correos electrónicos de la aplicación.
4. La variable EMAIL_PASS es la contraseña utilizada para autenticarse en el servidor SMTP que se utiliza para enviar correos electrónicos.
5. La variable EMAIL_HOST es el servidor SMTP utilizado para enviar correos electrónicos.
6. La variable EMAIL_PORT es el puerto utilizado por el servidor SMTP para enviar correos electrónicos.


```makefile
MONGO_URI=mongodb://usuario:contraseña@servidor:puerto/nombre_db
JWT_SECRET=clave-secreta-aleatoria

EMAIL_USER=mi_correo_electronico@gmail.com
EMAIL_PASS=mi_contraseña_de_correo_electronico
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587

FRONTEND_URL=http://localhost:{port}
```

## Estructura del código
El código del backend está organizado de la siguiente manera:

* models/ - Almacena los modelos de la base de datos de MongoDB. Se tienen dos modelos, Paciente y Veterinario.
* helpers/ - Funciones reutilizables en el código.
* routes/ - Endpoints del backend.
* middleware/ - Autenticación JWT.
* controllers/ - La lógica del proyecto para los modelos Paciente y Veterinario.

## Endponits  
### Endpoints de la API para Veterinarios:

#### Área pública
* POST /veterinarios: Registra un nuevo veterinario.
* GET /veterinarios/confirmar/:token: Confirma la cuenta de un veterinario mediante un token enviado a su correo electrónico.
* POST /veterinarios/login: Inicia sesión de un veterinario.
* POST /veterinarios/reset-password: Envía un correo electrónico con instrucciones para restablecer la contraseña de un veterinario.
* GET /veterinarios/reset-password/:token: Verifica el token enviado para restablecer la contraseña de un veterinario y muestra el formulario para ingresar una nueva contraseña.
* POST /veterinarios/reset-password/:token: Procesa el formulario para ingresar una nueva contraseña de un veterinario.

#### Área privada
* GET /veterinarios/perfil: Obtiene la información del perfil de un veterinario.
* PUT /veterinarios/perfil/:id: Actualiza la información del perfil de un veterinario.
* PUT /veterinarios/actualizar-password: Actualiza la contraseña de un veterinario.

### Endpoints de la API para Pacientes:

* POST /pacientes: Agrega un nuevo paciente.
* GET /pacientes: Obtiene una lista de todos los pacientes.
* GET /pacientes/:id: Obtiene la información de un paciente en particular.
* PUT /pacientes/:id: Actualiza la información de un paciente en particular.
* DELETE /pacientes/:id: Elimina un paciente en particular.

Todos los endpoints de la API requieren que el usuario esté autenticado, lo que se logra enviando el token de autenticación JWT en el encabezado de la solicitud. El middleware checkAuth se encarga de verificar la validez del token antes de permitir el acceso al endpoint correspondiente.

## Contribución
Si desea contribuir a este proyecto, puede realizar un fork y enviar sus cambios en un pull request. Asegúrese de seguir las directrices de contribución.

## Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulte el archivo LICENSE para obtener más información.
