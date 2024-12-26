import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'

import { App } from './app'

async function enableMocking() {
  if (import.meta.env.VITE_USE_MSW_YN !== 'Y') {
    return
  }

  const { worker } = await import('@shared/config')

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start()
}

enableMocking()
  .then(() => {
    createRoot(document.getElementById('root')!).render(
      <StrictMode>
        <App />
      </StrictMode>,
    )
  })
  .catch(() => {
    console.error('Failed to enable mocking')
  })
