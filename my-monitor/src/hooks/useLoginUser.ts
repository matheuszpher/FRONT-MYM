import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { FormLoginProps } from '@/types'
import { schemaFormLogin } from '@/schema/schemaFormLogin'

export const useLoginUser = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormLoginProps>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(schemaFormLogin),
    defaultValues: {
      credentials: {
        email: '',
        password: '',
      },
    },
  })

  const authLogin = async (FormData: FormLoginProps) => {
    const { email, password } = FormData.credentials

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    if (result?.error) {
      return
    }

    window.location.href = '/'
  }

  return {
    authLogin,
    errors,
    register,
    handleSubmit,
  }
}
