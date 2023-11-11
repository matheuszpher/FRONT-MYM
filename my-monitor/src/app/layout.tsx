import type { Metadata } from 'next'
import './globals.css'
import { NextAuthSessionProvider } from '@/providers'

export const metadata: Metadata = {
  title: 'MyMonitor',
  description: 'Monitoria UFC',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-inter">
        <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
      </body>
    </html>
  )
}
