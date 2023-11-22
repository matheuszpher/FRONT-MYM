'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { RadioGroupRegister } from '@/components/cadastro'
import { Button } from '@/components/ui/button'
import { useCadastroUser } from '@/hooks/useCadastroUser'
import { useRouter } from 'next/navigation'
import {
  EmailGreenIcon,
  PasswordGreenIcon,
  TokenIcon,
  UserIcon,
  ConfirmaPasswordGreenIcon,
} from '@/components/homepage'

const FormCadastro = () => {
  const { register, handleSubmit, errors, handleFormRegister } =
    useCadastroUser()
  const router = useRouter()

  const [showAdditionalInput, setShowAdditionalInput] = useState(false)

  const handleFormSubmit = handleSubmit(async (FormData) => {
    if (await handleFormRegister(FormData)) {
      router.replace('/login')
    }
  })
  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col items-center justify-center gap-3"
    >
      <RadioGroupRegister
        onChange={(value) => {
          setShowAdditionalInput((prev) => (value === 'monitor' ? !prev : prev))
        }}
      />

      <div className="mb-2 flex items-center justify-center gap-3">
        <UserIcon />
        <div className="relative flex flex-col items-center justify-center">
          <Input
            type="text"
            placeholder="Usuario"
            {...register('credentials.usuario')}
            autoComplete="off"
            className="h-11 w-72 border-none bg-zinc-300 text-sm text-black placeholder:text-zinc-500 hover:bg-white focus-visible:bg-white focus-visible:ring-0"
          />
          {errors.credentials?.usuario && (
            <p className="absolute left-0 right-0 top-[46px] text-xs font-light text-red-500">
              {errors.credentials?.usuario.message}
            </p>
          )}
        </div>
      </div>
      <div className="mb-2 flex items-center justify-center gap-3">
        <EmailGreenIcon />
        <div className="relative flex flex-col items-center justify-center">
          <Input
            type="email"
            placeholder="Email"
            autoComplete="off"
            {...register('credentials.email')}
            className="h-11 w-72 border-none bg-zinc-300 text-sm text-black placeholder:text-zinc-500 hover:bg-white focus-visible:bg-white focus-visible:ring-0"
          />
          {errors.credentials?.email && (
            <p className="absolute left-0 top-[46px] text-center text-xs font-light text-red-500">
              {errors.credentials?.email.message}
            </p>
          )}
        </div>
      </div>
      <div className="mb-2 flex items-center justify-center gap-3 ">
        <PasswordGreenIcon />
        <div className="relative flex flex-col items-center justify-center">
          <Input
            type="password"
            placeholder="Senha"
            {...register('credentials.senha')}
            autoComplete="off"
            className="h-11 w-72 border-none bg-zinc-300 text-sm text-black placeholder:text-zinc-500 hover:bg-white focus-visible:bg-white focus-visible:ring-0"
          />
          {errors.credentials?.senha && (
            <p className="absolute left-0 top-[46px] text-center text-xs font-light text-red-500">
              {errors.credentials?.senha.message}
            </p>
          )}
        </div>
      </div>
      <div className="mb-2 flex items-center justify-center gap-3">
        <ConfirmaPasswordGreenIcon />
        <div className="relative flex flex-col items-center justify-center">
          <Input
            type="password"
            placeholder="Confirmar senha"
            {...register('credentials.confirmarSenha')}
            autoComplete="off"
            className="h-11 w-72 border-none bg-zinc-300 text-sm text-black placeholder:text-zinc-500 hover:bg-white focus-visible:bg-white focus-visible:ring-0"
          />
          {errors.credentials?.confirmarSenha && (
            <p className="absolute left-0 top-[46px] text-center text-xs font-light text-red-500">
              {errors.credentials?.confirmarSenha.message}
            </p>
          )}
        </div>
      </div>
      {showAdditionalInput && (
        <div className="mb-2 flex items-center justify-center gap-3">
          <TokenIcon />
          <div
            className={`relative flex flex-col items-center justify-center ${
              showAdditionalInput ? 'h-auto' : 'h-0 overflow-hidden'
            }`}
          >
            <Input
              type="text"
              placeholder="Token"
              {...register('token')}
              autoComplete="off"
              className="h-11 w-72 border-none bg-zinc-300 text-sm text-black placeholder:text-zinc-500 hover:bg-white focus-visible:bg-white focus-visible:ring-0"
            />
          </div>
        </div>
      )}
      <div className=" flex w-[60%] items-center justify-center">
        <Button
          className="ml-7 h-auto w-full bg-emerald-600 font-light text-emerald-50 shadow-[6.0px_10.0px_10.0px_rgba(0,0,0,0.38)] transition-colors hover:bg-emerald-500 hover:shadow-[3.0px_6.0px_6.0px_rgba(0,0,0,0.38)]"
          type="submit"
        >
          Registrar
        </Button>
      </div>
      <p className="relative -top-2 mb-5 ml-6 pt-3 text-center text-sm text-zinc-500">
        Já possui conta?{' '}
        <Link
          className="border-b-[1px] border-zinc-500  text-zinc-500"
          href="/login"
        >
          Entre
        </Link>
      </p>
    </form>
  )
}

export default FormCadastro
