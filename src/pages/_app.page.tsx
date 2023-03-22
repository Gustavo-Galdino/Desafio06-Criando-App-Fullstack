import { globalStyles } from '@/styles/globals'
import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'

globalStyles()

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${nunito.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  )
}