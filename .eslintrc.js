module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "standard",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "prettier"],
  rules: {
    quotes: ["error", "double", { avoidEscape: true }],
    "react/jsx-uses-react": ["off"],
    "react/react-in-jsx-scope": ["off"],
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "no-unused-vars": "off",
  },
};
