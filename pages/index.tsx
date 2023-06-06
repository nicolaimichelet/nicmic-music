import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Keyboard, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Layout from '../components/Layout'
import SongCard from '../components/SongCard'

const songs = [
    {
        name: 'flying to the moon',
        source: '/flyingtomoon.png',
        alt: 'moon in the horizone and a girl swinging from a large tree',
        description:
            'In a future dystopia where Earth is no longer habitable, winners are randomly selected to escape earth but they are not allowed to bring anyone with them... Will he leave his wife and child behind to save himself?',
        spotifyLink:
            'https://open.spotify.com/track/4KJCaLcZXnhyHv0ui0fCmh?si=c587c3c0776445bd',
        appleMusicLink:
            'https://music.apple.com/us/album/flying-to-the-moon/1603820755?i=1603820758',
        buyNowLink: '',
        isActive: false,
    },
    {
        name: 'what do i do',
        source: '/whatdoido.png',
        alt: 'silhouette of woman gazing out on the blue and red horizon',
        description:
            'A beautiful woman captured his heart and he is at a loss for words. What does he do? Can she be contained? ',
        spotifyLink:
            'https://open.spotify.com/track/4KM75t05g22mltpLgyjjJ2?si=429bc7a1848e4f61',
        appleMusicLink:
            'https://music.apple.com/us/album/what-do-i-do/1556095979?i=1556095980',
        buyNowLink: 'https://sowl.co/s/biXgBa',
        isActive: false,
    },
    {
        name: 'dont forget me',
        source: '/donotforgetme.png',
        alt: 'looking out an airplane window on the sunset',
        description:
            'Lost love and long distance. When Nicolai moved to the US while growing up, it was impossible to not miss his crush. Not all stories have happy endings.',
        spotifyLink:
            'https://open.spotify.com/track/1aDO0637uCgxQBcfKJNR0w?si=c0e7d99e1053441b',
        appleMusicLink:
            'https://music.apple.com/us/album/dont-forget-me/1645851943?i=1645852127',
        buyNowLink: 'https://sowl.co/s/LTspm',
        isActive: true,
    },
    {
        name: 'and so have you',
        source: '/andsohaveyou.png',
        alt: 'looking out an airplane window on the sunset',
        description:
            'Time moved on and so have you... Nothing more to say here.',
        spotifyLink:
            'https://open.spotify.com/track/357mc6fmgSzo9cHBg53pMd?si=67c09e93d7784dd1',
        appleMusicLink:
            'https://music.apple.com/us/album/and-so-have-you/1547412369?i=1547412371',
        buyNowLink: '',
        isActive: false,
    },
    {
        name: 'etude pour deux',
        source: '/etude.png',
        alt: 'text etude pour deux on a white background',
        description: `An 'etude' is a short musical composition for typically one instrument. Inspired by the Netflix show Queen's Gambit where every move can bring you closer to winning or losing...`,
        spotifyLink:
            'https://open.spotify.com/track/6EijNExo3B6v9VeqFs74bm?si=faeea547222a4bee',
        appleMusicLink:
            'https://music.apple.com/us/album/%C3%A9tude-pour-deux/1540605692?i=1540605693',
        buyNowLink: '',
        isActive: false,
    },
]

const Home: NextPage = () => {
    return (
        <Layout>
            <div className="flex flex-row max-w-full min-h-[300px] min-w-0">
                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={32}
                    updateOnWindowResize={true}
                    centeredSlides={true}
                    initialSlide={2}
                    slideToClickedSlide={true}
                    pagination={{
                        clickable: true,
                    }}
                    keyboard={{
                        enabled: true,
                    }}
                    modules={[Pagination, Keyboard]}
                    className="w-full"
                >
                    {songs.map((song, index) => (
                        <SwiperSlide
                            key={index}
                            className="w-auto flex-shrink-0 h-full"
                        >
                            <SongCard
                                source={song.source}
                                alt={song.alt}
                                description={song.description}
                                spotifyLink={song.spotifyLink}
                                appleMusicLink={song.appleMusicLink}
                                buyNowLink={song.buyNowLink}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Layout>
    )
}

export default Home
