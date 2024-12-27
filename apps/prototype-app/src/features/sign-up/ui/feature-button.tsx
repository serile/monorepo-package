import { useSignUpQuery } from '@entities/auth'
import { Button } from '@mantine/core'
import type { UseFormReturnType } from '@mantine/form'
import { useNavigate } from 'react-router'

import type { FormType } from '../model/models'

type FeatureButtonProps = {
  form: UseFormReturnType<FormType>
  redirectPath?: string
}

export function FeatureButton({ form, redirectPath }: FeatureButtonProps) {
  const navigate = useNavigate()
  const { useCreateItem } = useSignUpQuery()
  const mutation = useCreateItem()

  const handleSubmit = () => {
    const validate = form.validate()
    if (validate.hasErrors) {
      return
    }
    const submittedValues = form.getValues()
    mutation.mutate(submittedValues, {
      onSuccess: () => {
        alert('회원가입이 성공했습니다.')
        if (redirectPath) {
          void navigate(redirectPath)
        }
      },
    })
  }

  return <Button onClick={handleSubmit}>Sign up</Button>
}
