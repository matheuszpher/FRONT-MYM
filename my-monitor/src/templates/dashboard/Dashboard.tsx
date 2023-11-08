import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { LogoutButton } from './components'

const Dashboard = async () => {
  const session = await getServerSession(nextAuthOptions)

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <p>Hello, {session?.user?.name} You are logged in</p>
      <p>JWT: {session?.user?.jwt}</p>
      <LogoutButton />
    </div>
  )
}

export default Dashboard
