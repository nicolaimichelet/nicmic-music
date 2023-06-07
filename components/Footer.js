import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { subscribeToNewsletter } from './mailchimp'

export default function Footer() {
    const [email, setEmail] = useState('')
    // prettier-ignore
    const [error, setError] = useState(null)

    const [subscribed, setSubscribed] = useState(false)

    const handleSubscribe = async () => {
        const isValidEmail = validateEmail(email)
        console.log(isValidEmail)
        if (email === '') {
            setError('Please enter a valid email address')
        }
        if (!isValidEmail || email === '') {
            return
        }

        try {
            await subscribeToNewsletter(email)
            setSubscribed(true)
            setError(null)
        } catch (error) {
            console.error(error)
            setError('Please enter a valid email address')
        }
    }

    const validateEmail = (email) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
        const isValid = emailRegex.test(email) || email === ''

        if (!isValid) {
            setError('Please enter a valid email address')
        } else {
            setError('')
        }
        return isValid
    }

    useEffect(() => {
        validateEmail(email)
    }, [email])

    return (
        <footer className="footer-image bg-no-repeat bg-cover bg-center bg-fixed flex items-center overflow-hidden justify-center text-center p-6 ht-16 w-full font-nobile">
            <div className="w-full flex flex-col justify-center items-center">
                <div className="border-sky-blue border-2 p-4 md:w-5/6 mb- h-auto rounded-lg items-center flex flex-col lg:flex-row justify-evenly lg:min-h-[130px]">
                    <div className="flex flex-col">
                        <h1 className="text-2xl mb-2 text-nicmic-white">
                            nicmic newsletter
                        </h1>
                        <p className="text-xs lg:text-sm xl:text-base text-nicmic-white">
                            Exclusive first access
                        </p>
                    </div>
                    <div className="m-4 mb-0 z-10 min-h-[56px]">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="email"
                            className="bg-pale-blue w-52 min-w-[180px] bg-opacity-0 border-b border-gray-500 focus:outline-none focus:border-blue-500 text-sm placeholder-nicmic-white placeholder-opacity-80 invalid:outline-nicmic-orange invalid:outline invalid:outline-2"
                        />
                        {error && (
                            <div className="bg-red-800 pt-2 font-normal text-xs text-nicmic-white">
                                {error}
                            </div>
                        )}
                    </div>
                    <button
                        onClick={handleSubscribe}
                        disabled={subscribed}
                        className="bg-nicmic-gold h-10 w-52 min-w-[180px] p-1 text-nicmic-black-blue font-semibold rounded-lg shadow-sm z-10 hover:scale-105 disabled:bg-mountain-blue disabled:hover:scale-100"
                    >
                        {subscribed ? 'Subscribed!' : 'Get newsletter'}
                    </button>
                </div>
                <div className="flex md:w-7/12 justify-between mt-8 mb-4">
                    <Image
                        className="self-center"
                        width="64"
                        height="64"
                        src="/nicmic_text_white.svg"
                        alt="nicmic logo"
                    />
                    <div className="footer-grid-links grid grid-rows-3 grid-cols-3 gap-4 text-xs text-nicmic-white z-10">
                        <Link href="/">
                            <p>Music</p>
                        </Link>
                        <Link href="https://www.instagram.com/nicmicmusic/">
                            <p>Instagram</p>{' '}
                        </Link>
                        <Link
                            href="https://www.youtube.com/c/nicmicmusic"
                            title="Youtube"
                        >
                            <p>YouTube</p>
                        </Link>
                        <Link href="/about">
                            <p>About</p>
                        </Link>
                        <Link href="https://open.spotify.com/artist/1ahjhkpk4VmdiQ7dNWYLeR">
                            <p>Spotify</p>{' '}
                        </Link>
                        <Link href="https://soundcloud.com/nicmicmusic">
                            <p>Soundcloud</p>
                        </Link>
                        <Link href="/events">
                            <p>Events</p>
                        </Link>
                        <Link href="https://music.apple.com/us/artist/nicmic/1479419475">
                            <p>Apple Music</p>
                        </Link>
                        <Link href="https://nicmicmusic.bandcamp.com/music">
                            <p>Bandcamp</p>
                        </Link>
                    </div>
                </div>
                <div className="flex items-center justify-end">
                    <p className="ml-2 mt-2 text-xs opacity-90 text-nicmic-white">
                        Copyright 2023
                    </p>
                </div>
            </div>
        </footer>
    )
}
