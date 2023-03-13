import '@/styles/globals.css'
import { Suspense } from 'react'

export default function App({ Component, pageProps }) {
  return (
    <Suspense>
      <Component {...pageProps} />
    </Suspense>
  )
}
