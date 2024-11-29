
# Library Installer CLI

**Library Installer** is a command-line tool (CLI) designed to streamline the installation of multiple npm libraries in a Node.js project. With this tool, you can easily select the libraries you want to install through a user interface in the terminal, saving you the time and effort of writing long installation commands for each individual library.

This tool is ideal for developers looking to improve efficiency and automation in their project setup process.

## Key Features

- **Interactive user interface**: Navigate through a list of available libraries using the arrow keys, select or deselect libraries with ease, and confirm your selection with a simple `Enter`.
- **Local and global library installation**: Install libraries either locally within your project or globally on your machine for use across multiple projects.
- **Advanced selection**: Provides keyboard shortcuts to select or deselect all libraries, invert the selection, and more.
- **Installation automation**: Perform quick installations without having to remember the name of each library or type long commands.
- **npm and Node.js compatibility**: Works seamlessly with the most popular package managers in the JavaScript ecosystem.

## Installation

### Install Locally

To use **Library Installer** only within a specific project, you should install it as a project dependency.

#### Steps for local installation:

1. **Open your terminal** and navigate to your Node.js project directory:
   ```bash
   cd <your-project-directory>
   ```

   Make sure your project is a Node.js project (it should contain a `package.json` file). If you don't have this file, run the following command to create one:
   ```bash
   npm init
   ```

2. **Install the `library-installer` package locally**:
   ```bash
   npm install library-installer
   ```

   This will add the `library-installer` package to your `package.json` under the dependencies section.

3. **Run the tool using npx**:
   If you have installed `library-installer` locally, you can run it using the following command:
   ```bash
   npx library-installer
   ```

   **npx** allows you to run npm packages without installing them globally.

### Install Globally

If you prefer to have **Library Installer** available across all your projects without needing to install it every time, you can install it globally.

#### Steps for global installation:

1. **Install the package globally**:
   ```bash
   npm install -g library-installer
   ```

   This installs the package globally, allowing you to use it in any project or directory.

2. **Run the tool from anywhere**:
   Once installed globally, you can simply run:
   ```bash
   library-installer
   ```

   This will allow you to access the tool regardless of your working directory, making it easy to use in any Node.js project.

## Usage

### Interactive Installation Interface

Once you run the command `library-installer`, the tool will display an interactive interface in the terminal to select the libraries you want to install.

#### Key commands to interact with the interface:

- **Up/Down Arrow keys**: Navigate through the list of available libraries.
- **Spacebar**: Select or deselect a library.
- **A**: Select all libraries in the list at once.
- **I**: Invert the selection (select unselected libraries and deselect selected ones).
- **Enter**: Begin the installation of the selected libraries.

#### Example Interface:

```plaintext
💻 ¡Selecciona las librerías que deseas instalar! ⬇️
(Press <space> to select, <a> to toggle all, <i> to invert selection, and <enter> to proceed)

◯ React-scripts - Herramienta de configuración predeterminada para aplicaciones React creadas con Create React App.
❯◯ Font-awesome - Biblioteca de iconos escalables en formato vectorial.
◯ Lottie-web - Librería para la animación de gráficos vectoriales utilizando JSON.
◯ Vue - Framework progresivo para construir interfaces de usuario.
◯ Jest - Framework de pruebas para JavaScript.
◯ Mocha - Framework de pruebas para Node.js que soporta pruebas asíncronas.
◯ Chai - Librería de aserciones que facilita la escritura de pruebas unitarias.
```

### Installation Process

1. **Select the libraries** you want to install using the arrow keys and the spacebar.
2. **Press Enter** to begin the installation of the selected libraries. If no libraries are selected, the process will be canceled.

The tool will start installing the selected libraries and will show the progress in the terminal.

## Example Usage

### Example 1: Local Library Installation

1. Open your terminal and navigate to your project directory:
   ```bash
   cd /path/to/your/project
   ```

2. Install the library installer:
   ```bash
   npm install library-installer
   ```

3. Run the tool:
   ```bash
   npx library-installer
   ```

   The interactive interface will appear, and you can select **React-scripts** and **Font-awesome** to install them.

### Example 2: Global Library Installation

1. Install **Library Installer** globally:
   ```bash
   npm install -g library-installer
   ```

2. Run the tool from any directory:
   ```bash
   library-installer
   ```

   Select the libraries you need, and press **Enter**.

## Advanced Options

- **Install specific libraries**: You can directly specify the libraries to install from the command line without using the interactive interface. While this is not the main feature of the tool, it's useful if you already know what you need:
  ```bash
  library-installer --install react react-dom vue
  ```

- **Silent Installation**: If you prefer not to interact with the interface and want the installation to happen silently, you can use the `--quiet` option:
  ```bash
  library-installer --quiet
  ```

- **List all available libraries**: To get a list of all the libraries available for installation, you can use the `--list` option:
  ```bash
  library-installer --list
  ```

## Full Example Process

Let's assume you have a Node.js project and you want to install multiple libraries. The steps would be:

1. Navigate to your project directory:
   ```bash
   cd /path/to/your/project
   ```

2. Install the installer:
   ```bash
   npm install library-installer
   ```

3. Run the installer:
   ```bash
   npx library-installer
   ```

4. In the interactive interface, select **React-scripts**, **Vue**, and **Font-awesome** using the spacebar. Then press **Enter** to start the installation.

The tool will install the selected libraries and automatically update your `package.json` file.

## Contributing

This project is open to contributions. If you have improvements, bug fixes, or suggestions, feel free to contribute.

### Steps to Contribute:

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature/new-feature
   ```

3. Make your changes and commit:
   ```bash
   git commit -am 'Add new feature'
   ```

4. Push your changes:
   ```bash
   git push origin feature/new-feature
   ```

5. Open a **pull request** for maintainers to review your changes.

## License

This project is licensed under the ISC License. For more details, please refer to the [LICENSE](LICENSE) file.
