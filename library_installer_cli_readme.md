# CLI del instalador de biblioteca

**Library Installer**es una herramienta de línea de comandos (CLI) diseñada para optimizar la instalación de múltiples bibliotecas npm en un proyecto Node.js. Con esta herramienta, puede seleccionar fácilmente las bibliotecas que desea instalar a través de una interfaz de usuario en la terminal, lo que le ahorra el tiempo y el esfuerzo de escribir largos comandos de instalación para cada biblioteca individual.

Esta herramienta es ideal para desarrolladores que buscan mejorar la eficiencia y la automatización en el proceso de configuración de su proyecto.
## Características clave

-**Interfaz de usuario interactiva**: navegue a través de una lista de bibliotecas disponibles usando las teclas de flecha, seleccione o deseleccione bibliotecas con facilidad y confirme su selección con un simple "Intro".
-**Instalación de biblioteca local y global**: instale bibliotecas localmente dentro de su proyecto o globalmente en su máquina para usarlas en múltiples proyectos.
-**Selección avanzada**: proporciona atajos de teclado para seleccionar o anular la selección de todas las bibliotecas, invertir la selección y más.
-**Automatización de instalación**: realice instalaciones rápidas sin tener que recordar el nombre de cada biblioteca ni escribir comandos largos.
-**Compatibilidad con npm y Node.js**: funciona perfectamente con los administradores de paquetes más populares del ecosistema JavaScript.

## Instalación

### Instalar localmente

Para utilizar **Library Installer**solo dentro de un proyecto específico, debes instalarlo como una dependencia del proyecto.

#### Pasos para la instalación local:
1. **Abra su terminal**y navegue hasta el directorio de su proyecto Node.js:
   ```golpecito
   cd <directorio-de-su-proyecto>
   ```

   Asegúrese de que su proyecto sea un proyecto Node.js (debe contener un archivo `package.json`). Si no tiene este archivo, ejecute el siguiente comando para crear uno:
   ```golpecito
   inicio npm
   ```

2. **Instale el paquete `library-installer` localmente**:
   ```golpecito
   npm install instalador de biblioteca
   ```
Esto agregará el paquete `library-installer` a su `package.json` en la sección de dependencias.

3. **Ejecute la herramienta usando npx**:
   Si ha instalado `library-installer` localmente, puede ejecutarlo usando el siguiente comando:
   ```golpecito
   instalador de biblioteca npx
   ```

   **npx**le permite ejecutar paquetes npm sin instalarlos globalmente.

### Instalar globalmente
Si prefiere tener **Library Installer**disponible en todos sus proyectos sin necesidad de instalarlo cada vez, puede instalarlo globalmente.

#### Pasos para la instalación global:

1. **Instale el paquete globalmente**:
   ```golpecito
   npm install -g instalador de biblioteca
   ```

   Esto instala el paquete globalmente, permitiéndole usarlo en cualquier proyecto o directorio.

2. **Ejecute la herramienta desde cualquier lugar**:
   Una vez instalado globalmente, simplemente puede ejecutar:
   ```golpecito
   instalador de biblioteca
   ```
Esto le permitirá acceder a la herramienta independientemente de su directorio de trabajo, lo que facilitará su uso en cualquier proyecto Node.js.

## Uso

### Interfaz de instalación interactiva

Una vez que ejecute el comando `library-installer`, la herramienta mostrará una interfaz interactiva en la terminal para seleccionar las bibliotecas que desea instalar.

#### Comandos clave para interactuar con la interfaz:

-**Teclas de flecha arriba/abajo**: navega por la lista de bibliotecas disponibles.
-**Barra espaciadora**: selecciona o anula la selección de una biblioteca.
-**A**: selecciona todas las bibliotecas de la lista a la vez.
-**I**: Invertir la selección (seleccionar bibliotecas no seleccionadas y deseleccionar las seleccionadas).
-**Enter**: Comienza la instalación de las bibliotecas seleccionadas.

#### Ejemplo de interfaz:

