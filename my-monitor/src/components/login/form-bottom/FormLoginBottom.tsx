import { Button } from '@/components/ui/button'
import Link from 'next/link'

const FormLoginBottom = () => {
  return (
    <div className="mb-20 mt-7 flex flex-col items-center">
      <div className="flex w-full items-center justify-between gap-5">
        <div className="h-[1px] w-24 bg-green-50"></div>
        <p className="text-[13px] font-light">Crie uma conta</p>
        <div className="h-[1px] w-24 bg-green-50"></div>
      </div>

      <Link
        href={'/cadastro'}
        className="mt-7 flex w-[50%] items-center justify-center"
      >
        <Button className="w-full bg-slate-900 text-sm font-light text-emerald-50 shadow-[6.0px_10.0px_10.0px_rgba(0,0,0,0.38)]  transition-colors hover:bg-emerald-500 hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
          Registrar
        </Button>
      </Link>
    </div>
  )
}

export default FormLoginBottom
