import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      sourceType: "module",
      globals: {
        mocha: true,
      },
    },
    plugins: { js },
    extends: ["airbnb-base", "js/recommended"],
  },
]);
