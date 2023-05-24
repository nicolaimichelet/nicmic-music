import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'

import CustomBlobCursor from '../components/Cursor'
import Layout from '../components/Layout'
import Image from 'next/image'

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
            <div className="">
                <Head>
                    <title>nicmic music</title>
                    <meta
                        name="description"
                        content="The official home page for all things nicmic. Stay up to date on the latest tracks and news."
                    />
                    <link rel="icon" href="nicmic_text_black.svg" />
                </Head>
                <CustomBlobCursor systemTheme />
                <main className="flex flex-col items-center p-8 justify-center md:px-20 text-center">
                    <div className="p-16 max-w-2xl">
                        <p className="text-center font-bold font-sans text-3xl mb-4">
                            Buy digital download
                        </p>
                        <p className="text-sm p-4">
                            Experience my music in its purest form with a
                            high-quality digital download. Each song I create is
                            a labor of love, and a digital download allows you
                            to hear every detail and nuance of my music, just as
                            it was intended. Plus, when you purchase a digital
                            download, you're directly supporting my artistry and
                            enabling me to continue creating great music. As a
                            thank you for your support, I'm offering an
                            exclusive bonus track that you won't find anywhere
                            else. Join me on this creative journey and own a
                            piece of my artistry today.
                        </p>
                        <div className="p-8"></div>
                    </div>
                </main>
            </div>
        </Layout>
    )
}

export default Home
