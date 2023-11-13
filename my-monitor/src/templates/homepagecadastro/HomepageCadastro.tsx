import { Cadastro } from '@/templates'
import { AsideHomePageCadastro, HeaderHomepage } from '@/components/homepage'

const HomepageCadastro = () => {
  return (
    <div className="flex min-h-screen min-w-full flex-col gap-2 ">
      <HeaderHomepage logoSrc="/images/LogoBranca.png" textColor="text-slate-100" />
      <div className="flex flex-1 flex-row items-center justify-between overflow-hidden  px-[73px]">
        <AsideHomePageCadastro />
        <Cadastro />
      </div>
    </div>
  )
}

export default HomepageCadastro
