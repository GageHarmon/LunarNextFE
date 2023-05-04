import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='min-h-screen flex items-center justify-center bg-gradient-to-tl from-lightpurp to-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
