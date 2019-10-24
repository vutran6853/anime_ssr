import Head from 'next/head'
import Navbar from '../components/navbar/Navbar'
import './style.scss'

const Index = () => (
  <Head>
    {/* <title>Index</title> */}
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <Navbar />
  </Head>
)

export default Index
