/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MODE: 'local' | 'dev' | 'prod'
  readonly VITE_USE_MSW_YN: 'Y' | 'N'
}
