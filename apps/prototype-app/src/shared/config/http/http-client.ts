import { HttpClient } from '@ci/lib/http'
import { notifications } from '@mantine/notifications'

export const httpClient = new HttpClient({
  errorHandler: (error) => {
    notifications.show({
      message: error.message,
      color: 'red',
      position: 'bottom-left',
    })
  },
})
