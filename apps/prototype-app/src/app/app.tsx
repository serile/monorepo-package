import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/carousel/styles.css'
import '@mantine/charts/styles.css'
import '@mantine/notifications/styles.css'
import { HttpClientProvider } from '@ci/lib/http'
import { createTheme, MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'
import { httpClient, queryClient } from '@shared/config'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from 'react-router'

import { router } from './router'

export function App() {
  const theme = createTheme({})

  return (
    <HttpClientProvider client={httpClient}>
      <QueryClientProvider client={queryClient}>
        <MantineProvider theme={theme}>
          <ModalsProvider>
            <RouterProvider router={router} />
            <Notifications />
            <ReactQueryDevtools initialIsOpen={false} />
          </ModalsProvider>
        </MantineProvider>
      </QueryClientProvider>
    </HttpClientProvider>
  )
}
