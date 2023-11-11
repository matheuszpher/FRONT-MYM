'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useLoginUser } from '@/hooks/useLoginUser'

const LoginForm = () => {
  const { handleSubmit, register, authLogin, errors } = useLoginUser()

  const handleFormSubmit = handleSubmit(async (FormData) => {
    authLogin(FormData)
  })

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col items-center justify-center gap-2"
    >
      <Input
        type="email"
        placeholder="Email"
        autoComplete="off"
        {...register('credentials.email')}
      />
      {errors.credentials?.email && (
        <p className="text-xs font-light text-red-500">
          {errors.credentials?.email.message}
        </p>
      )}
      <Input
        type="password"
        placeholder="Password"
        autoComplete="off"
        {...register('credentials.password')}
      />
      <Button type="submit">Login</Button>
    </form>
  )
}

export default LoginForm
