import { Cadastro } from '@/templates'
import { AsideHomePageCadastro, HeaderHomepage } from '@/components/homepage'
import { Footer } from '@/components/footer'

const HomepageCadastro = () => {
  return (
    <div className="flex h-screen w-full flex-col gap-2 overflow-hidden">
      <HeaderHomepage
        logoSrc="/images/LogoBranca.png"
        textColor="text-slate-100"
      />
      <div className="flex flex-1 flex-row items-center justify-between overflow-hidden  px-[73px]">
        <AsideHomePageCadastro />
        <Cadastro />
      </div>
      <Footer />
    </div>
  )
}

export default HomepageCadastro
