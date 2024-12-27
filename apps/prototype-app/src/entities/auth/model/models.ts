export type PostSignInRequestBody = {
  email: string
  password: string
}

export type PostSignInResponseBody = {
  authorizationType: string
  accessToken: string
  refreshToken: string
}

export type PostSignUpRequestBody = {
  email: string
  name: string
  password: string
}

export type GetMemberMeResponseBody = {
  email: string
  name: string
}
