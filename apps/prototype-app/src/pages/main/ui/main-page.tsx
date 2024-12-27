import { useEffect, useState } from 'react'

import { useMemberQuery, type GetMemberMeResponseBody } from '@entities/auth'

export function MainPage() {
  const [user, setUser] = useState<GetMemberMeResponseBody>()

  const { useReadItem } = useMemberQuery()
  const { data } = useReadItem()

  useEffect(() => {
    if (data) {
      setUser({
        email: data.data.email,
        name: data.data.name,
      })
    }
  }, [data])

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
