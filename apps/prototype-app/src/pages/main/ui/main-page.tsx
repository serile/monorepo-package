import { useEffect, useState } from 'react'

import type { ApiResponse } from '@ci/lib/http'
import { clientErrorHandler } from '@ci/lib/http'
import type { GetMemberMeResponseBody } from '@entities/auth'
import { httpClient } from '@shared/config'

export function MainPage() {
  const [user, setUser] = useState<GetMemberMeResponseBody>()

  useEffect(() => {
    httpClient
      .get<ApiResponse<GetMemberMeResponseBody>>('/api/auth/me')
      .then((response) => {
        setUser(response.data.data)
      })
      .catch((error) => {
        clientErrorHandler.log(error)
      })
  }, [])

  return (
    <div>
      <h1>Main</h1>
      <p>Main to the Prototype app</p>
      {user ? (
        <>
          <p>{user?.name}</p>
          <p>{user?.email}</p>
        </>
      ) : null}
    </div>
  )
}
