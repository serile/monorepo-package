import { httpClient } from '@shared/config'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import type { PostSignUpRequestBody } from '../model/models'

export function useSignUpQuery() {
  const queryClient = useQueryClient()

  const useCreateItem = () => {
    return useMutation({
      mutationFn: async (params: PostSignUpRequestBody) => {
        const response = await httpClient.post('/api/auth/sign-up', params)
        return response
      },
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [''],
        })
      },
    })
  }

  return { useCreateItem }
}
