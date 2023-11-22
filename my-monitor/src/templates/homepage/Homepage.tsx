import { Login } from '@/templates'
import { AsideHomePage, HeaderHomepage } from '@/components/homepage'
import { Footer } from '@/components/footer'

const Homepage = () => {
  return (
    <div className="flex h-screen min-h-screen min-w-full flex-col overflow-hidden">
      <HeaderHomepage />
      <div className="flex flex-1 flex-col">
        <div className="flex flex-1 flex-row items-center justify-between overflow-hidden px-[73px]">
          <AsideHomePage />
          {/* Form  */}
          <Login />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Homepage
