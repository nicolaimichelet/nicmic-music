"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { SITE_CONFIG } from "../lib/constants";

type Mode = "music" | "work";

type NavigationProps = {
    mode: Mode;
    onSelect: (mode: Mode) => void;
};

export default function Navigation({ mode, onSelect }: NavigationProps) {
    const [solid, setSolid] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setSolid(window.scrollY > 80);
        };
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleSelect = (nextMode: Mode) => {
        if (nextMode === mode) return;
        onSelect(nextMode);
        if (typeof window !== "undefined") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const handleLogoClick = () => {
        if (typeof window !== "undefined") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-40 flex items-center justify-center gap-8 md:gap-12 px-4 md:px-8 py-4 transition-colors duration-500"
            style={{
                background: solid
                    ? "linear-gradient(to bottom, rgba(9,14,24,0.95) 0%, rgba(9,14,24,0.9) 80%, transparent 100%)"
                    : "linear-gradient(to bottom, rgba(9,14,24,0.92) 0%, transparent 100%)",
            }}
        >
            <button
                type="button"
                onClick={() => handleSelect("music")}
                className="relative font-subtitle text-sm md:text-base tracking-[0.18em] uppercase text-accentDim px-4 py-1.5 transition-colors duration-500"
            >
                <span
                    className={
                        mode === "music"
                            ? "text-accent"
                            : "text-accentDim hover:text-accent"
                    }
                >
                    the music
                </span>
                <span
                    className={`pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-0 h-px transition-all duration-500 ${
                        mode === "music"
                            ? "w-1/2 bg-accent"
                            : "w-0 bg-accent"
                    }`}
                />
            </button>

            <button
                type="button"
                onClick={handleLogoClick}
                className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-border/60 bg-backgroundDeep/80 shadow-[0_0_40px_rgba(0,0,0,0.7)] overflow-hidden cursor-pointer transition-transform duration-500 hover:scale-105"
                aria-label="Scroll to top"
            >
                <Image
                    src={SITE_CONFIG.logo}
                    alt="nicmic"
                    fill
                    sizes="48px"
                    className="object-contain"
                />
            </button>

            <button
                type="button"
                onClick={() => handleSelect("work")}
                className="relative font-subtitle text-sm md:text-base tracking-[0.18em] uppercase text-accentDim px-4 py-1.5 transition-colors duration-500"
            >
                <span
                    className={
                        mode === "work"
                            ? "text-warm"
                            : "text-accentDim hover:text-warm"
                    }
                >
                    the work
                </span>
                <span
                    className={`pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-0 h-px transition-all duration-500 ${
                        mode === "work"
                            ? "w-1/2 bg-warm"
                            : "w-0 bg-warm"
                    }`}
                />
            </button>
        </nav>
    );
}

