import type { ApiResponse } from '@ci/lib/http'
import { http, HttpResponse } from 'msw'

interface SignInRequestBody {
  email: string
  password: string
}
interface SignInResponseBody {
  authorizationType: string
  accessToken: string
  refreshToken: string
}

interface SignUpRequestBody {
  email: string
  name: string
  password: string
}

export const handlers = [
  // 로그인 mock handler
  http.post<never, SignInRequestBody, ApiResponse<SignInResponseBody>>('/api/auth/sign-in', async ({ request }) => {
    const { email, password } = await request.json()
    if (email === 'wernher@mercuryproject.com' && password === 'password') {
      return HttpResponse.json({
        code: 'Success',
        message: 'success',
        data: {
          authorizationType: 'Bearer',
          accessToken: 'fake-access-token',
          refreshToken: 'fake-refresh-token',
        },
      })
    } else {
      return HttpResponse.json(
        {
          code: 'Error',
          message: 'Invalid credentials',
          data: {
            authorizationType: '',
            accessToken: '',
            refreshToken: '',
          },
        },
        { status: 401 },
      )
    }
  }),

  // 회원가입 mock handler
  http.post<never, SignUpRequestBody, ApiResponse>('/api/auth/sign-up', async ({ request }) => {
    const { email, name, password } = await request.json()
    if (email && name && password) {
      return HttpResponse.json(
        {
          code: 'Success',
          message: 'Registration successful',
        },
        { status: 201 },
      )
    } else {
      return HttpResponse.json({ code: 'Error', message: 'All fields are required' }, { status: 400 })
    }
  }),
]
