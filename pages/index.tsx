import { Text, Page } from '@vercel/examples-ui'

export default function Home() {
  return (
    <Page>
      <section className="flex flex-col gap-6">
        <Text variant="h1">Web3 Data Fetching</Text>
        <Text>No smart contract is currently configured.</Text>
      </section>
    </Page>
  )
}
