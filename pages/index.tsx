import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import NicMicLogo from "../components/NicMicLogo";
import {useTheme} from "next-themes";
import { useState, useEffect} from 'react';
import { MoonIcon, SunIcon} from '@heroicons/react/24/solid';

const Home: NextPage = () => {
    const RELEASE_DATE = new Date("2022-10-07");

    const CountdownTimerComponent = dynamic(
        () => import("../components/countdownTimer"),
        { ssr: false }
    );

    const {systemTheme, theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const renderThemeChanger = () => {
        if (!mounted) return null;
        const currentTheme = theme === 'system' ? systemTheme : theme;
        if (currentTheme === 'dark') {
            return (
                <SunIcon className="w-7 h-7" role="button" onClick={()=> setTheme
                ('light')} />
            )
        }
        else {
            return (
                <MoonIcon className="w-7 h-7" role="button" onClick={()=> setTheme
                ('dark')} />
            )
        }
    }

    let blob = document.getElementById("blob");

    document.body.onpointermove = event => {
        const { clientX, clientY } = event;
        
        if (blob) {
            blob.animate({
                left: `${clientX}px`,
                top: `${clientY}px`
              }, { duration: 3000, fill: "forwards" });
        }
    }

    return (
        <div>
            <Head>
                <title>nicmic music</title>
                <meta
                    name="description"
                    content="The official home page for all things nicmic. Stay up to date on the latest tracks and news."
                />
                <link rel="icon" href="nicmic_text_black.svg" />
            </Head>
            <div id="blob" className="blob"></div>
            <main className="light-gradient dark:dark-gradient overflow-hidden w-screen h-screen flex flex-col items-center pb-16 justify-center px-4 md:px-20 text-center">
                <div className="flex mb-8 items-center justify-center text-center">
                <Link href="https://open.spotify.com/artist/1ahjhkpk4VmdiQ7dNWYLeR">
                            <svg
                                className="m-4 cursor-pointer hover:fill-green-400 hover:transition hover:ease-in-out"
                                fill="#FFFFFF"
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
                                className="m-4 cursor-pointer hover:fill-red-400 hover:transition hover:ease-in-out"
                                fill="#FFFFFF"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 50 50"
                                width="32px"
                                height="32px"
                            >
                                <path d="M37,4H13c-4.962,0-9,4.037-9,9v24c0,4.963,4.038,9,9,9h24c4.962,0,9-4.037,9-9V13C46,8.037,41.962,4,37,4z M35,27v4v0.021	h-0.002C34.986,33.768,32.749,36,30,36h-0.5c-0.987,0-1.933-0.42-2.596-1.152c-0.662-0.731-0.985-1.718-0.887-2.705	C26.195,30.38,27.787,29,29.643,29H31c1.103,0,2-0.897,2-2v-9.795l-12,2.25V30v4c0,2.757-2.243,5-5,5h-0.5	c-0.987,0-1.933-0.42-2.596-1.152c-0.662-0.731-0.985-1.718-0.887-2.705C12.195,33.38,13.787,32,15.643,32H17c1.103,0,2-0.897,2-2	V15.353c0-0.963,0.687-1.79,1.633-1.966l12.591-2.36c0.439-0.083,0.891,0.033,1.234,0.319C34.803,11.632,35,12.053,35,12.5V27z" />
                            </svg>
                        </Link>
                    <NicMicLogo twClassName="w-20 md:w-36" />
                        <Link href="https://soundcloud.com/nicmicmusic">
                            <svg
                                className="m-4 cursor-pointer hover:fill-orange-400 hover:transition hover:ease-in-out"
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
                        <Link href="https://soundcloud.com/nicmicmusic">
                            <svg
                                className="m-4 cursor-pointer hover:fill-orange-400 hover:transition hover:ease-in-out"
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
                </div>
                <CountdownTimerComponent targetDate={RELEASE_DATE} />

                <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 px-4 mt-2 md:mt-20 overflow-auto mb-4">
                    
                <div className="group rounded-xl relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="h-64 w-64">
        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-3xl font-bold text-white">what do i do</h1>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
        <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
      </div>
    </div>
                    
                    
                    
                    
                    <div className="w-full shadow-xl">
                        <iframe
                            src="https://open.spotify.com/embed/track/1aDO0637uCgxQBcfKJNR0w?utm_source=generator"
                            width="100%"
                            height="80"
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                    </div>
                    <div className="w-full min-w-[200px] shadow-xl">
                        <iframe
                            src="https://open.spotify.com/embed/track/2WamNKZ96oCooQzJgkDowd?utm_source=generator"
                            width="100%"
                            height="80"
                            frameBorder="2"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                    </div>
                    <div className="w-full shadow-xl">
                        <iframe
                            src="https://open.spotify.com/embed/track/4KJCaLcZXnhyHv0ui0fCmh?utm_source=generator"
                            width="100%"
                            height="80"
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                    </div>
                    <div className="w-full shadow-xl">
                        <iframe
                            src="https://open.spotify.com/embed/track/4Fi6rUGgA3Ny6CN4sGZcQ0?utm_source=generator"
                            width="100%"
                            height="80"
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                    </div>
                    <div className="w-full shadow-xl">
                        <iframe
                            src="https://open.spotify.com/embed/track/6EijNExo3B6v9VeqFs74bm?utm_source=generator"
                            width="100%"
                            height="80"
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </main>
            <footer className="flex items-center justify-center text-center px-8 ht-16 fixed bottom-0 w-full">
                <div className="flex w-full justify-center">
                    <img
                        className=" self-center mr-0 ml-4 md:fixed right-4"
                        width="44px"
                        height="44px"
                        src="./nicmic_text_white.svg"
                    />
                    {renderThemeChanger()}
                </div>
            </footer>
            
        </div>
    );
};

export default Home;
