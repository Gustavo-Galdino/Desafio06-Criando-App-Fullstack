// eslint-disable-next-line no-unused-vars
import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface User {
    id: string
    name: string
    email: string
    image: string
  }
  // eslint-disable-next-line no-unused-vars
  interface Session {
    user: User
  }
}
