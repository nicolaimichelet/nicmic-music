"use client";

import Link from "next/link";
import { SOCIAL_LINKS } from "../lib/constants";
import ShopButton from "./ShopButton";

const footerLinks = [
    { name: "Instagram", url: SOCIAL_LINKS.instagram },
    { name: "Spotify", url: SOCIAL_LINKS.spotify },
    { name: "Apple Music", url: SOCIAL_LINKS.apple },
    { name: "YouTube", url: SOCIAL_LINKS.youtube },
];

export default function Footer() {
    return (
        <footer className="relative py-16 px-6 md:px-8 bg-backgroundDeep text-center">
            <div
                className="absolute top-0 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-border to-transparent"
                aria-hidden
            />
            <div className="flex flex-wrap justify-center gap-8 mb-10">
                {footerLinks.map(({ name, url }) => (
                    <Link
                        key={name}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-textMuted text-xs uppercase tracking-[3px] no-underline py-1 transition-colors duration-500 hover:text-accent"
                    >
                        {name}
                    </Link>
                ))}
            </div>
            <div className="mb-10">
                <ShopButton />
            </div>
            <div className="text-textMuted text-[11px] tracking-wider opacity-25">
                © 2026 nicmic
            </div>
        </footer>
    );
}
