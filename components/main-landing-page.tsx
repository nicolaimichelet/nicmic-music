"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaSpotify, FaApple, FaYoutube } from "react-icons/fa";
import { SiSoundcloud } from "react-icons/si";
import { SOCIAL_LINKS, SITE_CONFIG } from "../lib/constants";
import Stars from "./Stars";
import Mist from "./Mist";
import Chapter from "./Chapter";
import type { ChapterMood } from "./Chapter";

const scrollReveal = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.08 },
    transition: { duration: 1.4, ease: [0.23, 1, 0.32, 1] as const },
};

const platformLinks = [
    { name: "Spotify", Icon: FaSpotify, url: SOCIAL_LINKS.spotify },
    { name: "Apple Music", Icon: FaApple, url: SOCIAL_LINKS.apple },
    { name: "YouTube", Icon: FaYoutube, url: SOCIAL_LINKS.youtube },
    { name: "SoundCloud", Icon: SiSoundcloud, url: SOCIAL_LINKS.soundcloud },
];

const chapters: { name: string; mood: ChapterMood }[] = [
    { name: "Snowglobe", mood: "home" },
    { name: "In the Pines", mood: "danger" },
    { name: "Don't Forget Me", mood: "longing" },
    { name: "Beyond the Mist", mood: "beauty" },
    { name: "Spirit", mood: "triumph" },
];

export default function MainLandingPage() {
    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0, 800], [0, 240]);
    const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
    const scrollHintOpacity = useTransform(
        scrollY,
        [0, 80, 280],
        [0, 0.3, 0]
    );

    return (
        <>
            {/* ——— Hero ——— */}
            <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-backgroundDeep">
                {/* Background image — barely visible */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={SITE_CONFIG.backgroundImage}
                        alt=""
                        fill
                        className="object-cover opacity-[0.18]"
                        priority
                        sizes="100vw"
                    />
                </div>
                <Stars count={50} />
                <Mist />
                <div
                    className="absolute inset-0 z-[2] pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(ellipse at 50% 30%, rgba(142,194,232,0.03) 0%, transparent 60%), radial-gradient(ellipse at 50% 100%, rgba(13,19,32,0.95) 0%, transparent 50%), linear-gradient(180deg, #090e18 0%, rgba(13,19,32,0.5) 50%, #0d1320 100%)",
                    }}
                />
                <motion.div
                    className="relative z-10 flex flex-col items-center text-center px-4"
                    style={{ y: heroY, opacity: heroOpacity }}
                >
                    <motion.div
                        className="mb-8"
                        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            filter: "blur(0px)",
                        }}
                        transition={{
                            duration: 2.5,
                            ease: [0.23, 1, 0.32, 1],
                            delay: 0.5,
                        }}
                    >
                        <Image
                            src={SITE_CONFIG.logo}
                            alt="nicmic"
                            width={200}
                            height={200}
                            className="w-[clamp(80px,12vw,200px)] h-auto"
                        />
                    </motion.div>
                </motion.div>
                <motion.div
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
                    style={{ opacity: scrollHintOpacity }}
                >
                    <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent animate-scroll-pulse" />
                </motion.div>
            </section>

            {/* ——— Featured Track ——— */}
            <section className="relative py-[10vh] px-6 md:px-8 bg-background overflow-hidden">
                <div
                    className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-border to-transparent"
                    aria-hidden
                />
                <Mist opacity={0.4} />
                <div className="max-w-[500px] mx-auto flex flex-col items-center">
                    <motion.h2
                        className="font-title text-[clamp(32px,5vw,48px)] font-normal text-text mb-10 text-center"
                        style={{
                            textShadow: "0 0 40px rgba(142,194,232,0.06)",
                        }}
                        {...scrollReveal}
                    >
                        Snowglobe
                    </motion.h2>
                    <motion.div
                        className="w-full mb-12 rounded-xl overflow-hidden shadow-2xl"
                        {...scrollReveal}
                        transition={{
                            ...scrollReveal.transition,
                            delay: 0.2,
                        }}
                    >
                        <iframe
                            src="https://w.soundcloud.com/player/?url=https%3A%2F%2Fsoundcloud.com%2Fnicmicmusic%2Fsnowglobe&color=5a94b8"
                            width="100%"
                            height="166"
                            allow="autoplay"
                            loading="lazy"
                            className="block w-full border-0"
                            title="Snowglobe — SoundCloud"
                        />
                    </motion.div>
                    <motion.div
                        className="flex flex-wrap justify-center gap-8 md:gap-10"
                        {...scrollReveal}
                        transition={{
                            ...scrollReveal.transition,
                            delay: 0.4,
                        }}
                    >
                        {platformLinks.map(({ name, Icon, url }) => (
                            <a
                                key={name}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-textMuted text-xs uppercase tracking-[3px] no-underline py-2 transition-colors duration-500 hover:text-accent hover:-translate-y-px"
                            >
                                <Icon
                                    size={16}
                                    className="md:w-4 md:h-4 w-5 h-5 shrink-0"
                                />
                                <span className="max-[600px]:hidden">{name}</span>
                            </a>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ——— Origins ——— */}
            <section className="relative py-[10vh] px-6 md:px-8 overflow-hidden bg-gradient-to-b from-background to-backgroundDeep">
                <Mist opacity={0.3} />
                <Stars count={30} />
                <div className="max-w-[600px] mx-auto text-center mb-[8vh]">
                    <motion.h2
                        className="font-title text-[clamp(32px,5vw,44px)] font-normal text-text mb-5"
                        style={{
                            textShadow: "0 0 40px rgba(142,194,232,0.05)",
                        }}
                        {...scrollReveal}
                    >
                        The Journey Begins
                    </motion.h2>
                    <motion.p
                        className="font-body font-light italic text-textMuted text-[clamp(16px,2vw,19px)] leading-[1.8]"
                        {...scrollReveal}
                        transition={{
                            ...scrollReveal.transition,
                            delay: 0.2,
                        }}
                    >
                        A boy whisked away from the familiar, and into the
                        unknown.
                    </motion.p>
                </div>
                <div className="relative max-w-[800px] mx-auto">
                    {/* Connecting line — hidden on mobile */}
                    <div
                        className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 opacity-[0.15]"
                        style={{
                            background:
                                "linear-gradient(180deg, transparent 0%, #5a94b8 10%, #5a94b8 90%, transparent 100%)",
                        }}
                        aria-hidden
                    />
                    {chapters.map((ch, i) => (
                        <Chapter
                            key={ch.name}
                            name={ch.name}
                            mood={ch.mood}
                            delay={i * 0.1}
                        />
                    ))}
                </div>
            </section>

            {/* ——— Ending ——— */}
            <section className="relative min-h-[50vh] flex flex-col items-center justify-center py-[10vh] px-6 bg-backgroundDeep overflow-hidden">
                <motion.p
                    className="font-body font-light italic text-textMuted text-center text-[clamp(15px,2vw,20px)] tracking-[0.08em] leading-[2] max-w-[500px] opacity-60"
                    {...scrollReveal}
                >
                    follow the feeling
                </motion.p>
            </section>
        </>
    );
}
