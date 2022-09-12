import type { NextPage } from 'next'
import Head from 'next/head'
import CountdownTimer from '../components/countdownTimer';

const Home: NextPage = () => {

  const RELEASE_DATE = 25 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + RELEASE_DATE;

  return (
    <div>
      <Head>
        <title>nicmic music</title>
        <meta name="description" content="nicmic music" />
        <link rel="icon" href="nicmic_text_black.svg" />
      </Head>

      <main className="bg-gradient-to-b from-gray-700 via-gray-900 to-black w-screen h-screen flex flex-1 flex-col items-center justify-center px-20 text-center">
          <div className='mb-8'>
            <img src="./n_logo_white.svg"></img>
          </div>
          <CountdownTimer targetDate={dateTimeAfterThreeDays} />
      </main>


      <footer>
        <div>

        </div>
       
      </footer>
    </div>
  )
}

export default Home
