import { getServerSession } from 'next-auth'
import { PrivateLayoutProps } from '@/types'
import { nextAuthOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

const PrivateLayout = async ({ children }: PrivateLayoutProps) => {
  const session = await getServerSession(nextAuthOptions)

  if (!session) {
    redirect('/login')
  }
  return <>{children}</>
}

export default PrivateLayout
