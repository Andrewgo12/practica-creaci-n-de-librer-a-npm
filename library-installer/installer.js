#!/usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';
import { execa } from 'execa';
import fs from 'fs';
import path from 'path';


// Lista de librerías con sus comandos de instalación
const libraries = [
    {
        numero: 5,
        name: 'Body-Parser',
        command: 'body-parser',
        description: 'Middleware para procesar el cuerpo de las solicitudes HTTP (como JSON, URL encoded, etc.).'
    },
    {
        numero: 6,
        name: 'Bootstrap',
        command: 'bootstrap',
        description: 'Framework de diseño web responsivo y móvil primero que incluye herramientas como grids y componentes listos para usar.'
    },
    {
        numero: 7,
        name: 'Chart.js',
        command: 'chart.js',
        description: 'Librería para crear gráficos interactivos en HTML utilizando el formato de canvas.'
    },
    {
        numero: 8,
        name: 'Chai',
        command: 'chai',
        description: 'Librería de aserciones para pruebas unitarias y de integración, utilizada comúnmente con Mocha.'
    },
    {
        numero: 9,
        name: 'Cors',
        command: 'cors',
        description: 'Middleware que habilita el soporte CORS (Cross-Origin Resource Sharing) en aplicaciones Node.js.'
    },
    {
        numero: 10,
        name: 'Day.js',
        command: 'dayjs',
        description: 'Alternativa ligera a Moment.js para trabajar con fechas y horas.'
    },
    {
        numero: 11,
        name: 'D3.js',
        command: 'd3',
        description: 'Librería para manipular documentos basados en datos, con capacidad para crear visualizaciones dinámicas.'
    },
    {
        numero: 12,
        name: 'Dotenv',
        command: 'dotenv',
        description: 'Carga las variables de entorno desde un archivo `.env` en tu aplicación para mantenerlas seguras.'
    },
    {
        numero: 13,
        name: 'ESLint',
        command: 'eslint',
        description: 'Herramienta de análisis estático para identificar y corregir problemas de estilo y calidad en el código JavaScript.'
    },
    {
        numero: 14,
        name: 'Express',
        command: 'express',
        description: 'Framework minimalista para Node.js que facilita la creación de aplicaciones web y APIs.'
    },
    {
        numero: 15,
        name: 'Foundation',
        command: 'foundation-sites',
        description: 'Framework CSS que permite crear interfaces web modernas y adaptativas.'
    },
    {
        numero: 16,
        name: 'GraphQL',
        command: 'graphql',
        description: 'Lenguaje de consulta para APIs y un runtime para ejecutar esas consultas con tus datos.'
    },
    {
        numero: 17,
        name: 'Handlebars',
        command: 'handlebars',
        description: 'Motor de plantillas para generar HTML dinámico utilizando una sintaxis simple y extensible.'
    },
    {
        numero: 18,
        name: 'Helmet',
        command: 'helmet',
        description: 'Middleware para mejorar la seguridad de aplicaciones web mediante la configuración de encabezados HTTP.'
    },
    {
        numero: 19,
        name: 'Jest',
        command: 'jest',
        description: 'Framework de pruebas unitarias y de integración con enfoque en facilidad de uso y rendimiento.'
    },
    {
        numero: 20,
        name: 'JQuery',
        command: 'jquery',
        description: 'Librería rápida y concisa para manipular el DOM, eventos y hacer solicitudes AJAX.'
    },
    {
        numero: 21,
        name: 'JSONWebToken',
        command: 'jsonwebtoken',
        description: 'Librería para generar y verificar JWT (JSON Web Tokens) para autenticación.'
    },
    {
        numero: 22,
        name: 'Lodash',
        command: 'lodash',
        description: 'Librería de utilidades que facilita el trabajo con arreglos, objetos y funciones.'
    },
    {
        numero: 23,
        name: 'MongoDB',
        command: 'mongodb',
        description: 'Driver oficial de Node.js para interactuar con la base de datos MongoDB.'
    },
    {
        numero: 24,
        name: 'Moment.js',
        command: 'moment',
        description: 'Librería para manipular, validar, analizar y mostrar fechas y horas en JavaScript.'
    },
    {
        numero: 25,
        name: 'Mocha',
        command: 'mocha',
        description: 'Framework de pruebas flexible para Node.js y el navegador.'
    },
    {
        numero: 26,
        name: 'Mongoose',
        command: 'mongoose',
        description: 'Librería de modelado de datos para MongoDB en Node.js con soporte para validación y consultas.'
    },
    {
        numero: 27,
        name: 'MySQL',
        command: 'mysql',
        description: 'Conector oficial para interactuar con bases de datos MySQL desde Node.js.'
    },
    {
        numero: 28,
        name: 'Next.js',
        command: 'next',
        description: 'Framework para construir aplicaciones React con renderizado en el servidor y optimización automática.'
    },
    {
        numero: 29,
        name: 'Nodemailer',
        command: 'nodemailer',
        description: 'Librería para enviar correos electrónicos desde aplicaciones Node.js.'
    },
    {
        numero: 30,
        name: 'Nuxt.js',
        command: 'nuxt',
        description: 'Framework de Vue.js para construir aplicaciones de página única (SPA) con renderizado en el servidor.'
    },
    {
        numero: 31,
        name: 'Passport.js',
        command: 'passport',
        description: 'Middleware para gestionar la autenticación de usuarios en aplicaciones Node.js.'
    },
    {
        numero: 32,
        name: 'Prisma',
        command: 'prisma',
        description: 'ORM moderno y tipado para interactuar con bases de datos relacionales en aplicaciones Node.js.'
    },
    {
        numero: 33,
        name: 'Pug',
        command: 'pug',
        description: 'Motor de plantillas que facilita la generación de HTML con una sintaxis más limpia y concisa.'
    },
    {
        numero: 34,
        name: 'React',
        command: 'react',
        description: 'Librería para construir interfaces de usuario dinámicas y reactivas mediante un modelo basado en componentes.'
    },
    {
        numero: 35,
        name: 'React Router',
        command: 'react-router-dom',
        description: 'Librería para manejar la navegación y las rutas en aplicaciones React.'
    },
    {
        numero: 36,
        name: 'Redux',
        command: 'redux',
        description: 'Librería de gestión de estado predecible para aplicaciones JavaScript.'
    },
    {
        numero: 37,
        name: 'Sass',
        command: 'sass',
        description: 'Preprocesador CSS que permite usar variables, anidamiento y otras características avanzadas.'
    },
    {
        numero: 38,
        name: 'Sequelize',
        command: 'sequelize',
        description: 'ORM basado en promesas para bases de datos SQL en Node.js.'
    },
    {
        numero: 39,
        name: 'Socket.io',
        command: 'socket.io',
        description: 'Librería para facilitar la comunicación en tiempo real entre clientes y servidores a través de WebSockets.'
    },
    {
        numero: 40,
        name: 'Styled-Components',
        command: 'styled-components',
        description: 'Librería para usar estilos CSS en línea dentro de componentes de React con la ayuda de plantillas literales.'
    },
    {
        numero: 41,
        name: 'TypeScript',
        command: 'typescript',
        description: 'Superset de JavaScript que agrega tipado estático y otras características para mejorar la calidad del código.'
    },
    {
        numero: 42,
        name: 'Underscore',
        command: 'underscore',
        description: 'Librería con utilidades funcionales para trabajar con arreglos, objetos y funciones.'
    },
    {
        numero: 43,
        name: 'Vite',
        command: 'vite',
        description: 'Bundler de desarrollo rápido para aplicaciones web modernas, con soporte para JavaScript, TypeScript y más.'
    },
    {
        numero: 44,
        name: 'Vue.js',
        command: 'vue',
        description: 'Framework progresivo para construir interfaces de usuario interactivas.'
    },
    {
        numero: 45,
        name: 'Webpack',
        command: 'webpack',
        description: 'Empaquetador de módulos para aplicaciones JavaScript modernas que ayuda a optimizar y gestionar los recursos.'
    },
    {
        numero: 46,
        name: 'Zod',
        command: 'zod',
        description: 'Librería para la validación y transformación de datos de manera segura y sencilla.'
    },
    {
        numero: 47,
        name: 'Ajv',
        command: 'ajv',
        description: 'Librería para la validación de datos JSON basada en esquemas.'
    },
    {
        numero: 48,
        name: 'Async',
        command: 'async',
        description: 'Librería que proporciona una variedad de utilidades para trabajar con funciones asincrónicas.'
    },
    {
        numero: 50,
        name: 'Bulma',
        command: 'bulma',
        description: 'Framework CSS ligero y fácil de usar para crear sitios web responsivos y modernos.'
    },
    {
        numero: 51,
        name: 'Cypress',
        command: 'cypress',
        description: 'Herramienta de pruebas de extremo a extremo para aplicaciones web.'
    },
    {
        numero: 52,
        name: 'Docusaurus',
        command: 'docusaurus',
        description: 'Framework para construir documentación técnica y sitios web de contenido estático.'
    },
    {
        numero: 53,
        name: 'EJS',
        command: 'ejs',
        description: 'Motor de plantillas para Node.js que permite generar HTML dinámico utilizando JavaScript.'
    },
    {
        numero: 54,
        name: 'Express Validator',
        command: 'express-validator',
        description: 'Middleware de validación para las aplicaciones de Express.'
    },
    {
        numero: 55,
        name: 'Faker.js',
        command: 'faker',
        description: 'Generador de datos falsos para pruebas y desarrollo.'
    },
    {
        numero: 56,
        name: 'Glitch',
        command: 'glitch',
        description: 'Herramienta que permite crear aplicaciones web y APIs de manera rápida e interactiva.'
    },
    {
        numero: 57,
        name: 'Gulp',
        command: 'gulp',
        description: 'Toolkit de automatización de tareas que facilita la compilación de proyectos.'
    },
    {
        numero: 58,
        name: 'Jest Image Snapshot',
        command: 'jest-image-snapshot',
        description: 'Librería para hacer comparaciones de imágenes dentro de las pruebas de Jest.'
    },
    {
        numero: 59,
        name: 'Joi',
        command: 'joi',
        description: 'Librería para la validación de objetos JavaScript utilizando una sintaxis fluida y expresiva.'
    },
    {
        numero: 60,
        name: 'Knex.js',
        command: 'knex',
        description: 'SQL query builder para Node.js, compatible con bases de datos como MySQL, PostgreSQL y SQLite.'
    },
    {
        numero: 61,
        name: 'Livereload',
        command: 'livereload',
        description: 'Herramienta para recargar automáticamente la página cuando se realizan cambios en los archivos del proyecto.'
    },
    {
        numero: 62,
        name: 'Mongoose Schema Generator',
        command: 'mongoose-schema-generator',
        description: 'Herramienta para generar esquemas de Mongoose de forma rápida a partir de archivos JSON.'
    },
    {
        numero: 63,
        name: 'Nock',
        command: 'nock',
        description: 'Librería para interceptar y simular peticiones HTTP durante las pruebas.'
    },
    {
        numero: 64,
        name: 'Puppeteer',
        command: 'puppeteer',
        description: 'API de alto nivel para controlar el navegador Chrome o Chromium, especialmente útil para pruebas de UI.'
    },
    {
        numero: 65,
        name: 'QUnit',
        command: 'qunit',
        description: 'Framework de pruebas unitarias para JavaScript.'
    },
    {
        numero: 66,
        name: 'Ramda',
        command: 'ramda',
        description: 'Librería funcional para JavaScript que facilita la programación funcional.'
    },
    {
        numero: 67,
        name: 'React-Redux',
        command: 'react-redux',
        description: 'Conecta el estado global de Redux con los componentes de React.'
    },
    {
        numero: 68,
        name: 'Redux-Saga',
        command: 'redux-saga',
        description: 'Middleware de gestión de efectos secundarios en aplicaciones Redux.'
    },
    {
        numero: 69,
        name: 'Rollup',
        command: 'rollup',
        description: 'Empaquetador de módulos JavaScript centrado en la eficiencia.'
    },
    {
        numero: 70,
        name: 'Sequelize CLI',
        command: 'sequelize-cli',
        description: 'Herramienta de línea de comandos para administrar bases de datos y migraciones con Sequelize.'
    },
    {
        numero: 71,
        name: 'Socket.io-client',
        command: 'socket.io-client',
        description: 'Cliente JavaScript para interactuar con servidores WebSocket mediante Socket.io.'
    },
    {
        numero: 72,
        name: 'Svelte',
        command: 'svelte',
        description: 'Framework para crear aplicaciones web rápidas y reactivas con una sintaxis mínima.'
    },
    {
        numero: 73,
        name: 'Tailwind CSS',
        command: 'tailwindcss',
        description: 'Framework CSS utilitario para crear interfaces personalizables de forma rápida.'
    },
    {
        numero: 74,
        name: 'Telegraf',
        command: 'telegraf',
        description: 'Framework para crear bots de Telegram usando Node.js.'
    },
    {
        numero: 75,
        name: 'TypeORM',
        command: 'typeorm',
        description: 'ORM para TypeScript y JavaScript (Node.js) para trabajar con bases de datos SQL.'
    },
    {
        numero: 76,
        name: 'VeeValidate',
        command: 'vee-validate',
        description: 'Librería de validación de formularios para Vue.js.'
    },
    {
        numero: 77,
        name: 'Webpack Dev Server',
        command: 'webpack-dev-server',
        description: 'Servidor de desarrollo que soporta recarga en vivo y hot module replacement (HMR).'
    },
    {
        numero: 78,
        name: 'Yarn',
        command: 'yarn',
        description: 'Gestor de dependencias alternativo a npm, con enfoque en velocidad y consistencia.'
    },
    {
        numero: 79,
        name: 'Zod',
        command: 'zod',
        description: 'Librería para la validación y transformación de datos de manera segura y sencilla.'
    },
    {
        numero: 80,
        name: 'Vuex',
        command: 'vuex',
        description: 'Librería para gestionar el estado de las aplicaciones de Vue.js.'
    },
    {
        numero: 81,
        name: 'Axios Mock Adapter',
        command: 'axios-mock-adapter',
        description: 'Librería para simular respuestas de Axios en pruebas.'
    },
    {
        numero: 82,
        name: 'Express Rate Limit',
        command: 'express-rate-limit',
        description: 'Middleware para limitar el número de solicitudes HTTP que un cliente puede hacer a tu servidor.'
    },
    {
        numero: 83,
        name: 'Gatsby',
        command: 'gatsby',
        description: 'Generador de sitios estáticos basado en React para aplicaciones rápidas y optimizadas.'
    },
    {
        numero: 85,
        name: 'Lodash/fp',
        command: 'lodash/fp',
        description: 'Versión funcional de la famosa librería Lodash, con una API inmutable.'
    },
    {
        numero: 86,
        name: 'Mocha Chai Sinon',
        command: 'mocha chai sinon',
        description: 'Conjunto de herramientas para pruebas unitarias con Mocha, Chai y Sinon.'
    },
    {
        numero: 87,
        name: 'Next Auth',
        command: 'next-auth',
        description: 'Solución completa de autenticación para aplicaciones Next.js.'
    },
    {
        numero: 88,
        name: 'Nodemailer',
        command: 'nodemailer',
        description: 'Librería para enviar correos electrónicos desde Node.js.'
    },
    {
        numero: 89,
        name: 'Pug',
        command: 'pug',
        description: 'Motor de plantillas para Node.js que permite la creación de vistas HTML dinámicas.'
    },
    {
        numero: 90,
        name: 'Redbird',
        command: 'redbird',
        description: 'Proxy HTTP flexible y configurable para gestionar peticiones.'
    },
    {
        numero: 91,
        name: 'Sass',
        command: 'sass',
        description: 'Preprocesador CSS que extiende las funcionalidades de CSS con variables, anidamiento y más.'
    },
    {
        numero: 92,
        name: 'Socket.io',
        command: 'socket.io',
        description: 'Librería para habilitar la comunicación en tiempo real basada en eventos entre el cliente y el servidor.'
    },
    {
        numero: 93,
        name: 'Supertest',
        command: 'supertest',
        description: 'Librería para pruebas HTTP de aplicaciones Express o Node.js.'
    },
    {
        numero: 94,
        name: 'Three.js',
        command: 'three',
        description: 'Librería para la creación de gráficos 3D en el navegador con WebGL.'
    },
    {
        numero: 95,
        name: 'Underscore',
        command: 'underscore',
        description: 'Librería de utilidades que proporciona muchas funciones útiles para trabajar con objetos, arrays y funciones.'
    },
    {
        numero: 96,
        name: 'Vite',
        command: 'vite',
        description: 'Herramienta de construcción para aplicaciones modernas, rápida y optimizada.'
    },
    {
        numero: 97,
        name: 'Vue Router',
        command: 'vue-router',
        description: 'Biblioteca para manejar la navegación entre páginas en aplicaciones Vue.js.'
    },
    {
        numero: 98,
        name: 'Webpack',
        command: 'webpack',
        description: 'Empaquetador de módulos para aplicaciones JavaScript que permite organizar y optimizar el código.'
    },
    {
        numero: 99,
        name: 'Yup',
        command: 'yup',
        description: 'Librería para la validación de objetos JavaScript con un enfoque basado en esquemas.'
    },
    {
        numero: 100,
        name: 'Zod',
        command: 'zod',
        description: 'Librería para la validación y transformación de datos de manera segura y sencilla.'
    },
    {
        numero: 101,
        name: 'Axios',
        command: 'axios',
        description: 'Librería para hacer peticiones HTTP basadas en promesas.'
    },
    {
        numero: 102,
        name: 'React',
        command: 'react',
        description: 'Librería para la creación de interfaces de usuario en aplicaciones web.'
    },
    {
        numero: 103,
        name: 'Redux',
        command: 'redux',
        description: 'Biblioteca para la gestión del estado de las aplicaciones JavaScript.'
    },
    {
        numero: 104,
        name: 'React-dom',
        command: 'react-dom',
        description: 'Librería que facilita la integración de React con el DOM del navegador.'
    },
    {
        numero: 105,
        name: 'Styled-components',
        command: 'styled-components ',
        description: 'Librería para estilizar aplicaciones React usando plantillas literales.'
    },
    {
        numero: 106,
        name: 'React-scripts',
        command: 'react-scripts',
        description: 'Herramienta de configuración predeterminada para aplicaciones React creada con Create React App.'
    },
    {
        numero: 107,
        name: 'Font-awesome',
        command: 'font-awesome',
        description: 'Biblioteca de iconos escalables en formato vectorial.'
    },
    {
        numero: 108,
        name: 'Lottie-web',
        command: 'lottie-web',
        description: 'Librería para la animación de gráficos vectoriales utilizando JSON.'
    },
    {
        numero: 110,
        name: 'Vue',
        command: 'vue',
        description: 'Framework progresivo para construir interfaces de usuario.'
    },
    {
        numero: 111,
        name: 'Jest',
        command: 'jest',
        description: 'Framework de pruebas para JavaScript.'
    },
    {
        numero: 113,
        name: 'Mocha',
        command: 'mocha',
        description: 'Framework de pruebas para Node.js que soporta pruebas asíncronas.'
    },
    {
        numero: 114,
        name: 'Chai',
        command: 'chai',
        description: 'Librería de aserciones que facilita la escritura de pruebas unitarias.'
    },
    {
        numero: 115,
        name: 'Sinon',
        command: 'sinon',
        description: 'Librería para crear espías, mocks y stubs en pruebas JavaScript.'
    },
    {
        numero: 116,
        name: 'Cypress',
        command: 'cypress',
        description: 'Framework para realizar pruebas de extremo a extremo en aplicaciones web.'
    },
    {
        numero: 117,
        name: 'Nightwatch',
        command: 'nightwatch',
        description: 'Herramienta para pruebas automatizadas de UI basada en Selenium.'
    },
    {
        numero: 118,
        name: 'Chalk',
        command: 'chalk',
        description: 'Librería para agregar colores y estilos al texto en la terminal.'
    },
    {
        numero: 119,
        name: 'Inquirer',
        command: 'inquirer',
        description: 'Librería para interactuar con el usuario a través de la terminal mediante preguntas y respuestas.'
    },
    {
        numero: 120,
        name: 'Puppeteer',
        command: 'puppeteer',
        description: 'Librería para controlar el navegador Chrome o Chromium con JavaScript.'
    },
    {
        numero: 121,
        name: 'Socket.io-client',
        command: 'socket.io-client',
        description: 'Librería cliente para interactuar con servidores WebSocket mediante Socket.io.'
    },
    {
        numero: 122,
        name: 'Nodemailer',
        command: 'nodemailer',
        description: 'Librería para enviar correos electrónicos desde aplicaciones Node.js.'
    },
    {
        numero: 124,
        name: 'Sass-loader',
        command: 'sass-loader',
        description: 'Carga archivos Sass dentro de Webpack.'
    },
    {
        numero: 125,
        name: 'EsLint',
        command: 'eslint',
        description: 'Herramienta para identificar y corregir problemas en el código JavaScript.'
    },
    {
        numero: 126,
        name: 'Prettier',
        command: 'prettier',
        description: 'Formateador de código para garantizar un estilo consistente en el proyecto.'
    },
    {
        numero: 127,
        name: 'React-router-dom',
        command: 'react-router-dom',
        description: 'Librería para manejar la navegación entre páginas en una aplicación React.'
    },
    {
        numero: 128,
        name: 'Redux-thunk',
        command: 'redux-thunk',
        description: 'Middleware para Redux que permite escribir creadores de acciones asincrónicas.'
    },
    {
        numero: 129,
        name: 'Formik',
        command: 'formik',
        description: 'Librería para manejar formularios en React.'
    },
    {
        numero: 130,
        name: 'React-query',
        command: 'react-query',
        description: 'Librería para la gestión de datos en aplicaciones React, con enfoque en la obtención y almacenamiento de datos remotos.'
    },
    {
        numero: 131,
        name: 'Tailwindcss',
        command: 'tailwindcss',
        description: 'Framework CSS de utilidad para crear interfaces personalizadas rápidamente.'
    },
    {
        numero: 132,
        name: 'Node-fetch',
        command: 'node-fetch',
        description: 'Librería ligera para hacer peticiones HTTP en el entorno Node.js.'
    },
    {
        numero: 133,
        name: 'Lodash',
        command: 'lodash',
        description: 'Utilidades JavaScript para trabajar con arreglos, objetos y cadenas de manera eficiente.'
    },
    {
        numero: 134,
        name: 'Express-validator',
        command: 'express-validator',
        description: 'Librería para la validación de entradas de usuario en aplicaciones Express.'
    },
    {
        numero: 135,
        name: 'Ejs',
        command: 'ejs',
        description: 'Motor de plantillas para Node.js que permite incrustar datos dentro de archivos HTML.'
    },
    {
        numero: 136,
        name: 'Mongoose',
        command: 'mongoose',
        description: 'Librería para trabajar con MongoDB en aplicaciones Node.js.'
    },
    {
        numero: 138,
        name: 'Cors',
        command: 'cors',
        description: 'Librería para permitir solicitudes de recursos cruzados (CORS) en aplicaciones web.'
    },
    {
        numero: 139,
        name: 'Joi',
        command: 'joi',
        description: 'Librería para la validación de objetos JavaScript con un enfoque basado en esquemas.'
    },
    {
        numero: 140,
        name: 'Chai-http',
        command: 'chai-http',
        description: 'Plugin para Chai que facilita las pruebas de API REST.'
    },
    {
        numero: 141,
        name: 'Cloudinary',
        command: 'cloudinary',
        description: 'Librería para integrar almacenamiento de imágenes y videos en la nube.'
    },
    {
        numero: 142,
        name: 'dotenv',
        command: 'dotenv',
        description: 'Librería para cargar variables de entorno desde un archivo .env.'
    },
    {
        numero: 143,
        name: 'CORS-anywhere',
        command: 'cors-anywhere',
        description: 'Proxy que habilita las solicitudes CORS para superar restricciones de acceso a recursos.'
    },
    {
        numero: 144,
        name: 'Typescript',
        command: 'typescript',
        description: 'Superconjunto de JavaScript que agrega tipos estáticos al lenguaje.'
    },
    {
        numero: 145,
        name: 'Nock',
        command: 'nock',
        description: 'Librería para interceptar y simular solicitudes HTTP en pruebas.'
    },
    {
        numero: 146,
        name: 'Plop',
        command: 'plop',
        description: 'Generador de archivos para proyectos JavaScript.'
    },
    {
        numero: 147,
        name: 'Async',
        command: 'async',
        description: 'Librería para manejar código asíncrono en JavaScript.'
    },
    {
        numero: 148,
        name: 'Faker',
        command: 'faker',
        description: 'Librería para generar datos falsos de prueba, como nombres, direcciones y correos electrónicos.'
    },
    {
        numero: 149,
        name: 'Date-fns',
        command: 'date-fns',
        description: 'Librería para trabajar con fechas de manera sencilla en JavaScript.'
    },
    {
        numero: 150,
        name: 'React-spring',
        command: 'react-spring',
        description: 'Librería de animación para React, basada en la física de resortes.'
    },
    {
        numero: 151,
        name: 'Jest-preset-angular',
        command: 'jest-preset-angular',
        description: 'Configuración preestablecida de Jest para trabajar con Angular.'
    },
    {
        numero: 152,
        name: 'Xlsx',
        command: 'xlsx',
        description: 'Librería para leer y escribir archivos Excel en JavaScript.'
    },
    {
        numero: 153,
        name: 'Cytoscape',
        command: 'cytoscape',
        description: 'Librería para la visualización y análisis de grafos y redes.'
    },
    {
        numero: 154,
        name: 'Swiper',
        command: 'swiper',
        description: 'Librería para crear galerías de imágenes y carruseles de contenido.'
    },
    {
        numero: 155,
        name: 'Zebra',
        command: 'zebra',
        description: 'Framework CSS para crear interfaces con un diseño minimalista.'
    },
    {
        numero: 156,
        name: 'React-table',
        command: 'react-table',
        description: 'Librería para construir tablas de datos complejas en React.'
    },
    {
        numero: 157,
        name: 'React-datepicker',
        command: 'react-datepicker',
        description: 'Componente de calendario y selección de fechas para aplicaciones React.'
    },
    {
        numero: 158,
        name: 'Framer-motion',
        command: 'framer-motion',
        description: 'Librería de animaciones para React, basada en la física.'
    },
    {
        numero: 159,
        name: 'Ant-design',
        command: 'antd',
        description: 'Biblioteca de componentes UI para React, diseñada con un enfoque empresarial.'
    },
    {
        numero: 160,
        name: 'Moment',
        command: 'moment',
        description: 'Librería para el manejo de fechas y horas en JavaScript.'
    },
    {
        numero: 161,
        name: 'jsPDF',
        command: 'jspdf',
        description: 'Librería para crear archivos PDF dinámicos desde JavaScript.'
    },
    {
        numero: 162,
        name: 'Highlight.js',
        command: 'highlight.js',
        description: 'Librería para resaltar sintaxis en bloques de código.'
    },
    {
        numero: 163,
        name: 'Concurrently',
        command: 'concurrently',
        description: 'Librería para ejecutar múltiples comandos al mismo tiempo en la terminal.'
    },
    {
        numero: 164,
        name: 'Koa',
        command: 'koa',
        description: 'Framework para aplicaciones web y APIs en Node.js, minimalista y extensible.'
    },
    {
        numero: 165,
        name: 'Mochajs',
        command: 'mochajs',
        description: 'Framework de pruebas con enfoque en comportamiento para JavaScript.'
    },
    {
        numero: 166,
        name: 'React-hook-form',
        command: 'react-hook-form',
        description: 'Librería para simplificar el manejo de formularios en React.'
    },
    {
        numero: 167,
        name: 'Data-fns',
        command: 'data-fns',
        description: 'Librería de utilidad para trabajar con datos, manejo de objetos y matrices.'
    },
    {
        numero: 168,
        name: 'React-icons',
        command: 'react-icons',
        description: 'Biblioteca de iconos para aplicaciones React.'
    },
    {
        numero: 170,
        name: 'Next-redux-wrapper',
        command: 'next-redux-wrapper',
        description: 'Wrapper para usar Redux en aplicaciones Next.js.'
    },
    {
        numero: 171,
        name: 'React-redux',
        command: 'react-redux',
        description: 'Enlace entre Redux y React.'
    },
    {
        numero: 172,
        name: 'Npm-check-updates',
        command: 'npm-check-updates',
        description: 'Herramienta para actualizar las dependencias de un proyecto npm.'
    },
    {
        numero: 173,
        name: 'Babel-loader',
        command: 'babel-loader',
        description: 'Cargador Webpack para transpilar archivos JavaScript usando Babel.'
    },
    {
        numero: 174,
        name: 'Jest-environment-node',
        command: 'jest-environment-node',
        description: 'Entorno de ejecución Node.js para Jest.'
    },
    {
        numero: 175,
        name: 'Express-session',
        command: 'express-session',
        description: 'Librería para manejar sesiones en aplicaciones Express.'
    },
    {
        numero: 176,
        name: 'Request',
        command: 'request',
        description: 'Librería para realizar solicitudes HTTP.'
    },
    {
        numero: 177,
        name: 'Socket.io',
        command: 'socket.io',
        description: 'Librería para habilitar comunicaciones en tiempo real mediante WebSockets.'
    },
    {
        numero: 178,
        name: 'Chai',
        command: 'chai',
        description: 'Librería de aserciones para pruebas JavaScript.'
    },
    {
        numero: 179,
        name: 'Node-fetch',
        command: 'node-fetch',
        description: 'Librería para hacer solicitudes HTTP en Node.js.'
    },
    {
        numero: 180,
        name: 'Axios',
        command: 'axios',
        description: 'Librería popular para hacer solicitudes HTTP en JavaScript.'
    },
    {
        numero: 181,
        name: 'Lodash-es',
        command: 'lodash-es',
        description: 'Versión modularizada de Lodash para usar con imports ES6.'
    },
    {
        numero: 182,
        name: 'Express',
        command: 'express',
        description: 'Framework minimalista para Node.js que facilita la creación de aplicaciones web y APIs.'
    },
    {
        numero: 183,
        name: 'Knex.js',
        command: 'knex',
        description: 'Librería para trabajar con bases de datos SQL en Node.js.'
    },
    {
        numero: 184,
        name: 'Karma',
        command: 'karma',
        description: 'Framework de pruebas para JavaScript que facilita el trabajo con múltiples navegadores.'
    },
    {
        numero: 185,
        name: 'Vuex',
        command: 'vuex',
        description: 'Librería de gestión de estado para aplicaciones Vue.js.'
    },
    {
        numero: 186,
        name: 'Vue',
        command: 'vue',
        description: 'Framework progresivo para construir interfaces de usuario.'
    },
    {
        numero: 187,
        name: 'React',
        command: 'react',
        description: 'Biblioteca para construir interfaces de usuario interactivas.'
    },
    {
        numero: 188,
        name: 'React-dom',
        command: 'react-dom',
        description: 'Librería que permite interactuar con el DOM en aplicaciones React.'
    },
    {
        numero: 189,
        name: 'Vue-router',
        command: 'vue-router',
        description: 'Librería para manejar las rutas en aplicaciones Vue.js.'
    },
    {
        numero: 191,
        name: 'Vite',
        command: 'vite',
        description: 'Herramienta de desarrollo rápida para proyectos JavaScript, como Vue, React y otros.'
    },
    {
        numero: 192,
        name: 'Sass',
        command: 'sass',
        description: 'Preprocesador CSS que extiende las capacidades de CSS.'
    },
    {
        numero: 193,
        name: 'Babel-preset-env',
        command: 'babel-preset-env',
        description: 'Preseteo de Babel para compilar código JavaScript según el entorno de ejecución.'
    },
    {
        numero: 194,
        name: 'Webpack',
        command: 'webpack',
        description: 'Empaquetador de módulos JavaScript.'
    },
    {
        numero: 195,
        name: 'Webpack-cli',
        command: 'webpack-cli',
        description: 'Interfaz de línea de comandos para Webpack.'
    },
    {
        numero: 196,
        name: 'Webpack-dev-server',
        command: 'webpack-dev-server',
        description: 'Servidor de desarrollo para Webpack que facilita la carga dinámica de módulos.'
    },
    {
        numero: 197,
        name: 'Parcel',
        command: 'parcel',
        description: 'Empaquetador de aplicaciones web que no requiere configuración.'
    },
    {
        numero: 198,
        name: 'Rollup',
        command: 'rollup',
        description: 'Empaquetador de módulos JavaScript optimizado para la creación de bibliotecas.'
    },
    {
        numero: 199,
        name: 'Puppeteer',
        command: 'puppeteer',
        description: 'Librería para controlar un navegador Chromium mediante código.'
    },
    {
        numero: 200,
        name: 'Mocha',
        command: 'mocha',
        description: 'Framework de pruebas para JavaScript.'
    }

];
// Función para verificar si una librería ya está instalada
const isLibraryInstalled = (library) => {
    try {
        // Verificamos si la librería existe en node_modules
        const nodeModulesPath = path.join(process.cwd(), 'node_modules', library);
        return fs.existsSync(nodeModulesPath);
    } catch (error) {
        console.error(chalk.red(`❌ Error al verificar la librería "${library}": ${error.message}`));
        return false;
    }
};

