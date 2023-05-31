// 'use client'
import SwiperCore, { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import SongCard from './SongCard'

const songs = [
    {
        name: 'dont forget me',
        source: '/donotforgetme.png',
        alt: 'looking out an airplane window on the sunset',
        description:
            'Lost love and long distance. When Nicolai moved to the US while growing up, it was impossible to not miss his friends and his crush. Not all stories have happy endings.',
        spotifyLink: '',
        appleMusicLink: '',
        buyNowLink: '',
        isActive: true,
    },
    {
        name: 'flying to the moon',
        source: '/flyingtomoon.png',
        alt: 'moon in the horizone and a girl swinging from a large tree',
        description:
            'A future dystopia where Earth is no longer habitable. Winners are randomly selected to escape earth but they are not allowed to bring anyone with them... Will he leave his wife and child behind to save himself?',
        spotifyLink: '',
        appleMusicLink: '',
        buyNowLink: '',
        isActive: false,
    },
    {
        name: 'what do i do',
        source: '/whatdoido.png',
        alt: 'silhouette of woman gazing out on the blue and red horizon',
        description:
            'A beautiful woman captured his heart and he is at a loss of words. What does he do? Can she be contained? ',
        spotifyLink: '',
        appleMusicLink: '',
        buyNowLink: '',
        isActive: false,
    },
    {
        name: 'and so have you',
        source: '/andsohaveyou.png',
        alt: 'looking out an airplane window on the sunset',
        description: 'Time moved on and so have you.',
        spotifyLink: '',
        appleMusicLink: '',
        buyNowLink: '',
        isActive: false,
    },
    {
        name: 'etude pour deux',
        source: '/etude.png',
        alt: 'text etude pour deux on a white background',
        description: 'An etude for two people inspired by the Queens Gambit',
        spotifyLink: '',
        appleMusicLink: '',
        buyNowLink: '',
        isActive: false,
    },
]

const SongSlider = () => {
    return <></>
}

export default SongSlider
