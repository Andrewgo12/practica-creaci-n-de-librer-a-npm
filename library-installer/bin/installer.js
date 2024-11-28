#!/usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';
import { execa } from 'execa';


// Lista de librerías con sus comandos de instalación
const libraries = [
    {
        numero: 1,
        name: 'Axios',
        command: 'npm install axios@latest',
        description: 'Cliente HTTP para realizar solicitudes de API a servidores RESTful o GraphQL.'
    },
    {
        numero: 2,
        name: 'Apollo Server',
        command: 'npm install @apollo/server@latest',
        description: 'Servidor para construir y ejecutar APIs GraphQL basadas en el estándar de Apollo.'
    },
    {
        numero: 3,
        name: 'Babel',
        command: 'npm install @babel/core@latest',
        description: 'Compilador de JavaScript que permite escribir código de última generación que puede ejecutarse en navegadores antiguos.'
    },
    {
        numero: 4,
        name: 'Bcrypt.js',
        command: 'npm install bcrypt@latest',
        description: 'Librería para encriptar contraseñas de forma segura en aplicaciones Node.js.'
    },
    {
        numero: 5,
        name: 'Body-Parser',
        command: 'npm install body-parser@latest',
        description: 'Middleware para procesar el cuerpo de las solicitudes HTTP (como JSON, URL encoded, etc.).'
    },
    {
        numero: 6,
        name: 'Bootstrap',
        command: 'npm install bootstrap@latest',
        description: 'Framework de diseño web responsivo y móvil primero que incluye herramientas como grids y componentes listos para usar.'
    },
    {
        numero: 7,
        name: 'Chart.js',
        command: 'npm install chart.js@latest',
        description: 'Librería para crear gráficos interactivos en HTML utilizando el formato de canvas.'
    },
    {
        numero: 8,
        name: 'Chai',
        command: 'npm install chai@latest',
        description: 'Librería de aserciones para pruebas unitarias y de integración, utilizada comúnmente con Mocha.'
    },
    {
        numero: 9,
        name: 'Cors',
        command: 'npm install cors@latest',
        description: 'Middleware que habilita el soporte CORS (Cross-Origin Resource Sharing) en aplicaciones Node.js.'
    },
    {
        numero: 10,
        name: 'Day.js',
        command: 'npm install dayjs@latest',
        description: 'Alternativa ligera a Moment.js para trabajar con fechas y horas.'
    },
    {
        numero: 11,
        name: 'D3.js',
        command: 'npm install d3@latest',
        description: 'Librería para manipular documentos basados en datos, con capacidad para crear visualizaciones dinámicas.'
    },
    {
        numero: 12,
        name: 'Dotenv',
        command: 'npm install dotenv@latest',
        description: 'Carga las variables de entorno desde un archivo `.env` en tu aplicación para mantenerlas seguras.'
    },
    {
        numero: 13,
        name: 'ESLint',
        command: 'npm install eslint@latest',
        description: 'Herramienta de análisis estático para identificar y corregir problemas de estilo y calidad en el código JavaScript.'
    },
    {
        numero: 14,
        name: 'Express',
        command: 'npm install express@latest',
        description: 'Framework minimalista para Node.js que facilita la creación de aplicaciones web y APIs.'
    },
    {
        numero: 15,
        name: 'Foundation',
        command: 'npm install foundation-sites@latest',
        description: 'Framework CSS que permite crear interfaces web modernas y adaptativas.'
    },
    {
        numero: 16,
        name: 'GraphQL',
        command: 'npm install graphql@latest',
        description: 'Lenguaje de consulta para APIs y un runtime para ejecutar esas consultas con tus datos.'
    },
    {
        numero: 17,
        name: 'Handlebars',
        command: 'npm install handlebars@latest',
        description: 'Motor de plantillas para generar HTML dinámico utilizando una sintaxis simple y extensible.'
    },
    {
        numero: 18,
        name: 'Helmet',
        command: 'npm install helmet@latest',
        description: 'Middleware para mejorar la seguridad de aplicaciones web mediante la configuración de encabezados HTTP.'
    },
    {
        numero: 19,
        name: 'Jest',
        command: 'npm install jest@latest',
        description: 'Framework de pruebas unitarias y de integración con enfoque en facilidad de uso y rendimiento.'
    },
    {
        numero: 20,
        name: 'JQuery',
        command: 'npm install jquery@latest',
        description: 'Librería rápida y concisa para manipular el DOM, eventos y hacer solicitudes AJAX.'
    },
    {
        numero: 21,
        name: 'JSONWebToken',
        command: 'npm install jsonwebtoken@latest',
        description: 'Librería para generar y verificar JWT (JSON Web Tokens) para autenticación.'
    },
    {
        numero: 22,
        name: 'Lodash',
        command: 'npm install lodash@latest',
        description: 'Librería de utilidades que facilita el trabajo con arreglos, objetos y funciones.'
    },
    {
        numero: 23,
        name: 'MongoDB',
        command: 'npm install mongodb@latest',
        description: 'Driver oficial de Node.js para interactuar con la base de datos MongoDB.'
    },
    {
        numero: 24,
        name: 'Moment.js',
        command: 'npm install moment@latest',
        description: 'Librería para manipular, validar, analizar y mostrar fechas y horas en JavaScript.'
    },
    {
        numero: 25,
        name: 'Mocha',
        command: 'npm install mocha@latest',
        description: 'Framework de pruebas flexible para Node.js y el navegador.'
    },
    {
        numero: 26,
        name: 'Mongoose',
        command: 'npm install mongoose@latest',
        description: 'Librería de modelado de datos para MongoDB en Node.js con soporte para validación y consultas.'
    },
    {
        numero: 27,
        name: 'MySQL',
        command: 'npm install mysql@latest',
        description: 'Conector oficial para interactuar con bases de datos MySQL desde Node.js.'
    },
    {
        numero: 28,
        name: 'Next.js',
        command: 'npm install next@latest',
        description: 'Framework para construir aplicaciones React con renderizado en el servidor y optimización automática.'
    },
    {
        numero: 29,
        name: 'Nodemailer',
        command: 'npm install nodemailer@latest',
        description: 'Librería para enviar correos electrónicos desde aplicaciones Node.js.'
    },
    {
        numero: 30,
        name: 'Nuxt.js',
        command: 'npm install nuxt@latest',
        description: 'Framework de Vue.js para construir aplicaciones de página única (SPA) con renderizado en el servidor.'
    },
    {
        numero: 31,
        name: 'Passport.js',
        command: 'npm install passport@latest',
        description: 'Middleware para gestionar la autenticación de usuarios en aplicaciones Node.js.'
    },
    {
        numero: 32,
        name: 'Prisma',
        command: 'npm install prisma@latest',
        description: 'ORM moderno y tipado para interactuar con bases de datos relacionales en aplicaciones Node.js.'
    },
    {
        numero: 33,
        name: 'Pug',
        command: 'npm install pug@latest',
        description: 'Motor de plantillas que facilita la generación de HTML con una sintaxis más limpia y concisa.'
    },
    {
        numero: 34,
        name: 'React',
        command: 'npm install react@latest',
        description: 'Librería para construir interfaces de usuario dinámicas y reactivas mediante un modelo basado en componentes.'
    },
    {
        numero: 35,
        name: 'React Router',
        command: 'npm install react-router-dom@latest',
        description: 'Librería para manejar la navegación y las rutas en aplicaciones React.'
    },
    {
        numero: 36,
        name: 'Redux',
        command: 'npm install redux@latest',
        description: 'Librería de gestión de estado predecible para aplicaciones JavaScript.'
    },
    {
        numero: 37,
        name: 'Sass',
        command: 'npm install sass@latest',
        description: 'Preprocesador CSS que permite usar variables, anidamiento y otras características avanzadas.'
    },
    {
        numero: 38,
        name: 'Sequelize',
        command: 'npm install sequelize@latest',
        description: 'ORM basado en promesas para bases de datos SQL en Node.js.'
    },
    {
        numero: 39,
        name: 'Socket.io',
        command: 'npm install socket.io@latest',
        description: 'Librería para facilitar la comunicación en tiempo real entre clientes y servidores a través de WebSockets.'
    },
    {
        numero: 40,
        name: 'Styled-Components',
        command: 'npm install styled-components@latest',
        description: 'Librería para usar estilos CSS en línea dentro de componentes de React con la ayuda de plantillas literales.'
    },
    {
        numero: 41,
        name: 'TypeScript',
        command: 'npm install typescript@latest',
        description: 'Superset de JavaScript que agrega tipado estático y otras características para mejorar la calidad del código.'
    },
    {
        numero: 42,
        name: 'Underscore',
        command: 'npm install underscore@latest',
        description: 'Librería con utilidades funcionales para trabajar con arreglos, objetos y funciones.'
    },
    {
        numero: 43,
        name: 'Vite',
        command: 'npm install vite@latest',
        description: 'Bundler de desarrollo rápido para aplicaciones web modernas, con soporte para JavaScript, TypeScript y más.'
    },
    {
        numero: 44,
        name: 'Vue.js',
        command: 'npm install vue@latest',
        description: 'Framework progresivo para construir interfaces de usuario interactivas.'
    },
    {
        numero: 45,
        name: 'Webpack',
        command: 'npm install webpack@latest',
        description: 'Empaquetador de módulos para aplicaciones JavaScript modernas que ayuda a optimizar y gestionar los recursos.'
    },
    {
        numero: 46,
        name: 'Zod',
        command: 'npm install zod@latest',
        description: 'Librería para la validación y transformación de datos de manera segura y sencilla.'
    },
    {
        numero: 47,
        name: 'Ajv',
        command: 'npm install ajv@latest',
        description: 'Librería para la validación de datos JSON basada en esquemas.'
    },
    {
        numero: 48,
        name: 'Async',
        command: 'npm install async@latest',
        description: 'Librería que proporciona una variedad de utilidades para trabajar con funciones asincrónicas.'
    },
    {
        numero: 49,
        name: 'Babel CLI',
        command: 'npm install @babel/cli@latest',
        description: 'Herramienta de línea de comandos para usar Babel en la transpilación de JavaScript.'
    },
    {
        numero: 50,
        name: 'Bulma',
        command: 'npm install bulma@latest',
        description: 'Framework CSS ligero y fácil de usar para crear sitios web responsivos y modernos.'
    },
    {
        numero: 51,
        name: 'Cypress',
        command: 'npm install cypress@latest',
        description: 'Herramienta de pruebas de extremo a extremo para aplicaciones web.'
    },
    {
        numero: 52,
        name: 'Docusaurus',
        command: 'npm install docusaurus@latest',
        description: 'Framework para construir documentación técnica y sitios web de contenido estático.'
    },
    {
        numero: 53,
        name: 'EJS',
        command: 'npm install ejs@latest',
        description: 'Motor de plantillas para Node.js que permite generar HTML dinámico utilizando JavaScript.'
    },
    {
        numero: 54,
        name: 'Express Validator',
        command: 'npm install express-validator@latest',
        description: 'Middleware de validación para las aplicaciones de Express.'
    },
    {
        numero: 55,
        name: 'Faker.js',
        command: 'npm install faker@latest',
        description: 'Generador de datos falsos para pruebas y desarrollo.'
    },
    {
        numero: 56,
        name: 'Glitch',
        command: 'npm install glitch@latest',
        description: 'Herramienta que permite crear aplicaciones web y APIs de manera rápida e interactiva.'
    },
    {
        numero: 57,
        name: 'Gulp',
        command: 'npm install gulp@latest',
        description: 'Toolkit de automatización de tareas que facilita la compilación de proyectos.'
    },
    {
        numero: 58,
        name: 'Jest Image Snapshot',
        command: 'npm install jest-image-snapshot@latest',
        description: 'Librería para hacer comparaciones de imágenes dentro de las pruebas de Jest.'
    },
    {
        numero: 59,
        name: 'Joi',
        command: 'npm install joi@latest',
        description: 'Librería para la validación de objetos JavaScript utilizando una sintaxis fluida y expresiva.'
    },
    {
        numero: 60,
        name: 'Knex.js',
        command: 'npm install knex@latest',
        description: 'SQL query builder para Node.js, compatible con bases de datos como MySQL, PostgreSQL y SQLite.'
    },
    {
        numero: 61,
        name: 'Livereload',
        command: 'npm install livereload@latest',
        description: 'Herramienta para recargar automáticamente la página cuando se realizan cambios en los archivos del proyecto.'
    },
    {
        numero: 62,
        name: 'Mongoose Schema Generator',
        command: 'npm install mongoose-schema-generator@latest',
        description: 'Herramienta para generar esquemas de Mongoose de forma rápida a partir de archivos JSON.'
    },
    {
        numero: 63,
        name: 'Nock',
        command: 'npm install nock@latest',
        description: 'Librería para interceptar y simular peticiones HTTP durante las pruebas.'
    },
    {
        numero: 64,
        name: 'Puppeteer',
        command: 'npm install puppeteer@latest',
        description: 'API de alto nivel para controlar el navegador Chrome o Chromium, especialmente útil para pruebas de UI.'
    },
    {
        numero: 65,
        name: 'QUnit',
        command: 'npm install qunit@latest',
        description: 'Framework de pruebas unitarias para JavaScript.'
    },
    {
        numero: 66,
        name: 'Ramda',
        command: 'npm install ramda@latest',
        description: 'Librería funcional para JavaScript que facilita la programación funcional.'
    },
    {
        numero: 67,
        name: 'React-Redux',
        command: 'npm install react-redux@latest',
        description: 'Conecta el estado global de Redux con los componentes de React.'
    },
    {
        numero: 68,
        name: 'Redux-Saga',
        command: 'npm install redux-saga@latest',
        description: 'Middleware de gestión de efectos secundarios en aplicaciones Redux.'
    },
    {
        numero: 69,
        name: 'Rollup',
        command: 'npm install rollup@latest',
        description: 'Empaquetador de módulos JavaScript centrado en la eficiencia.'
    },
    {
        numero: 70,
        name: 'Sequelize CLI',
        command: 'npm install sequelize-cli@latest',
        description: 'Herramienta de línea de comandos para administrar bases de datos y migraciones con Sequelize.'
    },
    {
        numero: 71,
        name: 'Socket.io-client',
        command: 'npm install socket.io-client@latest',
        description: 'Cliente JavaScript para interactuar con servidores WebSocket mediante Socket.io.'
    },
    {
        numero: 72,
        name: 'Svelte',
        command: 'npm install svelte@latest',
        description: 'Framework para crear aplicaciones web rápidas y reactivas con una sintaxis mínima.'
    },
    {
        numero: 73,
        name: 'Tailwind CSS',
        command: 'npm install tailwindcss@latest',
        description: 'Framework CSS utilitario para crear interfaces personalizables de forma rápida.'
    },
    {
        numero: 74,
        name: 'Telegraf',
        command: 'npm install telegraf@latest',
        description: 'Framework para crear bots de Telegram usando Node.js.'
    },
    {
        numero: 75,
        name: 'TypeORM',
        command: 'npm install typeorm@latest',
        description: 'ORM para TypeScript y JavaScript (Node.js) para trabajar con bases de datos SQL.'
    },
    {
        numero: 76,
        name: 'VeeValidate',
        command: 'npm install vee-validate@latest',
        description: 'Librería de validación de formularios para Vue.js.'
    },
    {
        numero: 77,
        name: 'Webpack Dev Server',
        command: 'npm install webpack-dev-server@latest',
        description: 'Servidor de desarrollo que soporta recarga en vivo y hot module replacement (HMR).'
    },
    {
        numero: 78,
        name: 'Yarn',
        command: 'npm install yarn@latest',
        description: 'Gestor de dependencias alternativo a npm, con enfoque en velocidad y consistencia.'
    },
    {
        numero: 79,
        name: 'Zod',
        command: 'npm install zod@latest',
        description: 'Librería para la validación y transformación de datos de manera segura y sencilla.'
    },
    {
        numero: 80,
        name: 'Vuex',
        command: 'npm install vuex@latest',
        description: 'Librería para gestionar el estado de las aplicaciones de Vue.js.'
    },
    {
        numero: 81,
        name: 'Axios Mock Adapter',
        command: 'npm install axios-mock-adapter@latest',
        description: 'Librería para simular respuestas de Axios en pruebas.'
    },
    {
        numero: 82,
        name: 'Express Rate Limit',
        command: 'npm install express-rate-limit@latest',
        description: 'Middleware para limitar el número de solicitudes HTTP que un cliente puede hacer a tu servidor.'
    },
    {
        numero: 83,
        name: 'Gatsby',
        command: 'npm install gatsby@latest',
        description: 'Generador de sitios estáticos basado en React para aplicaciones rápidas y optimizadas.'
    },
    {
        numero: 84,
        name: 'Hapi',
        command: 'npm install @hapi/hapi@latest',
        description: 'Framework para aplicaciones y servicios web robustos y escalables.'
    },
    {
        numero: 85,
        name: 'Lodash/fp',
        command: 'npm install lodash/fp@latest',
        description: 'Versión funcional de la famosa librería Lodash, con una API inmutable.'
    },
    {
        numero: 86,
        name: 'Mocha Chai Sinon',
        command: 'npm install mocha chai sinon@latest',
        description: 'Conjunto de herramientas para pruebas unitarias con Mocha, Chai y Sinon.'
    },
    {
        numero: 87,
        name: 'Next Auth',
        command: 'npm install next-auth@latest',
        description: 'Solución completa de autenticación para aplicaciones Next.js.'
    },
    {
        numero: 88,
        name: 'Nodemailer',
        command: 'npm install nodemailer@latest',
        description: 'Librería para enviar correos electrónicos desde Node.js.'
    },
    {
        numero: 89,
        name: 'Pug',
        command: 'npm install pug@latest',
        description: 'Motor de plantillas para Node.js que permite la creación de vistas HTML dinámicas.'
    },
    {
        numero: 90,
        name: 'Redbird',
        command: 'npm install redbird@latest',
        description: 'Proxy HTTP flexible y configurable para gestionar peticiones.'
    },
    {
        numero: 91,
        name: 'Sass',
        command: 'npm install sass@latest',
        description: 'Preprocesador CSS que extiende las funcionalidades de CSS con variables, anidamiento y más.'
    },
    {
        numero: 92,
        name: 'Socket.io',
        command: 'npm install socket.io@latest',
        description: 'Librería para habilitar la comunicación en tiempo real basada en eventos entre el cliente y el servidor.'
    },
    {
        numero: 93,
        name: 'Supertest',
        command: 'npm install supertest@latest',
        description: 'Librería para pruebas HTTP de aplicaciones Express o Node.js.'
    },
    {
        numero: 94,
        name: 'Three.js',
        command: 'npm install three@latest',
        description: 'Librería para la creación de gráficos 3D en el navegador con WebGL.'
    },
    {
        numero: 95,
        name: 'Underscore',
        command: 'npm install underscore@latest',
        description: 'Librería de utilidades que proporciona muchas funciones útiles para trabajar con objetos, arrays y funciones.'
    },
    {
        numero: 96,
        name: 'Vite',
        command: 'npm install vite@latest',
        description: 'Herramienta de construcción para aplicaciones modernas, rápida y optimizada.'
    },
    {
        numero: 97,
        name: 'Vue Router',
        command: 'npm install vue-router@latest',
        description: 'Biblioteca para manejar la navegación entre páginas en aplicaciones Vue.js.'
    },
    {
        numero: 98,
        name: 'Webpack',
        command: 'npm install webpack@latest',
        description: 'Empaquetador de módulos para aplicaciones JavaScript que permite organizar y optimizar el código.'
    },
    {
        numero: 99,
        name: 'Yup',
        command: 'npm install yup@latest',
        description: 'Librería para la validación de objetos JavaScript con un enfoque basado en esquemas.'
    },
    {
        numero: 100,
        name: 'Zod',
        command: 'npm install zod@latest',
        description: 'Librería para la validación y transformación de datos de manera segura y sencilla.'
    },
    {
        numero: 101,
        name: 'Axios',
        command: 'npm install axios@latest',
        description: 'Librería para hacer peticiones HTTP basadas en promesas.'
    },
    {
        numero: 102,
        name: 'React',
        command: 'npm install react@latest',
        description: 'Librería para la creación de interfaces de usuario en aplicaciones web.'
    },
    {
        numero: 103,
        name: 'Redux',
        command: 'npm install redux@latest',
        description: 'Biblioteca para la gestión del estado de las aplicaciones JavaScript.'
    },
    {
        numero: 104,
        name: 'React-dom',
        command: 'npm install react-dom@latest',
        description: 'Librería que facilita la integración de React con el DOM del navegador.'
    },
    {
        numero: 105,
        name: 'Styled-components',
        command: 'npm install styled-components@latest',
        description: 'Librería para estilizar aplicaciones React usando plantillas literales.'
    },
    {
        numero: 106,
        name: 'React-scripts',
        command: 'npm install react-scripts@latest',
        description: 'Herramienta de configuración predeterminada para aplicaciones React creada con Create React App.'
    },
    {
        numero: 107,
        name: 'Font-awesome',
        command: 'npm install font-awesome@latest',
        description: 'Biblioteca de iconos escalables en formato vectorial.'
    },
    {
        numero: 108,
        name: 'Lottie-web',
        command: 'npm install lottie-web@latest',
        description: 'Librería para la animación de gráficos vectoriales utilizando JSON.'
    },
    {
        numero: 109,
        name: 'Popper.js',
        command: 'npm install @popperjs/core@latest',
        description: 'Librería para el manejo de elementos flotantes como tooltips, popups y menús.'
    },
    {
        numero: 110,
        name: 'Vue',
        command: 'npm install vue@latest',
        description: 'Framework progresivo para construir interfaces de usuario.'
    },
    {
        numero: 111,
        name: 'Jest',
        command: 'npm install jest@latest',
        description: 'Framework de pruebas para JavaScript.'
    },
    {
        numero: 112,
        name: 'Babel',
        command: 'npm install @babel/core@latest',
        description: 'Transpilador que convierte el código JavaScript moderno a una versión compatible con navegadores antiguos.'
    },
    {
        numero: 113,
        name: 'Mocha',
        command: 'npm install mocha@latest',
        description: 'Framework de pruebas para Node.js que soporta pruebas asíncronas.'
    },
    {
        numero: 114,
        name: 'Chai',
        command: 'npm install chai@latest',
        description: 'Librería de aserciones que facilita la escritura de pruebas unitarias.'
    },
    {
        numero: 115,
        name: 'Sinon',
        command: 'npm install sinon@latest',
        description: 'Librería para crear espías, mocks y stubs en pruebas JavaScript.'
    },
    {
        numero: 116,
        name: 'Cypress',
        command: 'npm install cypress@latest',
        description: 'Framework para realizar pruebas de extremo a extremo en aplicaciones web.'
    },
    {
        numero: 117,
        name: 'Nightwatch',
        command: 'npm install nightwatch@latest',
        description: 'Herramienta para pruebas automatizadas de UI basada en Selenium.'
    },
    {
        numero: 118,
        name: 'Chalk',
        command: 'npm install chalk@latest',
        description: 'Librería para agregar colores y estilos al texto en la terminal.'
    },
    {
        numero: 119,
        name: 'Inquirer',
        command: 'npm install inquirer@latest',
        description: 'Librería para interactuar con el usuario a través de la terminal mediante preguntas y respuestas.'
    },
    {
        numero: 120,
        name: 'Puppeteer',
        command: 'npm install puppeteer@latest',
        description: 'Librería para controlar el navegador Chrome o Chromium con JavaScript.'
    },
    {
        numero: 121,
        name: 'Socket.io-client',
        command: 'npm install socket.io-client@latest',
        description: 'Librería cliente para interactuar con servidores WebSocket mediante Socket.io.'
    },
    {
        numero: 122,
        name: 'Nodemailer',
        command: 'npm install nodemailer@latest',
        description: 'Librería para enviar correos electrónicos desde aplicaciones Node.js.'
    },
    {
        numero: 123,
        name: 'Hapi',
        command: 'npm install @hapi/hapi@latest',
        description: 'Framework robusto y flexible para construir aplicaciones web y servicios.'
    },
    {
        numero: 124,
        name: 'Sass-loader',
        command: 'npm install sass-loader@latest',
        description: 'Carga archivos Sass dentro de Webpack.'
    },
    {
        numero: 125,
        name: 'EsLint',
        command: 'npm install eslint@latest',
        description: 'Herramienta para identificar y corregir problemas en el código JavaScript.'
    },
    {
        numero: 126,
        name: 'Prettier',
        command: 'npm install prettier@latest',
        description: 'Formateador de código para garantizar un estilo consistente en el proyecto.'
    },
    {
        numero: 127,
        name: 'React-router-dom',
        command: 'npm install react-router-dom@latest',
        description: 'Librería para manejar la navegación entre páginas en una aplicación React.'
    },
    {
        numero: 128,
        name: 'Redux-thunk',
        command: 'npm install redux-thunk@latest',
        description: 'Middleware para Redux que permite escribir creadores de acciones asincrónicas.'
    },
    {
        numero: 129,
        name: 'Formik',
        command: 'npm install formik@latest',
        description: 'Librería para manejar formularios en React.'
    },
    {
        numero: 130,
        name: 'React-query',
        command: 'npm install react-query@latest',
        description: 'Librería para la gestión de datos en aplicaciones React, con enfoque en la obtención y almacenamiento de datos remotos.'
    },
    {
        numero: 131,
        name: 'Tailwindcss',
        command: 'npm install tailwindcss@latest',
        description: 'Framework CSS de utilidad para crear interfaces personalizadas rápidamente.'
    },
    {
        numero: 132,
        name: 'Node-fetch',
        command: 'npm install node-fetch@latest',
        description: 'Librería ligera para hacer peticiones HTTP en el entorno Node.js.'
    },
    {
        numero: 133,
        name: 'Lodash',
        command: 'npm install lodash@latest',
        description: 'Utilidades JavaScript para trabajar con arreglos, objetos y cadenas de manera eficiente.'
    },
    {
        numero: 134,
        name: 'Express-validator',
        command: 'npm install express-validator@latest',
        description: 'Librería para la validación de entradas de usuario en aplicaciones Express.'
    },
    {
        numero: 135,
        name: 'Ejs',
        command: 'npm install ejs@latest',
        description: 'Motor de plantillas para Node.js que permite incrustar datos dentro de archivos HTML.'
    },
    {
        numero: 136,
        name: 'Mongoose',
        command: 'npm install mongoose@latest',
        description: 'Librería para trabajar con MongoDB en aplicaciones Node.js.'
    },
    {
        numero: 137,
        name: 'Bcryptjs',
        command: 'npm install bcryptjs@latest',
        description: 'Librería para cifrar contraseñas de manera segura.'
    },
    {
        numero: 138,
        name: 'Cors',
        command: 'npm install cors@latest',
        description: 'Librería para permitir solicitudes de recursos cruzados (CORS) en aplicaciones web.'
    },
    {
        numero: 139,
        name: 'Joi',
        command: 'npm install joi@latest',
        description: 'Librería para la validación de objetos JavaScript con un enfoque basado en esquemas.'
    },
    {
        numero: 140,
        name: 'Chai-http',
        command: 'npm install chai-http@latest',
        description: 'Plugin para Chai que facilita las pruebas de API REST.'
    },
    {
        numero: 141,
        name: 'Cloudinary',
        command: 'npm install cloudinary@latest',
        description: 'Librería para integrar almacenamiento de imágenes y videos en la nube.'
    },
    {
        numero: 142,
        name: 'dotenv',
        command: 'npm install dotenv@latest',
        description: 'Librería para cargar variables de entorno desde un archivo .env.'
    },
    {
        numero: 143,
        name: 'CORS-anywhere',
        command: 'npm install cors-anywhere@latest',
        description: 'Proxy que habilita las solicitudes CORS para superar restricciones de acceso a recursos.'
    },
    {
        numero: 144,
        name: 'Typescript',
        command: 'npm install typescript@latest',
        description: 'Superconjunto de JavaScript que agrega tipos estáticos al lenguaje.'
    },
    {
        numero: 145,
        name: 'Nock',
        command: 'npm install nock@latest',
        description: 'Librería para interceptar y simular solicitudes HTTP en pruebas.'
    },
    {
        numero: 146,
        name: 'Plop',
        command: 'npm install plop@latest',
        description: 'Generador de archivos para proyectos JavaScript.'
    },
    {
        numero: 147,
        name: 'Async',
        command: 'npm install async@latest',
        description: 'Librería para manejar código asíncrono en JavaScript.'
    },
    {
        numero: 148,
        name: 'Faker',
        command: 'npm install faker@latest',
        description: 'Librería para generar datos falsos de prueba, como nombres, direcciones y correos electrónicos.'
    },
    {
        numero: 149,
        name: 'Date-fns',
        command: 'npm install date-fns@latest',
        description: 'Librería para trabajar con fechas de manera sencilla en JavaScript.'
    },
    {
        numero: 150,
        name: 'React-spring',
        command: 'npm install react-spring@latest',
        description: 'Librería de animación para React, basada en la física de resortes.'
    },
    {
        numero: 151,
        name: 'Jest-preset-angular',
        command: 'npm install jest-preset-angular@latest',
        description: 'Configuración preestablecida de Jest para trabajar con Angular.'
    },
    {
        numero: 152,
        name: 'Xlsx',
        command: 'npm install xlsx@latest',
        description: 'Librería para leer y escribir archivos Excel en JavaScript.'
    },
    {
        numero: 153,
        name: 'Cytoscape',
        command: 'npm install cytoscape@latest',
        description: 'Librería para la visualización y análisis de grafos y redes.'
    },
    {
        numero: 154,
        name: 'Swiper',
        command: 'npm install swiper@latest',
        description: 'Librería para crear galerías de imágenes y carruseles de contenido.'
    },
    {
        numero: 155,
        name: 'Zebra',
        command: 'npm install zebra@latest',
        description: 'Framework CSS para crear interfaces con un diseño minimalista.'
    },
    {
        numero: 156,
        name: 'React-table',
        command: 'npm install react-table@latest',
        description: 'Librería para construir tablas de datos complejas en React.'
    },
    {
        numero: 157,
        name: 'React-datepicker',
        command: 'npm install react-datepicker@latest',
        description: 'Componente de calendario y selección de fechas para aplicaciones React.'
    },
    {
        numero: 158,
        name: 'Framer-motion',
        command: 'npm install framer-motion@latest',
        description: 'Librería de animaciones para React, basada en la física.'
    },
    {
        numero: 159,
        name: 'Ant-design',
        command: 'npm install antd@latest',
        description: 'Biblioteca de componentes UI para React, diseñada con un enfoque empresarial.'
    },
    {
        numero: 160,
        name: 'Moment',
        command: 'npm install moment@latest',
        description: 'Librería para el manejo de fechas y horas en JavaScript.'
    },
    {
        numero: 161,
        name: 'jsPDF',
        command: 'npm install jspdf@latest',
        description: 'Librería para crear archivos PDF dinámicos desde JavaScript.'
    },
    {
        numero: 162,
        name: 'Highlight.js',
        command: 'npm install highlight.js@latest',
        description: 'Librería para resaltar sintaxis en bloques de código.'
    },
    {
        numero: 163,
        name: 'Concurrently',
        command: 'npm install concurrently@latest',
        description: 'Librería para ejecutar múltiples comandos al mismo tiempo en la terminal.'
    },
    {
        numero: 164,
        name: 'Koa',
        command: 'npm install koa@latest',
        description: 'Framework para aplicaciones web y APIs en Node.js, minimalista y extensible.'
    },
    {
        numero: 165,
        name: 'Mochajs',
        command: 'npm install mochajs@latest',
        description: 'Framework de pruebas con enfoque en comportamiento para JavaScript.'
    },
    {
        numero: 166,
        name: 'React-hook-form',
        command: 'npm install react-hook-form@latest',
        description: 'Librería para simplificar el manejo de formularios en React.'
    },
    {
        numero: 167,
        name: 'Data-fns',
        command: 'npm install data-fns@latest',
        description: 'Librería de utilidad para trabajar con datos, manejo de objetos y matrices.'
    },
    {
        numero: 168,
        name: 'React-icons',
        command: 'npm install react-icons@latest',
        description: 'Biblioteca de iconos para aplicaciones React.'
    },
    {
        numero: 169,
        name: 'Apollo-client',
        command: 'npm install @apollo/client@latest',
        description: 'Librería cliente para consumir APIs GraphQL.'
    },
    {
        numero: 170,
        name: 'Next-redux-wrapper',
        command: 'npm install next-redux-wrapper@latest',
        description: 'Wrapper para usar Redux en aplicaciones Next.js.'
    },
    {
        numero: 171,
        name: 'React-redux',
        command: 'npm install react-redux@latest',
        description: 'Enlace entre Redux y React.'
    },
    {
        numero: 172,
        name: 'Npm-check-updates',
        command: 'npm install npm-check-updates@latest',
        description: 'Herramienta para actualizar las dependencias de un proyecto npm.'
    },
    {
        numero: 173,
        name: 'Babel-loader',
        command: 'npm install babel-loader@latest',
        description: 'Cargador Webpack para transpilar archivos JavaScript usando Babel.'
    },
    {
        numero: 174,
        name: 'Jest-environment-node',
        command: 'npm install jest-environment-node@latest',
        description: 'Entorno de ejecución Node.js para Jest.'
    },
    {
        numero: 175,
        name: 'Express-session',
        command: 'npm install express-session@latest',
        description: 'Librería para manejar sesiones en aplicaciones Express.'
    },
    {
        numero: 176,
        name: 'Request',
        command: 'npm install request@latest',
        description: 'Librería para realizar solicitudes HTTP.'
    },
    {
        numero: 177,
        name: 'Socket.io',
        command: 'npm install socket.io@latest',
        description: 'Librería para habilitar comunicaciones en tiempo real mediante WebSockets.'
    },
    {
        numero: 178,
        name: 'Chai',
        command: 'npm install chai@latest',
        description: 'Librería de aserciones para pruebas JavaScript.'
    },
    {
        numero: 179,
        name: 'Node-fetch',
        command: 'npm install node-fetch@latest',
        description: 'Librería para hacer solicitudes HTTP en Node.js.'
    },
    {
        numero: 180,
        name: 'Axios',
        command: 'npm install axios@latest',
        description: 'Librería popular para hacer solicitudes HTTP en JavaScript.'
    },
    {
        numero: 181,
        name: 'Lodash-es',
        command: 'npm install lodash-es@latest',
        description: 'Versión modularizada de Lodash para usar con imports ES6.'
    },
    {
        numero: 182,
        name: 'Express',
        command: 'npm install express@latest',
        description: 'Framework minimalista para Node.js que facilita la creación de aplicaciones web y APIs.'
    },
    {
        numero: 183,
        name: 'Knex.js',
        command: 'npm install knex@latest',
        description: 'Librería para trabajar con bases de datos SQL en Node.js.'
    },
    {
        numero: 184,
        name: 'Karma',
        command: 'npm install karma@latest',
        description: 'Framework de pruebas para JavaScript que facilita el trabajo con múltiples navegadores.'
    },
    {
        numero: 185,
        name: 'Vuex',
        command: 'npm install vuex@latest',
        description: 'Librería de gestión de estado para aplicaciones Vue.js.'
    },
    {
        numero: 186,
        name: 'Vue',
        command: 'npm install vue@latest',
        description: 'Framework progresivo para construir interfaces de usuario.'
    },
    {
        numero: 187,
        name: 'React',
        command: 'npm install react@latest',
        description: 'Biblioteca para construir interfaces de usuario interactivas.'
    },
    {
        numero: 188,
        name: 'React-dom',
        command: 'npm install react-dom@latest',
        description: 'Librería que permite interactuar con el DOM en aplicaciones React.'
    },
    {
        numero: 189,
        name: 'Vue-router',
        command: 'npm install vue-router@latest',
        description: 'Librería para manejar las rutas en aplicaciones Vue.js.'
    },
    {
        numero: 190,
        name: 'Vue-cli',
        command: 'npm install @vue/cli@latest',
        description: 'Herramienta para crear proyectos Vue.js rápidamente.'
    },
    {
        numero: 191,
        name: 'Vite',
        command: 'npm install vite@latest',
        description: 'Herramienta de desarrollo rápida para proyectos JavaScript, como Vue, React y otros.'
    },
    {
        numero: 192,
        name: 'Sass',
        command: 'npm install sass@latest',
        description: 'Preprocesador CSS que extiende las capacidades de CSS.'
    },
    {
        numero: 193,
        name: 'Babel-preset-env',
        command: 'npm install babel-preset-env@latest',
        description: 'Preseteo de Babel para compilar código JavaScript según el entorno de ejecución.'
    },
    {
        numero: 194,
        name: 'Webpack',
        command: 'npm install webpack@latest',
        description: 'Empaquetador de módulos JavaScript.'
    },
    {
        numero: 195,
        name: 'Webpack-cli',
        command: 'npm install webpack-cli@latest',
        description: 'Interfaz de línea de comandos para Webpack.'
    },
    {
        numero: 196,
        name: 'Webpack-dev-server',
        command: 'npm install webpack-dev-server@latest',
        description: 'Servidor de desarrollo para Webpack que facilita la carga dinámica de módulos.'
    },
    {
        numero: 197,
        name: 'Parcel',
        command: 'npm install parcel@latest',
        description: 'Empaquetador de aplicaciones web que no requiere configuración.'
    },
    {
        numero: 198,
        name: 'Rollup',
        command: 'npm install rollup@latest',
        description: 'Empaquetador de módulos JavaScript optimizado para la creación de bibliotecas.'
    },
    {
        numero: 199,
        name: 'Puppeteer',
        command: 'npm install puppeteer@latest',
        description: 'Librería para controlar un navegador Chromium mediante código.'
    },
    {
        numero: 200,
        name: 'Mocha',
        command: 'npm install mocha@latest',
        description: 'Framework de pruebas para JavaScript.'
    }

];

