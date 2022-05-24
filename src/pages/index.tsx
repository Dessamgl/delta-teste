import Head from 'next/head';
import { Card } from '../components/Card';
import { Carousel } from '../components/Carousel';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Delta teste</title>
      </Head>
        <main>
          <Header />
          <Carousel />
          <Card />
        </main>
    </>
  )
}
