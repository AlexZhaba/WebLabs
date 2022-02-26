module.exports = {
  parser: "@babel/eslint-parser",
  extends: "airbnb",
  rules: {
    quotes: ["error", "double"],
  },
  parserOptions: {
    ecmaVersion: 8,
    requireConfigFile: false,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      impliedStrict: true,
      classes: true,
    },
  },
};
