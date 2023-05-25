import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Layout from '../components/Layout'
import SongCard from '../components/SongCard'

const Home: NextPage = () => {
    const cards = [
        {
            name: 'dont forget me',
            source: '/donotforgetme.png',
            alt: 'looking out an airplane window on the sunset',
            description: '',
        },
        {
            name: 'flying to the moon',
            source: '/flyingtomoon.png',
            alt: 'moon in the horizone and a girl swinging from a large tree',
            description: '',
        },
        {
            name: 'what do i do',
            source: '/whatdoido.png',
            alt: 'silhouette of woman gazing out on the blue and red horizon',
            description: '',
        },
        {
            name: 'and so have you',
            source: '/andsohaveyou.png',
            alt: 'looking out an airplane window on the sunset',
            description: '',
        },
        {
            name: 'etude pour deux',
            source: '/etude.png',
            alt: 'looking out an airplane window on the sunset',
            description: '',
        },
    ]

    const CountdownTimerComponent = dynamic(
        () => import('../components/countdownTimer'),
        { ssr: false }
    )

    console.log('Cards', cards)

    return (
        <Layout>
            <div className="flex">
                {cards.map((song) => (
                    <SongCard
                        key={song.name}
                        source={song.source}
                        alt={song.alt}
                    />
                ))}
            </div>
        </Layout>
    )
}

export default Home
