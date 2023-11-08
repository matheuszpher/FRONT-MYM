'use client'

import { NextAuthSessionProviderProps } from '@/types'
import { SessionProvider } from 'next-auth/react'

const NextAuthSessionProvider = ({
  children,
}: NextAuthSessionProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>
}

export default NextAuthSessionProvider
