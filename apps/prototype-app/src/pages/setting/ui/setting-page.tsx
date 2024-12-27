import { useEffect } from 'react'

import type { ApiResponse } from '@ci/lib/http'
import { clientErrorHandler } from '@ci/lib/http'
import type { GetMemberMeResponseBody } from '@entities/auth'
import { TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { httpClient } from '@shared/config'

export function SettingPage() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      name: '',
    },
  })

  useEffect(() => {
    httpClient
      .get<ApiResponse<GetMemberMeResponseBody>>('/api/auth/me')
      .then((response) => {
        console.log(response)
        form.setValues({
          email: response.data.data.email,
          name: response.data.data.name,
        })
        form.resetDirty()
      })
      .catch((error) => {
        clientErrorHandler.log(error)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps -- form is not a dependency
  }, [])

  return (
    <div>
      <h1>Setting</h1>
      <form>
        <TextInput
          label="Email"
          placeholder="Email"
          key={form.key('email')}
          {...form.getInputProps('email')}
        />
        <TextInput
          label="Name"
          placeholder="Name"
          key={form.key('name')}
          {...form.getInputProps('name')}
        />
      </form>
    </div>
  )
}
