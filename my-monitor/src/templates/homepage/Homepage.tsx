import { Login } from '@/templates'
import { AsideHomePage, HeaderHomepage } from '@/components/homepage'

const Homepage = () => {
  return (
    <div className="flex min-h-screen min-w-full flex-col gap-2 ">
      <HeaderHomepage />
      <div className="flex flex-1 flex-row items-center justify-between overflow-hidden  px-[73px]">
        <AsideHomePage />
        {/* Form  */}
        <Login />
      </div>
    </div>
  )
}

export default Homepage