// Función para instalar una librería y manejar dependencias
const installLibrary = async (library) => {
    try {
        // Verificamos si la librería ya está instalada
        if (isLibraryInstalled(library)) {
            console.log(chalk.yellow(`⚠️ La librería "${library}" ya está instalada. Desinstalando...`));
            // Desinstalamos la librería antes de volver a instalarla
            await execa('npm', ['uninstall', library], { stdio: 'inherit' });
            console.log(chalk.green(`✔️ "${library}" desinstalada correctamente.`));
        }

        // Ahora instalamos la librería
        console.log(chalk.blue(`🔧 Instalando "${library}"...`));
        await execa('npm', ['install', library], { stdio: 'inherit' });
        console.log(chalk.green(`🎉 "${library}" instalada correctamente.`));

    } catch (error) {
        console.error(chalk.red(`❌ Error al instalar la librería "${library}":`));
        console.error(chalk.red(`Ubicación: installLibrary()`));
        console.error(chalk.red(`Descripción: ${error.message}`));
        console.error(chalk.red(`Código de salida: ${error.exitCode}`));
        console.error(chalk.red(`Detalles: ${error.stderr || 'Sin detalles adicionales'}`));
    }
};

// Función para instalar las dependencias necesarias para el script
const installDependencies = async () => {
    try {
        console.log(chalk.yellow('🔍 Verificando dependencias necesarias... 🔧'));

        // Instalamos las dependencias necesarias (inquirer, chalk, execa) si no están instaladas
        await execa('npm', ['install', 'inquirer', 'chalk', 'execa'], { stdio: 'inherit' });

        console.log(chalk.green('🎉 ¡Dependencias instaladas correctamente! Todo listo para continuar. 🌟'));
    } catch (error) {
        console.error(chalk.red(`❌ Error al instalar dependencias necesarias:`));
        console.error(chalk.red(`Ubicación: installDependencies()`));
        console.error(chalk.red(`Descripción: ${error.message}`));
        console.error(chalk.red(`Código de salida: ${error.exitCode}`));
        console.error(chalk.red(`Detalles: ${error.stderr || 'Sin detalles adicionales'}`));
    }
};

