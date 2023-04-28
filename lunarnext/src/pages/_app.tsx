import type { AppProps } from 'next/app'
import { SessionProvider, useSession } from "next-auth/react"
import type { Session } from "next-auth"
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps: { session, ...pageProps }, }: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp;