// Función para verificar si las dependencias están instaladas
const installDependencies = async () => {
    try {
        console.log(chalk.yellow('Verificando dependencias...'));

        // Intentar instalar inquirer, chalk y execa si no están instaladas
        await execa('npm', ['install', 'inquirer', 'chalk', 'execa'], { stdio: 'inherit' });

        console.log(chalk.green('Dependencias instaladas correctamente.'));
    } catch (error) {
        console.log(chalk.red('Error al instalar dependencias:', error.message));
    }
};


async function installLibraries(selectedLibraries) {
    try {
        // Construir el comando npm install con las opciones --silent y --no-audit
        const command = `npm install ${selectedLibraries.join(' ')} --silent --no-audit`;

        // Ejecutar el comando npm install de manera silenciosa
        await execa.command(command, { stdio: 'ignore' });

        console.log('Dependencias instaladas correctamente.');
    } catch (error) {
        console.error('Hubo un error al instalar las dependencias:', error);
    }
}

// Función principal con el menú interactivo
const main = async () => {
    console.log(chalk.yellow.bold('\nBienvenido al Instalador de Librerías\n'));

    try {
        installDependencies();
        // Solicitar al usuario que seleccione las librerías
        const { selectedLibraries } = await inquirer.prompt([
            {
                type: 'checkbox',
                name: 'selectedLibraries',
                message: 'Selecciona las librerías que deseas instalar:',
                choices: libraries.map((lib) => ({
                    name: `${lib.name} - ${lib.description}`,
                    value: lib,
                })),
            },
        ]);

        // Validar selección del usuario
        if (selectedLibraries.length === 0) {
            console.log(chalk.red('\nNo seleccionaste ninguna librería.\n'));
            return;
        }

        // Ejecutar la instalación de las librerías seleccionadas
        await installLibraries(selectedLibraries);
    } catch (error) {
        console.log(chalk.red(`\nOcurrió un error inesperado: ${error.message}\n`));
    }
};

// Ejecutar la función principal
main();