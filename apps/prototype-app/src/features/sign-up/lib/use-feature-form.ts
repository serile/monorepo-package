import { useForm, zodResolver } from '@mantine/form'

import type { FormType } from '../model/models'
import { FormSchema } from '../model/models'

type UseFeatureFormProps = {
  initialValues?: FormType
}

export function useFeatureForm({
  initialValues = { email: '', name: '', password: '', confirmPassword: '' },
}: UseFeatureFormProps) {
  const form = useForm<FormType>({
    mode: 'uncontrolled',
    initialValues,
    validate: zodResolver(FormSchema),
  })

  return form
}
