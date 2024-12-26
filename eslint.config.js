import { baseConfig } from '@ci/eslint-config';

/**
 * @type {import("eslint").Linter.Config}
 */
export default [
  ...baseConfig,
  {
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      parserOptions: {
        allowDefaultProject: true,
      },
    },
  },
];
