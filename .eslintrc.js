// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2020,
    extraFileExtensions: [".vue"],
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
  ],
  // // required to lint *.vue files
  // plugins: [
  //   // 'html'
  //   "vue"
  // ],
  // add your custom rules here
  rules: {
    // allow paren-less arrow functions
    "arrow-parens": 0,
    // allow async-await
    "generator-star-spacing": 0,
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    eqeqeq: "off",
  },
};
