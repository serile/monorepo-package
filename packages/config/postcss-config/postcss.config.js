import postcssDesignTokens from '@csstools/postcss-design-tokens'
import autoprefixer from 'autoprefixer'
import postcssCalc from 'postcss-calc'
import postcssFor from 'postcss-for'
import postcssFunctions from 'postcss-functions'
import postcssImport from 'postcss-import'
import postcssMixins from 'postcss-mixins'
import postcssNested from 'postcss-nested'
import postcssPresetEnv from 'postcss-preset-env'
import postcssPresetMantine from 'postcss-preset-mantine'
import postcssRem from 'postcss-rem'
import postcssSimpleVars from 'postcss-simple-vars'

/** @type {import('postcss-load-config').Config} */
export default {
  plugins: [
    postcssPresetMantine({}),
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
