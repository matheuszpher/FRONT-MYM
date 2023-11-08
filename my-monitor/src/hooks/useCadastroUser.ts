import { schemaFormCadastro } from '@/schema/schemaFormCadastro'
import { FormPropsCadastro } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useForm } from 'react-hook-form'

export const useLoginUser = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormPropsCadastro>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(schemaFormCadastro),
    defaultValues: {
      credentials: {
        usuario: '',
        email: '',
        senha: '',
        confirmarSenha: '',
      },
    },
  })

  const registerURL = process.env.NEXT_PUBLIC_URL_REGISTER || ''
  const handleFormRegister = async (FormData: FormPropsCadastro) => {
    const data = {
      user: FormData.credentials.usuario,
      email: FormData.credentials.email,
      password: FormData.credentials.senha,
      confirmPassword: FormData.credentials.confirmarSenha,
    }
    const res = await axios.post(registerURL, data)

    if (res.status === 200) {
      return true
    }

    return false
  }

  return { register, errors, handleFormRegister, handleSubmit }
}
