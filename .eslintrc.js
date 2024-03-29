module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    //'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    //'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    quotes: ['error', 'single', { avoidEscape: true }],
    'prettier/prettier': ['error'],
    //'@typescript-eslint/no-var-requires': 'off',
    //'@typescript-eslint/explicit-function-return-type': 'off',
    //'@typescript-eslint/no-explicit-any': 'off',
    //'@typescript-eslint/no-unused-vars': 'off',
    //'@typescript-eslint/consistent-type-assertions': 'off',
    //'@typescript-eslint/camelcase': 'off',
    //'@typescript-eslint/class-name-casing': 'off',
    'one-var': ['error', 'never']
  },

  settings: {},
  plugins: ['prettier']
};
