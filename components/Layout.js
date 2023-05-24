import Navigation from './Navigation'
import Footer from './Footer'
import CountdownTimerComponent from './countdownTimer'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import Image from 'next/image'

export default function Layout({ children }) {
    const { systemTheme, theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    const RELEASE_DATE = new Date('2022-10-07')

    useEffect(() => {
        setMounted(true)
    }, [])

    const renderThemeChanger = () => {
        if (!mounted) return null
        const currentTheme = theme === 'system' ? systemTheme : theme
        if (currentTheme === 'dark') {
            return (
                <SunIcon
                    className="w-7 h-7 hover:fill-yellow hover:scale-125"
                    role="button"
                    onClick={() => setTheme('light')}
                />
            )
        } else {
            return (
                <MoonIcon
                    className="w-7 h-7 hover:fill-black hover:scale-125"
                    fill="#FFFFFF"
                    role="button"
                    onClick={() => setTheme('dark')}
                />
            )
        }
    }
    return (
        <div className="flex flex-col items-center p-8 md:px-20 text-center light-gradient dark:dark-gradient w-screen min-h-screen">
            <Image
                className="self-center"
                width="284"
                height="284"
                src="/nicmic_text_white.svg"
                alt="nicmic logo"
            />

            <div className="flex mb-4 items-center text-center z-10">
                <Link href="https://open.spotify.com/artist/1ahjhkpk4VmdiQ7dNWYLeR">
                    <svg
                        className="m-4 cursor-pointer hover:scale-125 hover:fill-extra-sky-blue dark:hover:fill-dark-blue hover:transition hover:ease-in-out"
                        fill="#ffffff"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        width="32px"
                        height="32px"
                    >
                        <path d="M25.009,1.982C12.322,1.982,2,12.304,2,24.991S12.322,48,25.009,48s23.009-10.321,23.009-23.009S37.696,1.982,25.009,1.982z M34.748,35.333c-0.289,0.434-0.765,0.668-1.25,0.668c-0.286,0-0.575-0.081-0.831-0.252C30.194,34.1,26,33,22.5,33.001c-3.714,0.002-6.498,0.914-6.526,0.923c-0.784,0.266-1.635-0.162-1.897-0.948s0.163-1.636,0.949-1.897c0.132-0.044,3.279-1.075,7.474-1.077C26,30,30.868,30.944,34.332,33.253C35.022,33.713,35.208,34.644,34.748,35.333z M37.74,29.193c-0.325,0.522-0.886,0.809-1.459,0.809c-0.31,0-0.624-0.083-0.906-0.26c-4.484-2.794-9.092-3.385-13.062-3.35c-4.482,0.04-8.066,0.895-8.127,0.913c-0.907,0.258-1.861-0.272-2.12-1.183c-0.259-0.913,0.272-1.862,1.184-2.12c0.277-0.079,3.854-0.959,8.751-1c4.465-0.037,10.029,0.61,15.191,3.826C37.995,27.328,38.242,28.388,37.74,29.193z M40.725,22.013C40.352,22.647,39.684,23,38.998,23c-0.344,0-0.692-0.089-1.011-0.275c-5.226-3.068-11.58-3.719-15.99-3.725c-0.021,0-0.042,0-0.063,0c-5.333,0-9.44,0.938-9.481,0.948c-1.078,0.247-2.151-0.419-2.401-1.495c-0.25-1.075,0.417-2.149,1.492-2.4C11.729,16.01,16.117,15,21.934,15c0.023,0,0.046,0,0.069,0c4.905,0.007,12.011,0.753,18.01,4.275C40.965,19.835,41.284,21.061,40.725,22.013z" />
                    </svg>
                </Link>
                <Link href="https://music.apple.com/us/artist/nicmic/1479419475">
                    <svg
                        className="m-4 cursor-pointer hover:scale-125 hover:fill-extra-sky-blue dark:hover:fill-dark-blue hover:transition hover:ease-in-out"
                        fill="#FFFFFF"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        width="32px"
                        height="32px"
                    >
                        <path d="M37,4H13c-4.962,0-9,4.037-9,9v24c0,4.963,4.038,9,9,9h24c4.962,0,9-4.037,9-9V13C46,8.037,41.962,4,37,4z M35,27v4v0.021	h-0.002C34.986,33.768,32.749,36,30,36h-0.5c-0.987,0-1.933-0.42-2.596-1.152c-0.662-0.731-0.985-1.718-0.887-2.705	C26.195,30.38,27.787,29,29.643,29H31c1.103,0,2-0.897,2-2v-9.795l-12,2.25V30v4c0,2.757-2.243,5-5,5h-0.5	c-0.987,0-1.933-0.42-2.596-1.152c-0.662-0.731-0.985-1.718-0.887-2.705C12.195,33.38,13.787,32,15.643,32H17c1.103,0,2-0.897,2-2	V15.353c0-0.963,0.687-1.79,1.633-1.966l12.591-2.36c0.439-0.083,0.891,0.033,1.234,0.319C34.803,11.632,35,12.053,35,12.5V27z" />
                    </svg>
                </Link>
                <Link href="https://www.instagram.com/nicmicmusic/">
                    <svg
                        className="m-4 cursor-pointer hover:scale-125 hover:fill-extra-sky-blue dark:hover:fill-dark-blue hover:transition hover:ease-in-out"
                        fill="#FFFFFF"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 25 25"
                        width="32px"
                        height="32px"
                    >
                        <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z" />
                    </svg>
                </Link>
                <Link
                    href="https://www.youtube.com/c/nicmicmusic"
                    title="Youtube"
                >
                    <svg
                        className="m-4 cursor-pointer hover:scale-125 hover:fill-extra-sky-blue hover:transition dark:hover:fill-dark-blue hover:ease-in-out"
                        fill="#FFFFFF"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        width="32px"
                        height="32px"
                    >
                        <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z" />{' '}
                    </svg>
                </Link>
                <div className="flex">
                    <Link href="https://soundcloud.com/nicmicmusic">
                        <svg
                            className="m-4 cursor-pointer hover:scale-125 hover:fill-extra-sky-blue dark:hover:fill-dark-blue hover:transition hover:ease-in-out"
                            fill="#FFFFFF"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 50 50"
                            width="32px"
                            height="32px"
                        >
                            <path d="M3 34.7c.6.399 1.3.8 2 1V22.3c-.7.2-1.4.5-2 1V34.7zM14 16.5c-.7.3-1.4.6-2 1V36h2V16.5zM8 36V22.1C7.7 22 7.3 22 7 22s-.7 0-1 .1v13.8C6.3 36 6.7 36 7 36H8zM2 24.1c-1.2 1.3-2 3-2 4.9s.8 3.6 2 4.9V24.1zM20 16.5c-.6-.2-1.3-.4-2-.5v20h2V16.5zM9 20.9V36h2V18.3C10.2 19 9.5 19.9 9 20.9zM17 16c-.7 0-1.4.1-2 .2V36h2V16z" />
                            <g>
                                <path d="M42.5,21c-0.5,0-1,0.1-1.5,0.2C40.5,15.5,35.8,11,30,11c-3.6,0-7,1.8-9,4.7V36h21.5c4.1,0,7.5-3.4,7.5-7.5C50,24.4,46.6,21,42.5,21z" />
                            </g>
                        </svg>
                    </Link>
                    <div className="relative right-4">
                        {renderThemeChanger()}
                    </div>
                </div>
            </div>
            <Navigation />

            <CountdownTimerComponent targetDate={RELEASE_DATE} />

            <main>{children}</main>
            <Footer />
        </div>
    )
}
