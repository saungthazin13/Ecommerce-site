#  Lipsticks Shop
A simple frontend project for a lipstick store built using **React**, **TypeScript**, and **Vite**.  
This project is a practice setup with TypeScript, ESLint rules, and Vite for fast development.

##  Project Setup

> Make sure you have [Node.js](https://nodejs.org/) (v16 or later) and [npm](https://www.npmjs.com/) installed.

 1. Clone the Repository
 ```bash
git clone https://github.com/saungthazin13/Lipstickshop.git
cd Lipstickshop

2. Install Dependencies
npm install

<<<<<<< HEAD
If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```

"# Ecommerce-site"
=======
3. Start the Development Server
npm run dev
>>>>>>> 461c64ea199fe990362a4aab65d1367eb035ac32
