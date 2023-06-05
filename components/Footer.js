import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-dark-blue flex items-center overflow-hidden justify-center text-center p-6 ht-16 w-full font-nobile">
            <div className="w-full flex flex-col justify-center items-center">
                <div className="border-sky-blue border-2 p-4 md:w-7/12 mb- h-auto lg:min-h-min rounded-lg items-center flex flex-col lg:flex-row justify-evenly">
                    <div className="flex flex-col">
                        <h1 className="text-2xl mb-2">nicmic newsletter</h1>
                        <p className="text-xs lg:text-sm xl:text-base text-text-gray">
                            Exclusive first access
                        </p>
                    </div>
                    <div className="m-4 z-10">
                        <input
                            type="email"
                            placeholder="email"
                            className="bg-pale-blue w-52 min-w-[180px] bg-opacity-0 border-b border-gray-500 focus:outline-none focus:border-blue-500 text-sm"
                        />
                    </div>
                    <button className="bg-yellow h-10 w-52 min-w-[180px] p-1 text-pale-blue font-semibold rounded-lg shadow-sm z-10">
                        Get the newsletter
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
                    <div className="footer-grid-links grid grid-rows-3 grid-cols-3 gap-4 text-xs text-text-gray z-10">
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
                <div className="flex items-center justify-center">
                    <p className="ml-2 mt-2 text-xs opacity-60 text-text-gray">
                        Copyright 2023
                    </p>
                </div>
            </div>
        </footer>
    )
}
