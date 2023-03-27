import { ApiProvider } from '@/context/apiContext'
import { globalStyles } from '@/styles/globals'
import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'

globalStyles()

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
})

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <div className={`${nunito.variable} font-sans`}>
      <SessionProvider session={session}>
        <ApiProvider>
          <Component {...pageProps} />
        </ApiProvider>
      </SessionProvider>
    </div>
  )
}
