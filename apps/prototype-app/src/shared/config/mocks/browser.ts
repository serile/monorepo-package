import type { HttpHandler } from 'msw'
import { setupWorker } from 'msw/browser'

export function getWorker(handlers: HttpHandler[]) {
  return setupWorker(...handlers)
}
