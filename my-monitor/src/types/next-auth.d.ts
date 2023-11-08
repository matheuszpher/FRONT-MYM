import NextAuth from 'next-auth/next'

declare module 'next-auth' {
  interface Session {
    user: {
      name: string
      jwt: string
      id: number
      email: string
    }
  }
}
