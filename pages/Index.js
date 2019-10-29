import Head from 'next/head'
import Navbar from '../components/navbar/Navbar'
import Home from '../components/home/Home'
import Anime from './Anime'

import './style.scss'

function Index() {
  return (
    <React.Fragment>
      <Head>
        <title>Index</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Anime />
    </React.Fragment>
  )
}

export default Index
