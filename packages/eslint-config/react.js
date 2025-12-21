import globals from "globals";
import pluginReact from "eslint-plugin-react";

export default [
  {
    languageOptions: { globals: globals.browser },
  },
  pluginReact.configs.recommended,
  {
    ignores: ["node_modules/**/*", "dist/**/*"],
  },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
    },
  },
];
