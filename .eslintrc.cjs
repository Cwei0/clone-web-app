module.exports = {
  env : { browser : true, es2020 : true },
  extends : [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser : '@typescript-eslint/parser',
  parserOptions : { ecmaVersion : 'latest', sourceType : 'module' },
  plugins : [ 'react-refresh' ],
  rules : {
    'react-refresh/only-export-components' : 'warn',
    "array-bracket-spacing" : [ "error", "always" ],
    "arrow-spacing" : [ "warn", { "before" : true, "after" : true } ],
    "comma-spacing" : [ "warn", { "before" : false, "after" : true } ],
    "key-spacing" : [ "warn", { "beforeColon" : true, "afterColon" : true } ]
  },
}
