import type { AppProps } from 'next/app'

import { Layout, Head } from '@vercel/examples-ui'

import '../styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout path="solutions/web3-data-fetching">
      <Head
        title="Web3 Data Fetching"
        description="Learn how to fetch data from smart contracts"
      />
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
