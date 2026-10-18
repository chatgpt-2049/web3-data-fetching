import type { AppProps } from 'next/app'

import { Layout, Head } from '@vercel/examples-ui'

import '../styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout path="solutions/web3-data-fetching">
      <Head
        title="Web3 Data Fetching"
        description="Web3 Data Fetching"
      />
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
