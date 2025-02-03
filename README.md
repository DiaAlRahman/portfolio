# Dia's Portfolio

This repository hosts the source code for [Dia's Portfolio](https://diaalrahman.github.io/portfolio/), a personal website built with React and Vite. The site showcases projects, skills, and professional experience with a modern, responsive design styled using Tailwind CSS.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
- [License](#license)

## Overview

This project was bootstrapped with Vite and offers a minimal yet powerful setup for a React application. It includes Hot Module Replacement (HMR) for a smooth development experience and ESLint for maintaining code quality. Tailwind CSS is used to deliver a fast, utility-first approach to styling, making the site easily customizable.

## Features

- **Fast Development**: Leverages Vite for rapid bundling and Hot Module Replacement.
- **React-Powered**: Built using React for a component-based and maintainable codebase.
- **Tailwind CSS Styling**: Uses Tailwind CSS for quick, responsive, and modern design.
- **ESLint Integration**: Helps maintain code consistency and quality.
- **Optimized Build**: Provides production-ready builds optimized for performance.
- **GitHub Pages Deployment**: Deployed via GitHub Pages at [diaalrahman.github.io/portfolio](https://diaalrahman.github.io/portfolio/).

## Technologies

- **React** – A JavaScript library for building user interfaces.
- **Vite** – A build tool that provides a fast development environment.
- **Tailwind CSS** – A utility-first CSS framework for rapid UI development.
- **ESLint** – A tool for identifying and reporting on patterns in JavaScript.
- **PostCSS** – A tool for transforming CSS with JavaScript.
- **GitHub Pages** – Hosting platform for the live site.

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (which includes npm)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/DiaAlRahman/portfolio.git
   cd portfolio
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

### Running the Development Server

Start the app in development mode with hot reloading:

```bash
npm run dev
```

Then, open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

To generate an optimized production build, run:

```bash
npm run build
```

You can preview the production build locally using:

```bash
npm run preview
```

## Folder Structure

- **public/**: Contains static files and the main HTML file.
- **src/**: Contains React components, assets, and other source code.
- **.github/**: Holds GitHub workflows for CI/CD.
- **index.html**: The entry point of the application.
- **package.json**: Lists dependencies and project scripts.
- **tailwind.config.js & postcss.config.js**: Configuration for Tailwind CSS and PostCSS.
- **vite.config.js**: Configuration file for Vite.
- **eslint.config.js**: ESLint configuration to enforce code quality.

## Available Scripts

In the project directory, you can run:

- **npm run dev**: Runs the app in development mode with Hot Module Replacement.
- **npm run build**: Builds the app for production.
- **npm run preview**: Serves the production build locally for testing.

## License

This project is licensed under the [MIT License](LICENSE).
