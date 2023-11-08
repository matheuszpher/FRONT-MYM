import { Input } from '@/components/ui/input'
import { RadioGroupRegister } from '@/templates/cadastro/components'
import { Button } from '@/components/ui/button'
import { useLoginUser } from '@/hooks/useLoginUser'
import { useRouter } from 'next/navigation'

const FormCadastro = () => {
  const { register, handleSubmit, errors, handleFormRegister } = useLoginUser()
  const router = useRouter()

  const handleFormSubmit = handleSubmit(async (FormData) => {
    if (await handleFormRegister(FormData)) {
      router.replace('/')
    }
  })
  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col items-center justify-center gap-5"
    >
      <RadioGroupRegister />

      <div className="flex flex-col gap-1">
        <Input
          type="text"
          placeholder="Usuario"
          {...register('credentials.usuario')}
          autoComplete="off"
        />
        {errors.credentials?.usuario && (
          <p className="text-xs font-light text-red-500">
            {errors.credentials?.usuario.message}
          </p>
        )}
      </div>
      <div>
        <Input
          type="email"
          placeholder="Email"
          {...register('credentials.email')}
          autoComplete="off"
        />
        {errors.credentials?.email && (
          <p className="text-xs font-light text-red-500">
            {errors.credentials?.email.message}
          </p>
        )}
      </div>
      <div>
        <Input
          type="password"
          placeholder="Senha"
          {...register('credentials.senha')}
          autoComplete="off"
        />
        {errors.credentials?.senha && (
          <p className="text-xs font-light text-red-500">
            {errors.credentials?.senha.message}
          </p>
        )}
      </div>
      <div>
        <Input
          type="password"
          placeholder="Confirmar senha"
          {...register('credentials.confirmarSenha')}
          autoComplete="off"
        />
        {errors.credentials?.confirmarSenha && (
          <p className="text-xs font-light text-red-500">
            {errors.credentials?.confirmarSenha.message}
          </p>
        )}
      </div>
      <Button type="submit">Cadastrar</Button>
    </form>
  )
}

export default FormCadastro
