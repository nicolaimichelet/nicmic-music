import type { NextPage } from 'next'
import dynamic from 'next/dynamic';
import Head from 'next/head'
import Link from 'next/link';

const Home: NextPage = () => {

  const RELEASE_DATE = new Date('2022-10-07');

  const CountdownTimerComponent = dynamic(() => import('../components/countdownTimer'), {ssr: false})

  return (
    <div>
      <Head>
        <title>nicmic music</title>
        <meta name="description" content="nicmic music" />
        <link rel="icon" href="nicmic_text_black.svg" />
      </Head>

      <main className="bg-gradient-to-b from-gray-700 via-gray-900 to-black w-screen h-screen flex flex-col items-center justify-center px-4 md:px-20 text-center">
          <div className='mb-8'>
            <img className='md:h-64 md:h-64' src="./n_logo_white.svg"></img>
          </div>
          <CountdownTimerComponent targetDate={RELEASE_DATE} />

        <div className='w-full flex flex-col md:flex-row gap-4 px-4 mt-2 md:mt-40 '>
          <div className='w-full'>
            <iframe src="https://open.spotify.com/embed/track/2WamNKZ96oCooQzJgkDowd?utm_source=generator" width="100%" height="80" frameBorder="2"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
          <div className='w-full'>
          <iframe src="https://open.spotify.com/embed/track/4KJCaLcZXnhyHv0ui0fCmh?utm_source=generator" width="100%" height="80" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>          </div>
          <div className='w-full'>
          <iframe  src="https://open.spotify.com/embed/track/4Fi6rUGgA3Ny6CN4sGZcQ0?utm_source=generator" width="100%" height="80" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
          <div className='w-full'>
          <iframe src="https://open.spotify.com/embed/track/6EijNExo3B6v9VeqFs74bm?utm_source=generator" width="100%" height="80" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>

        </div>
      </main>
      <footer className='bg-slate-700 flex items-center justify-center text-center px-8 ht-20 md:-mt-16 md:h-16'>
        <div className='flex w-full'>
          <div className='flex'>
            <Link href="https://open.spotify.com/artist/1ahjhkpk4VmdiQ7dNWYLeR"><img className='cursor-pointer px-4 hover:fill-slate-500' src='spotify.svg'></img></Link>
            <Link href="https://music.apple.com/us/artist/nicmic/1479419475"><img className='cursor-pointer px-4' src='apple-music.svg'></img></Link>
            <Link href="https://soundcloud.com/nicmicmusic"><img className='cursor-pointer px-4' src='soundcloud.svg'></img></Link>
          </div>
          <img className='mr-0 fixed right-4' width="44px" height="44px" src='./nicmic_text_white.svg' />
        </div>
      </footer>
    </div>
  )
}

export default Home
