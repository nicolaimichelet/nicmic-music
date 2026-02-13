"use client";

import { motion } from "framer-motion";

export type ChapterMood = "home" | "danger" | "longing" | "beauty" | "triumph";

const moodStyles: Record<
    ChapterMood,
    { dot: string; name: string; shadow: string }
> = {
    home: {
        dot: "bg-accent",
        name: "text-[#c8dde8]",
        shadow: "0 0 16px rgba(142,194,232,0.2)",
    },
    danger: {
        dot: "bg-[#8a7a6a]",
        name: "text-[#c4b8a8]",
        shadow: "0 0 16px rgba(138,122,106,0.2)",
    },
    longing: {
        dot: "bg-[#7a8ea8]",
        name: "text-[#b8c4d8]",
        shadow: "0 0 16px rgba(122,142,168,0.2)",
    },
    beauty: {
        dot: "bg-[#94a8d0]",
        name: "text-[#c8d0e8]",
        shadow: "0 0 16px rgba(148,168,208,0.2)",
    },
    triumph: {
        dot: "bg-warm",
        name: "text-[#e0d4c4]",
        shadow: "0 0 20px rgba(196,149,106,0.25)",
    },
};

type ChapterProps = {
    name: string;
    mood: ChapterMood;
    delay?: number;
};

const scrollReveal = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: {
        duration: 1.4,
        ease: [0.23, 1, 0.32, 1] as const,
    },
};

export default function Chapter({ name, mood, delay = 0 }: ChapterProps) {
    const style = moodStyles[mood];
    const isTriumph = mood === "triumph";

    return (
        <motion.div
            className="relative py-[6vh] text-center"
            {...scrollReveal}
            transition={{ ...scrollReveal.transition, delay }}
        >
            <div
                className={`inline-block rounded-full relative z-[2] mb-8 ${style.dot} ${isTriumph ? "w-2 h-2" : "w-1.5 h-1.5"}`}
                style={{ boxShadow: style.shadow }}
            />
            <h3
                className={`font-body font-light text-text text-[clamp(22px,3.5vw,32px)] tracking-[0.03em] mb-2 ${style.name}`}
            >
                {name}
            </h3>
        </motion.div>
    );
}
