import { baseConfig } from '@ci/eslint-config'

/**
 * @type {import("eslint").Linter.Config[]}
 */
export default [
  ...baseConfig,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        allowDefaultProject: true,
      },
    },
  },
]
