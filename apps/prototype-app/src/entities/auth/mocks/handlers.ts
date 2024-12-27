import type { ApiResponse } from '@ci/lib/http'
import { http, HttpResponse } from 'msw'

import type {
  PostSignInRequestBody,
  PostSignInResponseBody,
  PostSignUpRequestBody,
  GetMemberMeResponseBody,
} from '../model/models'

export const handlers = [
  // 로그인
  http.post<never, PostSignInRequestBody, ApiResponse<PostSignInResponseBody>>(
    '/api/auth/sign-in',
    async ({ request }) => {
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
    },
  ),

  // 회원가입
  http.post<never, PostSignUpRequestBody, ApiResponse>('/api/auth/sign-up', async ({ request }) => {
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

  // 회원정보
  http.get<never, never, ApiResponse<GetMemberMeResponseBody>>('/api/auth/me', () => {
    const token = window.localStorage.getItem('accessToken')

    if (!token) {
      return HttpResponse.json(
        {
          code: 'Error',
          message: 'Unauthorized',
          data: {
            email: '',
            name: '',
          },
        },
        { status: 401 },
      )
    }

    return HttpResponse.json({
      code: 'Success',
      message: 'success',
      data: {
        email: 'wernher@mercuryproject.com',
        name: 'Wernher',
      },
    })
  }),
]
