
# Riserve_front

## Descripción
Riserve_front es el frontend de una aplicación robusta y escalable diseñada para gestionar un ecosistema completo de usuarios, negocios, productos y reservaciones. Esta aplicación se comunica con el backend Rest Master, construido con Node.js, Express y MySQL, ofreciendo una interfaz de usuario para interactuar con una API RESTful segura y eficiente.

## Características Principales
- Autenticación de usuarios con JWT
- Interfaz para operaciones CRUD de usuarios, negocios, productos y reservaciones
- Visualización de datos de negocios, menús y reservaciones
- Gestión de sesiones de usuario

## Tecnologías Utilizadas
- Vue.js 3
- Vite
- Axios
- CSS para el diseño de la interfaz

## Estructura del Proyecto

```
Riserve_front/
│
├── .eslintrc.cjs
├── .gitignore
├── .prettierrc.json
├── README.md
├── index.html
├── jsconfig.json
├── package-lock.json
├── package.json
├── vite.config.js
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── Subway.jpg
│   │   ├── base.css
│   │   ├── campero.jpg
│   │   ├── kuang.jpg
│   │   ├── logo.svg
│   │   ├── main.css
│   │   └── path_to_image1.jpg
│   ├── components/
│   │   ├── LoginForm.vue
│   │   ├── RegisterForm.vue
│   │   ├── navbar.vue
│   │   └── service_images.vue
│   ├── images/
│   │   └── American.jpeg
│   ├── router/
│   │   └── index.js
│   ├── views/
│   │   ├── AdminView.vue
│   │   ├── BusinessDetail.vue
│   │   ├── BusinessesView.vue
│   │   ├── HomePage.vue
│   │   ├── MenusView.vue
│   │   ├── ReservationDetail.vue
│   │   └── ReservationForm.vue
│   ├── App.vue
│   ├── auth.js
│   └── main.js
```

### Componentes Principales

#### `LoginForm.vue`
Formulario de inicio de sesión de usuario. Permite a los usuarios autenticarse en la aplicación.

#### `RegisterForm.vue`
Formulario de registro de usuario. Permite a los nuevos usuarios crear una cuenta en la aplicación.

#### `navbar.vue`
Barra de navegación principal que incluye enlaces de navegación y opciones de autenticación.

#### `service_images.vue`
Componente para mostrar imágenes de servicios o negocios.

### Vistas

#### `AdminView.vue`
Vista de administración para gestionar negocios, productos y usuarios.

#### `BusinessDetail.vue`
Vista detallada de un negocio, mostrando información y productos asociados.

#### `BusinessesView.vue`
Vista que lista todos los negocios disponibles.

#### `HomePage.vue`
Página principal que muestra un carrusel de negocios y permite la navegación a otras vistas.

#### `MenusView.vue`
Vista que muestra los menús de un negocio específico.

#### `ReservationDetail.vue`
Vista detallada de una reservación.

#### `ReservationForm.vue`
Formulario para crear una nueva reservación.

### Configuración de Axios
En `src`, crea un archivo `api.js` para configurar Axios:

```javascript
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
```

### Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/AMasiasLeen/Riserve_front.git
```

2. Instala las dependencias:

```bash
cd Riserve_front
npm install
```

3. Configura las variables de entorno del backend en el archivo `api.js` si es necesario.

4. Inicia el servidor de desarrollo:

```bash
npm run dev
```

### Uso

#### Autenticación
La mayoría de las vistas requieren un token JWT. Asegúrate de que los usuarios inicien sesión para obtener y almacenar el token.

#### Navegación
- **Página principal**: Muestra un carrusel de negocios.
- **Vista de Negocios**: Lista de todos los negocios.
- **Detalle de Negocio**: Información detallada de un negocio específico.
- **Vista de Menús**: Muestra los menús de un negocio.
- **Formulario de Reservación**: Permite crear una nueva reservación.

### Seguridad
- Almacenamiento seguro de contraseñas con hashing en el backend
- Autenticación basada en tokens JWT

---

Esta documentación ofrece una guía completa sobre cómo configurar, instalar y usar el proyecto frontend Riserve_front, asegurando una integración fluida con el backend Rest Master.
