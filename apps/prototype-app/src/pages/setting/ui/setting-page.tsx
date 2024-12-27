import { useEffect } from 'react'

import { useMemberQuery } from '@entities/auth'
import { TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'

export function SettingPage() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      name: '',
    },
  })

  const { useReadItem } = useMemberQuery()
  const { data } = useReadItem()

  useEffect(() => {
    if (data) {
      form.setValues({
        email: data.data.email,
        name: data.data.name,
      })
      form.resetDirty()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- form is not a dependency
  }, [data])

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
