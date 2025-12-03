"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaSpotify, FaApple, FaYoutube, FaInstagram } from "react-icons/fa";
import { SiSoundcloud, SiSubstack } from "react-icons/si";
import { SOCIAL_LINKS, COLORS, SITE_CONFIG } from "../lib/constants";
import type { SocialIcon } from "../lib/types";
import ShopButton from "./ShopButton";

const socialIcons: SocialIcon[] = [
    // { name: "Soundcloud", Icon: SiSoundcloud, url: SOCIAL_LINKS.soundcloud },
    { name: "Spotify", Icon: FaSpotify, url: SOCIAL_LINKS.spotify },
    { name: "Apple Music", Icon: FaApple, url: SOCIAL_LINKS.apple },

    // { name: "Substack", Icon: SiSubstack, url: SOCIAL_LINKS.substack },
    // { name: "Instagram", Icon: FaInstagram, url: SOCIAL_LINKS.instagram },
    // { name: "Youtube", Icon: FaYoutube, url: SOCIAL_LINKS.youtube },
];

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
        },
    },
};

export default function MainLandingPage() {
    return (
        <div
            className="relative min-h-screen flex flex-col items-center justify-center text-nicmic-text overflow-hidden"
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
            <motion.div
                className="z-30 flex flex-col items-center justify-center text-center"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >
                <motion.div
                    variants={fadeInUp}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Image
                        src={SITE_CONFIG.logo}
                        alt="nicmic logo"
                        width={200}
                        height={200}
                        className="transform translate-x-4"
                    />
                </motion.div>

                <motion.h1
                    className="text-xl font-light mb-2 text-center w-full"
                    variants={fadeInUp}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ color: COLORS.text }}
                >
                    {SITE_CONFIG.description}
                </motion.h1>

                <motion.div
                    variants={fadeInUp}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mt-8"
                >
                    <ShopButton />
                </motion.div>
                <motion.div
                    className="flex space-x-6 mt-8"
                    variants={fadeInUp}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {socialIcons.map((icon) => (
                        <a
                            key={icon.name}
                            href={icon.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`transition-all duration-300 hover:scale-110 ${
                                icon.name === "Spotify" ||
                                icon.name === "Apple Music"
                                    ? "text-nicmic-text hover:text-nicmic-orange-hover"
                                    : "text-nicmic-text"
                            } ${
                                icon.name === "Spotify" ? "translate-y-1" : ""
                            }`}
                        >
                            <icon.Icon
                                size={icon.name === "Spotify" ? 28 : 30}
                            />
                        </a>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}
