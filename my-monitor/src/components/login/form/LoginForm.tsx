'use client'

import { EmailIcon, PasswordIcon } from '@/components/homepage'
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
      className="flex flex-col items-center justify-center gap-8"
    >
      <div className="flex items-center justify-center gap-3">
        <EmailIcon />
        <div className="relative flex flex-col items-center justify-center">
          <Input
            type="text"
            placeholder="Email"
            autoComplete="off"
            {...register('credentials.email')}
            className="h-11 w-72 border-none bg-zinc-300 text-sm text-black placeholder:text-zinc-500 hover:bg-white focus-visible:bg-white focus-visible:ring-0"
          />
          {errors.credentials?.email && (
            <p className="absolute -bottom-5 text-xs font-bold text-red-600">
              {errors.credentials?.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="relative flex items-center justify-center gap-3">
        <PasswordIcon />
        <Input
          type="password"
          placeholder="Senha"
          autoComplete="off"
          {...register('credentials.password')}
          className="h-11 w-72 border-none bg-zinc-300 text-sm text-black placeholder:text-zinc-500 hover:bg-white focus-visible:bg-white focus-visible:ring-0"
        />
        <button className="absolute -bottom-5 right-0 text-xs text-neutral-100 text-opacity-90">
          Esqueceu a senha?
        </button>
      </div>
      <div className="mt-2 flex w-[50%] items-center justify-center gap-5">
        <Button
          className="w-full bg-emerald-600 font-light text-emerald-50 shadow-[6.0px_10.0px_10.0px_rgba(0,0,0,0.38)] transition-colors hover:bg-emerald-500 hover:shadow-[3.0px_6.0px_6.0px_rgba(0,0,0,0.38)]"
          type="submit"
        >
          Login
        </Button>
      </div>
    </form>
  )
}

export default LoginForm
