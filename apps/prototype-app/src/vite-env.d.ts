/// <reference types="vite/client" />
import type { ApiClientError } from '@ci/lib/http'

interface ImportMetaEnv {
  readonly VITE_MODE: 'local' | 'dev' | 'prod'
  readonly VITE_USE_MSW_YN: 'Y' | 'N'
}

declare module '@tanstack/react-query' {
  interface Register {
    defaultError: ApiClientError
  }
}
