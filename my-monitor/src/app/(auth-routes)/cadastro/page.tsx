import { Cadastro } from '@/templates'
import { HeaderHomepage } from '@/components/homepage'
import { AsideHomePageCadastro } from '@/components/homepage'
import { HomepageCadastro } from '@/templates'

import React from 'react'

const page = () => {
  return (
    <main className="bg-slate-900 flex min-h-screen items-center justify-center">
      <HomepageCadastro/>
    </main>
  )
}

export default page
