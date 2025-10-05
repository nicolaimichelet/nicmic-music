"use client";
import Image from "next/image";
import { FaSpotify, FaApple, FaYoutube, FaInstagram } from "react-icons/fa";
import { SiSoundcloud, SiSubstack } from "react-icons/si";
import { SOCIAL_LINKS, COLORS, SITE_CONFIG } from "../lib/constants";
import type { SocialIcon } from "../lib/types";

const socialIcons: SocialIcon[] = [
    // { name: "Soundcloud", Icon: SiSoundcloud, url: SOCIAL_LINKS.soundcloud },
    { name: "Spotify", Icon: FaSpotify, url: SOCIAL_LINKS.spotify },
    { name: "Apple Mudic", Icon: FaApple, url: SOCIAL_LINKS.apple },

    // { name: "Substack", Icon: SiSubstack, url: SOCIAL_LINKS.substack },
    // { name: "Instagram", Icon: FaInstagram, url: SOCIAL_LINKS.instagram },
    // { name: "Youtube", Icon: FaYoutube, url: SOCIAL_LINKS.youtube },
];

export default function MainLandingPage() {
    return (
        <div
            className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden font-montserrat"
            style={{ backgroundColor: COLORS.background }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 opacity-50 z-0"></div>
            <div className="absolute inset-0 z-10">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={SITE_CONFIG.backgroundImage}
                    className="w-full h-full object-cover opacity-80"
                >
                    <source
                        src={SITE_CONFIG.backgroundVideo}
                        type="video/mp4"
                    />
                    {/* Fallback to image if video fails to load */}
                    <img
                        src={SITE_CONFIG.backgroundImage}
                        alt="nicmic at the piano"
                        className="w-full h-full object-cover opacity-80"
                    />
                </video>
            </div>
            <div className="z-30 flex flex-col items-center justify-center text-center">
                <Image
                    src={SITE_CONFIG.logo}
                    alt="nicmic logo"
                    width={100}
                    height={50}
                    className="mb-4 animate-fade-in transform translate-x-7"
                    style={{ width: "200px", height: "200px" }}
                />

                <div className="flex space-x-6 mb-8 animate-fade-in animation-delay-300">
                    {socialIcons.map((icon) => (
                        <a
                            key={icon.name}
                            href={icon.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-900 transition-all duration-300 hover:scale-110 animate-fade-in"
                        >
                            <icon.Icon size={30} />
                        </a>
                    ))}
                </div>
                <h1
                    className="text-xl font-light mb-8 animate-fade-in animation-delay-300"
                    style={{ color: COLORS.text }}
                >
                    {SITE_CONFIG.description}
                </h1>
            </div>
        </div>
    );
}
