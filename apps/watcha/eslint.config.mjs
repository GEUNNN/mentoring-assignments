import globals from "globals";
import baseConfig from "@repo/eslint-config/base";
import reactConfig from "@repo/eslint-config/react";

export default [
  ...baseConfig,
  ...reactConfig,
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  },
  // Node.js environment for config files
  {
    files: ["webpack.*.js", "*.config.js", "*.config.mjs"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.commonjs,
      },
    },
  },
];
