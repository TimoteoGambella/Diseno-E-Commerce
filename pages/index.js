import Head from 'next/head';
import HomeContainer from './components/HomeContainer';

export default function Home() {
  return (

    <div className="root">

      <Head>
        <title>Benet</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <HomeContainer/>

      
    </div>
  )
}
