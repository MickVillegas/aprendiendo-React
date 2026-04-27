# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# React tutorial

## instalar y crear nuevo proyecto

Comando: ```npm create vite@latest .``` yo estoy usando el lenguaje JavaScript base
Instala dependencias ```npm install``` y arranca el servidor desarrollo ```npm run dev```

Te creará la url ```Local: http://localhost:5173/```

## Desarrollo de la web

Normalmente trabajaras en src > App.jsx

Para Trabajar sin los estilos por defecto puedes borrar index.css y App-css o simplemente cambiarles de nombre, ejemplo ponerles un guion en vez de un punto

En main.jsx borra la linea import './index.css' o comenta la linea com ```//import './index.css'```