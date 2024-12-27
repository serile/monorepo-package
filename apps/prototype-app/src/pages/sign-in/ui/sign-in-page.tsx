import type { ApiResponse } from '@ci/lib/http'
import type { PostSignInResponseBody } from '@entities/auth'
import { Button, Center, Container, Flex, PasswordInput, TextInput } from '@mantine/core'
import { useForm, zodResolver } from '@mantine/form'
import { httpClient } from '@shared/config'
import { Link, useNavigate } from 'react-router'
import { z } from 'zod'

import classes from './sign-in-page.module.css'

const schema = z.object({
  email: z.string({ required_error: '이메일을 입력해주세요.' }).email({ message: '이메일 형식이 아닙니다.' }),
  password: z
    .string({ required_error: '패스워드를 입력해주세요.' })
    .min(6, { message: '패스워드는 6자 이상이어야 합니다.' }),
})

type FormType = z.infer<typeof schema>

export function SignInPage() {
  const navigate = useNavigate()

  const form = useForm<FormType>({
    initialValues: {
      email: '',
      password: '',
    },
    validate: zodResolver(schema),
  })

  const handleSubmit = async (values: typeof form.values) => {
    console.log(values)
    const response = await httpClient.post<ApiResponse<PostSignInResponseBody>>('/api/auth/sign-in', values)
    console.log(response)
    window.localStorage.setItem('accessToken', response.data.data.accessToken)
    await navigate('/main')
  }

  return (
    <Container>
      <Center>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Flex
            className={classes.box}
            direction="column"
            align="center"
            w={400}
            gap={10}
            mt={100}
            px={60}
            pt={10}
            pb={40}
          >
            <h1>
              Welcome to
              <br />
              Prototype App!
            </h1>
            <Link to="/sign-up">Sign up</Link>
            <TextInput
              label="Email"
              placeholder="Your email"
              w="100%"
              {...form.getInputProps('email')}
            />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              w="100%"
              {...form.getInputProps('password')}
            />
            <Button
              type="submit"
              variant="filled"
              fullWidth
              mt={40}
            >
              Sign in
            </Button>
          </Flex>
        </form>
      </Center>
    </Container>
  )
}
