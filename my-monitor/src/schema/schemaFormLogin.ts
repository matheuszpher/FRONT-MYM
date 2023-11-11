import { z } from 'zod'

export const schemaFormLogin = z.object({
  credentials: z.object({
    email: z.string().refine((data) => !/\s/.test(data), {
      message: 'Email inválido.',
    }),
    password: z.string(),
  }),
})
