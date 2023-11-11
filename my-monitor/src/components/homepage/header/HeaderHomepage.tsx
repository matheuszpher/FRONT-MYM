const HeaderHomepage = () => {
  return (
    <header className="flex min-w-full items-center justify-start pl-4 pt-4">
      <div className="flex items-center justify-center px-2 py-1 pl-8">
        <img
          src="/images/logo-login-page.png"
          alt="logo"
          width={102}
          height={100}
          sizes="200%"
        />
        <h1 className="font-coolvetica text-[40px] text-teal-900">
          MeuMonitor
        </h1>
      </div>
    </header>
  )
}

export default HeaderHomepage
