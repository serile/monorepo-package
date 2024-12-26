const postcssDesignTokens = require('@csstools/postcss-design-tokens')
const autoprefixer = require('autoprefixer')
const postcssCalc = require('postcss-calc')
const postcssFor = require('postcss-for')
const postcssFunctions = require('postcss-functions')
const postcssImport = require('postcss-import')
const postcssMixins = require('postcss-mixins')
const postcssNested = require('postcss-nested')
const postcssPresetEnv = require('postcss-preset-env')
const postcssPresetMantine = require('postcss-preset-mantine')
const postcssRem = require('postcss-rem')
const postcssSimpleVars = require('postcss-simple-vars')

/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: [
    postcssPresetMantine(),
    postcssPresetEnv({
      stage: 1,
    }),
    postcssSimpleVars({
      variables: {
        'mantine-breakpoint-xs': '36em',
        'mantine-breakpoint-sm': '48em',
        'mantine-breakpoint-md': '62em',
        'mantine-breakpoint-lg': '75em',
        'mantine-breakpoint-xl': '88em',
      },
    }),
    postcssCalc({}),
    postcssDesignTokens({
      importAtRuleName: 'tokens',
      valueFunctionName: 'token',
      unitsAndValues: { rootFontSize: 10 },
    }),
    postcssFor(),
    postcssFunctions(),
    postcssImport(),
    postcssMixins(),
    postcssNested(),
    postcssRem({ name: 'rem', baseline: 10 }),
    autoprefixer(),
  ],
}
