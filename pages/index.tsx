import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Layout from '../components/Layout'
import SongSlider from '../components/SongSlider'

const Home: NextPage = () => {
    const CountdownTimerComponent = dynamic(
        () => import('../components/countdownTimer'),
        { ssr: false }
    )

    return (
        <Layout>
            <div className="flex flex-row max-w-full">
                <SongSlider />
            </div>
        </Layout>
    )
}

export default Home
