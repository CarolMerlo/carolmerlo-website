import globals from "globals";

export default [
  {
    files: ["assets/js/**/*.js"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "script",
      globals: {
        ...globals.browser
      }
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error"
    }
  }
];
