import axios from 'axios'
import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const LoginUrl = process.env.NEXT_PUBLIC_URL_LOGIN || ''

        const res = await axios.post(LoginUrl, {
          email: credentials?.email,
          password: credentials?.password,
        })

        const a = (await res).data

        const user = {
          id: '1',
          name: 'Sammy',
          email: 'sammyfe2021@gmail.com',
          jwt: a,
        }

        if (user && res.status === 200) {
          return user
        }

        return null
      },
    }),
  ],

  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user
      }
      return token
    },

    async session({ session, token }) {
      session = token as any // eslint-disable-line
      return session
    },
  },
}

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST, nextAuthOptions }
