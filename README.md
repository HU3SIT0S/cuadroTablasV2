<a name="readme-top"></a>

<div align="center">

<img src="logo.png" alt="logo" width="140" height="auto" style="border-radius:50%" />
<br/>
<h3><b>WEBPACK AZURE PROJECT</b></h3>

</div>

# ✅ TABLE OF CONTENTS
- [✅ TABLE OF CONTENTS](#-table-of-contents)
- [📖 \[WEBPACK AZURE PROJECT\]](#-webpack-azure-project)
  - [⚒️ Build With ](#️-build-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Project Commands](#project-commands)

# 📖 [WEBPACK AZURE PROJECT]<a name="about-project"></a>

*[Webpack Azure Project]* This project is part of the SENA Software Development Analysis curriculum, focused on deploying a web application using Webpack and Azure.

## ⚒️ Build With <a name="built-with"></a>

<p>
This project was built using:
HTML, CSS, JavaScript, Webpack, Linters, GitHub, and Azure.
</p>

### Tech Stack <a name="tech-stack"></a>

<li> HTML </li>
<li> CSS </li>
<li> JavaScript </li>
<li> Webpack </li>
<li> Linters (ESLint, Stylelint, Webhint) </li>
<li> GitHub </li>
<li> Azure </li>

<details>
<summary> Client </summary>
    <ul>
    <li><a href="https://developer.mozilla.org/es/docs/Web/HTML">HTML</a></li>
    <li><a href="https://developer.mozilla.org/es/docs/Web/CSS">CSS</a></li>
    <li><a href="https://developer.mozilla.org/es/docs/Web/JavaScript">JavaScript</a></li>
    </ul>
</details>

<details>
<summary>Tools</summary>
<ul>
<li><a href="https://webpack.js.org/">Webpack</a></li>
<li><a href="https://eslint.org/">ESLint</a></li>
<li><a href="https://stylelint.io/">Stylelint</a></li>
<li><a href="https://webhint.io/">Webhint</a></li>
</ul>
</details>

### Key Features <a name="key-features"></a>

- **Linting**: Automated code quality checks using ESLint, Stylelint, and Webhint.
- **Webpack**: Bundling and optimization of assets.
- **Azure Deployment**: Continuous deployment to Azure using GitHub Actions.

<p align="right"><a href="#readme-top">Back to top</a></p>

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps:

### Prerequisites

To run this project, you need the following tools:

- [VS Code](https://code.visualstudio.com/)
- [Git and GitHub](https://github.com/)
- [Node.js](https://nodejs.org/)
- [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/)

### Setup

Clone this repository to your desired folder:

sh
cd WEBPACK-AZURE
git clone https://github.com/HU3SIT0S/cuadroTablasV2.git

command: 
```
npm install
```
*Description: Download and install all dependencies listed in dependencies and devDependencies.**

command:
npm start


Description: this script starts a development server


### Project Commands

Below are the commands used in the project, from initial setup to deployment on Azure:

***Project Initialization***

Command:
```
 npm init -y
```
Description: Creates a package.json file with default values.


***Linters Installation***

Hint: 
```
npm install --save-dev hint@7.x
```
Stylelint:
``` 
npm install --save-dev stylelint@13.x 
stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x
```
ESLint:
``` 
npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x
```
Description: Installs linters for HTML, CSS, and JavaScript.


***Running Linters***

Hint: 
```
npx hint .
```
Stylelint: 
```
npx stylelint "**/*.css"
```
ESLint:
``` 
npx eslint .
```
Description: Runs linters to analyze the code.

***Automatic Error Fixing***

Stylelint:
``` 
npx stylelint "**/*.css" --fix
```
ESLint: 
```
npx eslint . --fix
```
Description: Automatically fixes detected errors.


***Webpack Installation***

Command: 
```
npm install webpack webpack-cli --save-dev
```
Description: Installs Webpack and its CLI.


***Webpack Loaders and Plugins Configuration***

CSS Loader: 
```
npm install --save-dev style-loader css-loader
```
HTML Loader: 
```
npm install --save-dev html-loader
```
HTML Webpack Plugin: 
```
npm install --save-dev html-webpack-plugin
```
Webpack Dev Server: 
```
npm install --save-dev webpack-dev-server
```
Description: 
Installs necessary loaders and plugins.

***Babel Configuration***

Command: 
```
npm install 
--save-dev babel-loader @babel/core @babel/preset-env
```
Description: Installs Babel to transpile JavaScript code.


***Project Bundling***

Development Mode: 
```
npm run build-dev
```
Production Mode: 
```
npm run build-prod
```
Description: Bundles the project using Webpack.

***Starting the Development Server***

Command:
``` 
npm start
```
Description: Starts the Webpack development server.


***Express Installation***

Command: 
```
npm install express
```
Description: Installs Express.js for creating a web server.


***Production Server Configuration***

Command: 
```
node server.js
```
Description: Starts the production server.

***Deployment to Azure***

GitHub Actions Configuration: See azure-deploy.yml file.


***Pushing Changes to GitHub:***

sh
Copy
```
git add .
```
```
git commit -m "Commit message"
```
```
git push origin main
```
Description: Configures automatic deployment to Azure.

<p align="right"><a href="#readme-top">Back to top</a></p>
👥 Authors <a name="authors"></a>


🧑🏻‍💻 Jhon Montoya

GitHub: @HU3SIT0S

<p align="right"><a href="#readme-top">Back to top</a></p> 