```texto sin formato
💻 ¡Selecciona las librerías que deseas instalar! ⬇️
(Presione <espacio> para seleccionar, <a> para alternar todo, <i> para invertir la selección y <enter> para continuar)
◯ React-scripts -Herramienta de configuración predeterminada para aplicaciones React creadas con Create React App.
❯◯ Font-awesome -Biblioteca de iconos escalables en formato vectorial.
◯ Lottie-web -Librería para la animación de gráficos vectoriales utilizando JSON.
◯ Vue -Framework progresivo para construir interfaces de usuario.
◯ Jest -Framework de pruebas para JavaScript.
◯ Mocha -Framework de pruebas para Node.js que soporta pruebas asíncronas.
◯ Chai -Librería de aserciones que facilita la escritura de pruebas unitarias.
```

### Proceso de instalación

1. **Seleccione las bibliotecas**que desea instalar usando las teclas de flecha y la barra espaciadora.
2. **Presione Enter**para comenzar la instalación de las bibliotecas seleccionadas. Si no se selecciona ninguna biblioteca, el proceso será cancelado.

La herramienta comenzará a instalar las bibliotecas seleccionadas y mostrará el progreso en la terminal.

## Ejemplo de uso

### Ejemplo 1: instalación de la biblioteca local
1. Abra su terminal y navegue hasta el directorio de su proyecto:
   ```golpecito
   cd /ruta/a/su/proyecto
   ```

2. Instale el instalador de la biblioteca:
   ```golpecito
   npm install instalador de biblioteca
   ```

3. Ejecute la herramienta:
   ```golpecito
   instalador de biblioteca npx
   ```

   Aparecerá la interfaz interactiva y podrás seleccionar **React-scripts**y **Font-awesome**para instalarlos.

### Ejemplo 2: Instalación de biblioteca global

1. Instale **Library Installer**globalmente:
   ```golpecito
npm install -g instalador de biblioteca
   ```

2. Ejecute la herramienta desde cualquier directorio:
   ```golpecito
   instalador de biblioteca
   ```

   Seleccione las bibliotecas que necesita y presione **Entrar**.

## Opciones avanzadas

-**Instalar bibliotecas específicas**: puede especificar directamente las bibliotecas para instalar desde la línea de comandos sin utilizar la interfaz interactiva. Si bien esta no es la característica principal de la herramienta, es útil si ya sabes lo que necesitas:
  ```golpecito
  instalador de biblioteca --instalar reaccionar reaccionar-dom vue
```

-**Instalación silenciosa**: si prefieres no interactuar con la interfaz y quieres que la instalación se realice de forma silenciosa, puedes usar la opción `--quiet`:
  ```golpecito
  instalador de biblioteca --quiet
  ```

-**Listar todas las bibliotecas disponibles**: para obtener una lista de todas las bibliotecas disponibles para la instalación, puede usar la opción `--list`:
  ```golpecito
  instalador de biblioteca --lista
  ```

## Proceso de ejemplo completo
Supongamos que tiene un proyecto Node.js y desea instalar varias bibliotecas. Los pasos serían:

1. Navegue hasta el directorio de su proyecto:
   ```golpecito
   cd /ruta/a/su/proyecto
   ```

2. Instale el instalador:
   ```golpecito
   npm install instalador de biblioteca
   ```

3. Ejecute el instalador:
   ```golpecito
   instalador de biblioteca npx
   ```

4. En la interfaz interactiva, seleccione **React-scripts**, **Vue**y **Font-awesome**usando la barra espaciadora. Luego presione **Entrar**para iniciar la instalación.
La herramienta instalará las bibliotecas seleccionadas y actualizará automáticamente su archivo `package.json`.

## Contribuyendo

Este proyecto está abierto a contribuciones. Si tiene mejoras, correcciones de errores o sugerencias, no dude en contribuir.

### Pasos para contribuir:

1. Bifurque el repositorio.
2. Cree una nueva rama para su función:
   ```golpecito
   git checkout -b característica/nueva característica
   ```

3. Realice sus cambios y confirme:
   ```golpecito
   git commit -am 'Agregar nueva característica'
   ```

4. Impulsa tus cambios:
```golpecito
   característica de origen de git push/nueva característica
   ```

5. Abra una **solicitud de extracción**para que los mantenedores revisen sus cambios.

## Licencia

Este proyecto está bajo la licencia ISC. Para obtener más detalles, consulte el archivo [LICENCIA](LICENCIA).