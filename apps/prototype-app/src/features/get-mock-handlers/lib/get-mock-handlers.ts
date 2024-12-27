import { authMockHandlers } from '@entities/auth'
import type { HttpHandler } from 'msw'

export function getMockHandlers(): HttpHandler[] {
  return [...authMockHandlers]
}