// Función principal con el menú interactivo
const main = async () => {
    console.log(chalk.blue.bold('\n🌟 ¡Bienvenido al Instalador de Librerías para tu Proyecto! 🌟\n'));

    try {
        await installDependencies();

        // Solicitar al usuario que seleccione las librerías
        const { selectedLibraries } = await inquirer.prompt([
            {
                type: 'checkbox',
                name: 'selectedLibraries',
                message: '💻 ¡Selecciona las librerías que deseas instalar! ⬇️',
                choices: libraries.map((lib) => ({
                    name: `${lib.name} - ${lib.description}`,
                    value: lib.command,
                })),
            },
        ]);

        // Validar selección del usuario
        if (selectedLibraries.length === 0) {
            console.log(chalk.red('❌ No seleccionaste ninguna librería. El proceso ha sido cancelado. 😔'));
            return;
        }

        // Ejecutar la instalación de las librerías seleccionadas
        console.log(chalk.blue('\n🔨 Iniciando la instalación... ⏳'));
        for (const library of selectedLibraries) {
            await installLibrary(library);
        }

        console.log(chalk.green('\n🎉 ¡Todo listo! Las librerías fueron instaladas con éxito. ✅🎉'));
    } catch (error) {
        console.error(chalk.red(`\n❗ Ocurrió un error inesperado en el proceso principal: ${error.message} 😱`));
        console.error(chalk.red(`Ubicación: main()`));
        console.error(chalk.red(`Descripción: ${error.message}`));
        console.error(chalk.red(`Código de salida: ${error.exitCode}`));
        console.error(chalk.red(`Detalles: ${error.stderr || 'Sin detalles adicionales'}`));
    }
};

// Ejecutar la función principal
main();