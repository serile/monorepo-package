import { SignUpButton, useSignUpForm } from '@features/sign-up'
import { Flex, PasswordInput, TextInput } from '@mantine/core'

export function SignUpForm() {
  const form = useSignUpForm({})

  return (
    <Flex
      direction="column"
      gap={10}
      p={30}
    >
      <TextInput
        label="Email"
        placeholder="이메일을 입력해주세요."
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
      <TextInput
        label="Name"
        placeholder="이름을 입력해주세요."
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <PasswordInput
        label="Password"
        placeholder="패스워드를 입력해주세요."
        key={form.key('password')}
        {...form.getInputProps('password')}
      />
      <PasswordInput
        label="Confirm Password"
        placeholder="패스워드를 다시 입력해주세요."
        key={form.key('confirmPassword')}
        {...form.getInputProps('confirmPassword')}
      />

      <SignUpButton form={form} />
    </Flex>
  )
}
