'use client'

import { Button } from '@/components/ui/button'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const LogoutButton = () => {
  const router = useRouter()
  async function logout() {
    await signOut({
      redirect: false,
    })

    router.replace('/login')
  }
  return <Button onClick={logout}>Logout</Button>
}

export default LogoutButton
