module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: [ "react-refresh" ],
  rules: {
    "react-refresh/only-export-components": "warn",
    "arrow-spacing": [ "warn", { "before": true, "after": true } ],
    "comma-spacing": [ "warn", { "before": false, "after": true } ],
    "key-spacing": [ "warn", { "afterColon": true } ],
    "quotes": ["warn", "double"]
  },
}
