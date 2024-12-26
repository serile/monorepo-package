declare module '@ci/postcss-config' {
  import { AcceptedPlugin } from 'postcss'

  const config: {
    plugins: AcceptedPlugin[]
  }

  export default config
}
