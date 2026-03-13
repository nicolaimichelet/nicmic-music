"use client";

import { motion } from "framer-motion";
import FrostLine from "./FrostLine";
import WorkCard from "./WorkCard";

const scrollReveal = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 1.1, ease: [0.23, 1, 0.32, 1] as const },
};

export default function WorkView() {
    return (
        <div className="relative z-10">
            <FrostLine variant="warm" className="mt-20" />

            <section className="max-w-3xl mx-auto px-6 md:px-8 py-16 text-center">
                <motion.h1
                    className="font-body font-medium text-[clamp(1.6rem,3.2vw,2.3rem)] tracking-[0.22em] text-[rgba(240,230,215,0.9)] mb-4 uppercase"
                    {...scrollReveal}
                >
                    Nicolai Cappelen Michelet
                </motion.h1>
                <motion.div
                    className="text-[12px] tracking-[0.25em] uppercase text-[rgba(212,169,106,0.7)] mb-6"
                    {...scrollReveal}
                    transition={{ ...scrollReveal.transition, delay: 0.15 }}
                >
                    Project Leader <span className="mx-2 opacity-40">·</span>{" "}
                    Music Producer <span className="mx-2 opacity-40">·</span>{" "}
                    AI × Sound × Facilitation
                </motion.div>
                <motion.p
                    className="max-w-xl mx-auto font-body text-[15px] md:text-[16px] italic leading-[1.9] text-[rgba(240,230,215,0.85)]"
                    {...scrollReveal}
                    transition={{ ...scrollReveal.transition, delay: 0.3 }}
                >
                    I make music. Drawn to sonic branding, experience design,
                    and leading creative teams. Born and raised between Oslo and
                    California. Currently living in Oslo. Open for freelance,
                    project-based work.
                </motion.p>
            </section>

            <FrostLine variant="warm" />

            <section className="max-w-5xl mx-auto px-6 md:px-8 py-12">
                <motion.div
                    className="grid gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: { staggerChildren: 0.12 },
                        },
                    }}
                >
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 24 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={scrollReveal.transition}
                        className="sm:col-span-2"
                    >
                        <WorkCard
                            featured
                            tag="scoring · sound design · ntnu"
                            title="Game Score & Sound Design"
                            description="Full scoring and sound design for a video game sequence. Original composition, foley, and mix."
                            embed={
                                <div className="relative w-full pt-[42.85%]">
                                    <iframe
                                        src="https://player.vimeo.com/video/1173273901?badge=0&autopause=0&player_id=0&app_id=58479"
                                        className="absolute inset-0 w-full h-full border-0"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                                        allowFullScreen
                                        title="Game Score & Sound Design for Film Music at NTNU"
                                    />
                                </div>
                            }
                        />
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 24 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{
                            ...scrollReveal.transition,
                            delay: 0.05,
                        }}
                    >
                        <WorkCard
                            tag="original · cinematic"
                            title="Cinematic Originals"
                            description="Atmospheric piano and cinematic soundscapes. 2010–present."
                            embed={
                                <iframe
                                    width="100%"
                                    height="100%"
                                    scrolling="no"
                                    frameBorder="no"
                                    allow="autoplay"
                                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A2205678563&color=%23211a23&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                                    className="w-full h-full border-0"
                                    title="Cinematic Originals – SoundCloud"
                                />
                            }
                        />
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 24 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{
                            ...scrollReveal.transition,
                            delay: 0.1,
                        }}
                    >
                        <WorkCard
                            tag="original · pop"
                            title="Pop Originals"
                            description="I was the songwriter, producer, mixer and mastering engineer in these productions."
                            embed={
                                <iframe
                                    src="https://open.spotify.com/embed/playlist/365NlTFMpJe9yvOnfB3KPi?utm_source=generator&theme=0"
                                    width="100%"
                                    height="352"
                                    frameBorder="0"
                                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                    allowFullScreen
                                    loading="lazy"
                                    className="w-full h-full border-0 rounded-[12px]"
                                    title="Pop Originals – Spotify"
                                />
                            }
                        />
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 24 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{
                            ...scrollReveal.transition,
                            delay: 0.15,
                        }}
                    >
                        <WorkCard
                            tag="remix · reinterpretation"
                            title="Remixes & Reworks"
                            description="Pop, electronic, and cinematic reinterpretations."
                            embed={
                                <iframe
                                    width="100%"
                                    height="100%"
                                    scrolling="no"
                                    frameBorder="no"
                                    allow="autoplay"
                                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A2205677939&color=%23211a23&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                                    className="w-full h-full border-0"
                                    title="Remixes and Reworks – SoundCloud"
                                />
                            }
                        />
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 24 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{
                            ...scrollReveal.transition,
                            delay: 0.2,
                        }}
                    >
                        <WorkCard
                            tag="coming soon"
                            title="Sonic Branding Demos"
                            description="Audio logos, UX sound sets, ambient brand soundscapes."
                            comingSoon
                        />
                    </motion.div>
                </motion.div>
            </section>

            <FrostLine variant="warm" />

            <footer className="py-12 px-6 md:px-8 text-center bg-transparent">
                <motion.div
                    className="mb-6 font-body text-[15px] italic text-[rgba(212,169,106,0.75)]"
                    {...scrollReveal}
                >
                    follow the feeling
                </motion.div>
                <motion.div
                    className="flex flex-wrap justify-center gap-6 md:gap-8 text-[11px] uppercase tracking-[0.25em]"
                    {...scrollReveal}
                    transition={{ ...scrollReveal.transition, delay: 0.2 }}
                >
                    <a
                        href="https://www.linkedin.com/in/nicolai-michelet/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[rgba(212,169,106,0.7)] hover:text-warm transition-colors duration-400"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="mailto:hello@nicmicmusic.com"
                        className="text-[rgba(212,169,106,0.7)] hover:text-warm transition-colors duration-400"
                    >
                        Email
                    </a>
                    <a
                        href="https://micromindful.substack.com/?utm_campaign=profile_chips"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[rgba(212,169,106,0.7)] hover:text-warm transition-colors duration-400"
                    >
                        Substack
                    </a>
                    <a
                        href="https://soundcloud.com/nicmicmusic"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[rgba(212,169,106,0.7)] hover:text-warm transition-colors duration-400"
                    >
                        SoundCloud
                    </a>
                    <a
                        href="https://open.spotify.com/artist/1ahjhkpk4VmdiQ7dNWYLeR"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[rgba(212,169,106,0.7)] hover:text-warm transition-colors duration-400"
                    >
                        Spotify
                    </a>
                </motion.div>
                <motion.div
                    className="mt-6 text-[10px] tracking-[0.3em] uppercase text-[rgba(212,169,106,0.35)]"
                    {...scrollReveal}
                    transition={{ ...scrollReveal.transition, delay: 0.35 }}
                >
                    © 2026 nicmic
                </motion.div>
            </footer>
        </div>
    );
}

