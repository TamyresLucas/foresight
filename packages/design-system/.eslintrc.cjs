module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:storybook/recommended"],
  overrides: [
    {
      files: ["**/*.test.tsx"],
      rules: {
        "no-unused-vars": "off",
      },
    },
    {
      files: ["**/*.stories.tsx"],
      rules: {
        "storybook/no-renderer-packages": "off",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-unused-vars": "warn",
    "no-console": "off",
    "no-undef": "off",
  },
  ignorePatterns: ["dist/", "node_modules/"],
};
