import pluginStorybook from 'eslint-plugin-storybook'

import { config as reactConfig } from './react.js'

/**
 * @type {import("eslint").Linter.Config}
 */
export const config = [
  ...reactConfig,
  ...pluginStorybook.configs['flat/recommended'],
  {
    name: 'Config ignore patterns For Storybook',
    ignores: ['!.storybook'],
  },
]
