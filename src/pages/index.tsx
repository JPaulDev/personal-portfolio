import { About, Hero, Technologies } from '@sections';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jonathan Watson</title>
      </Head>
      <Hero />
      <About />
      <Technologies />
    </>
  );
}
