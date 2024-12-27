import { z } from 'zod'

export const FormSchema = z
  .object({
    email: z.string({ required_error: '이메일을 입력해주세요.' }).email({ message: '이메일 형식이 아닙니다.' }),
    name: z.string({ required_error: '이름을 입력해주세요.' }).min(2, { message: '이름은 2자 이상이어야 합니다.' }),
    password: z
      .string({ required_error: '패스워드를 입력해주세요.' })
      .min(6, { message: '패스워드는 6자 이상이어야 합니다.' }),
    confirmPassword: z
      .string({ required_error: '패스워드를 다시 입력해주세요.' })
      .min(6, { message: '패스워드는 6자 이상이어야 합니다.' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '패스워드가 일치하지 않습니다.',
    path: ['confirmPassword'],
  })

export type FormType = z.infer<typeof FormSchema>
