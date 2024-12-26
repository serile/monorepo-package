import { fixupPluginRules } from '@eslint/compat'
import eslint from '@eslint/js'
import markdown from '@eslint/markdown'
import pluginEslintComment from 'eslint-plugin-eslint-comments'
import pluginImport from 'eslint-plugin-import'
import pluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import pluginTurbo from 'eslint-plugin-turbo'
import pluginUnusedImports from 'eslint-plugin-unused-imports'
import globals from 'globals'

/**
 * @type {import("eslint").Linter.Config}
 */
export const config = [
  eslint.configs.recommended,
  {
    name: 'Config eslint',
    rules: {
      'sort-imports': 'off',
      'no-unused-vars': 'off',
      'no-empty-pattern': 'off',
    },
  },
  {
    name: 'Config prettier',
    ...pluginPrettierRecommended,
  },
  {
    name: 'Config languageOptions',
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
  },
  {
    name: 'Config import plugin',
    ...pluginImport.flatConfigs.recommended,
    rules: {
      'import/no-named-as-default': 'off',
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', ['sibling', 'parent', 'index'], 'unknown'],
          pathGroups: [
            { pattern: 'react', group: 'builtin', position: 'before' },
            { pattern: 'react-dom', group: 'builtin', position: 'before' },
            { pattern: '@ci', group: 'external', position: 'after' },
            { pattern: '@pages', group: 'internal', position: 'before' },
            { pattern: '@widgets', group: 'internal', position: 'before' },
            { pattern: '@features', group: 'internal', position: 'before' },
            { pattern: '@entities', group: 'internal', position: 'before' },
            { pattern: '@shared', group: 'internal', position: 'before' },
          ],
          pathGroupsExcludedImportTypes: ['react', 'react-dom'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
  {
    name: 'Config unused import plugin',
    plugins: {
      'unused-imports': pluginUnusedImports,
    },
    rules: {
      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    name: 'Config eslint comment plugin',
    plugins: {
      'eslint-comments': fixupPluginRules(pluginEslintComment),
    },
    rules: {
      'eslint-comments/require-description': 'error',
    },
  },
  {
    name: 'Config turbo plugin',
    plugins: {
      turbo: pluginTurbo,
    },
    rules: {
      'turbo/no-undeclared-env-vars': [
        'warn',
        {
          allowList: ['VITE_*'],
        },
      ],
    },
  },
  {
    name: 'Config markdown',
    files: ['**/*.md'],
    plugins: {
      markdown,
    },
    processor: 'markdown/markdown',
  },
  {
    name: 'Config ignore patterns',
    ignores: ['node_modules/**', 'dist/**', '.*/**', '*.config.*', '*.yaml', 'scripts/**'],
  },
]
