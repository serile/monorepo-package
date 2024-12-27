import type { ApiResponse } from '@ci/lib/http'
import { httpClient } from '@shared/config'
import { useQuery } from '@tanstack/react-query'

import type { GetMemberMeResponseBody } from '../model/models'

export function useMemberQuery() {
  const useReadItem = () => {
    return useQuery({
      queryKey: ['auth', 'me', 'item'],
      queryFn: async () => {
        const response = await httpClient.get<ApiResponse<GetMemberMeResponseBody>>('/api/auth/me')
        return response.data
      },
    })
  }

  return { useReadItem }
}
