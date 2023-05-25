import React from 'react'
import Slider from 'react-slick'
import SongCard from './SongCard'

const SongSlider = () => {
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <button
            {...props}
            className={
                'slick-prev slick-arrow' +
                (currentSlide === 0 ? ' slick-disabled' : '')
            }
            aria-hidden="true"
            aria-disabled={currentSlide === 0 ? true : false}
            type="button"
        >
            Previous
        </button>
    )
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <button
            {...props}
            className={
                'slick-next slick-arrow' +
                (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
            }
            aria-hidden="true"
            aria-disabled={currentSlide === slideCount - 1 ? true : false}
            type="button"
        >
            Next
        </button>
    )
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        // Add more settings as needed
    }

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
            description:
                'An etude for two people inspired by the Queens Gambit',
            spotifyLink: '',
            appleMusicLink: '',
            buyNowLink: '',
            isActive: false,
        },
    ]

    return (
        <Slider {...settings}>
            {songs.map((song) => (
                <div key={song.name} className="">
                    <SongCard
                        isActive={song.isActive}
                        source={song.source}
                        alt={song.alt}
                        description={song.description}
                        spotifyLink={song.spotifyLink}
                        appleMusicLink={song.appleMusicLink}
                        buyNowLink={song.buyNowLink}
                    />
                </div>
            ))}
        </Slider>
    )
}

export default SongSlider
