import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/carousel/styles.css'
import '@mantine/charts/styles.css'
import '@mantine/notifications/styles.css'
import { HttpClientProvider } from '@ci/lib/http'
import { createTheme, MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'
import { httpClient } from '@shared/config'
import { RouterProvider } from 'react-router'

import { router } from './router'

export function App() {
  const theme = createTheme({})

  return (
    <HttpClientProvider client={httpClient}>
      <MantineProvider theme={theme}>
        <ModalsProvider>
          <RouterProvider router={router} />
          <Notifications />
        </ModalsProvider>
      </MantineProvider>
    </HttpClientProvider>
  )
}
