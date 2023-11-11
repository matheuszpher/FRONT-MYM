import { FormLoginBottom, LoginForm } from '@/components/login'

const Login = async () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl bg-teal-900 px-11 text-white">
      <h1 className="mb-12 mt-11 w-full text-center text-5xl font-bold">
        LOGIN
      </h1>
      {/* Form */}
      <LoginForm />
      <FormLoginBottom />
    </div>
  )
}

export default Login
