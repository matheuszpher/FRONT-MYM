import React from 'react';

interface HeaderHomepageProps {
  logoSrc?: string;
  textColor?: string;
}

const HeaderHomepage: React.FC<HeaderHomepageProps> = ({ 
  logoSrc = "/images/logo-login-page.png",
  textColor = "text-teal-900",
 }) => {
  return (
    <header className="flex min-w-full items-center justify-start pl-1 pt-4">
      <div className="flex items-center justify-center px-2 py-1 pl-24">
        <img
          src={logoSrc}
          alt="logo"
          width={102}
          height={100}
          sizes="200%"
        />
        <h1 className={`font-coolvetica text-[40px] ${textColor}`}>
          MeuMonitor
        </h1>
      </div>
    </header>
  )
}

export default HeaderHomepage
