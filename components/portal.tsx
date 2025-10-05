"use client";

import { useEffect, useRef, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Portal() {
    const [isVisible, setIsVisible] = useState(false);
    const [copied, setCopied] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );
        const currentRef = ref.current;

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText("hello@nicmicmusic.com");
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Fallback if clipboard API is not available
            const input = document.createElement("input");
            input.value = "hello@nicmicmusic.com";
            document.body.appendChild(input);
            input.select();
            document.execCommand("copy");
            document.body.removeChild(input);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <section className="w-full bg-gray-900 py-12 font-subtitle" ref={ref}>
            <div
                className={`max-w-4xl mx-auto px-4 transition-opacity duration-1000 ${
                    isVisible ? "opacity-100" : "opacity-0"
                }`}
            >
                <div className="flex items-center justify-center gap-8 text-gray-300 max-[450px]:flex-col max-[450px]:gap-4">
                    <a
                        href="https://www.instagram.com/nicmicmusic/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-nicmic-orange-hover transition-colors duration-200"
                        aria-label="Visit Instagram profile"
                    >
                        <FaInstagram size={28} />
                        <span className="font-subtitle">@nicmicmusic</span>
                    </a>
                    <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="flex items-center gap-2 hover:text-nicmic-orange-hover transition-colors duration-200"
                        aria-live="polite"
                        aria-label="Copy email address"
                    >
                        <HiOutlineMail size={24} />
                        <span className="font-subtitle">
                            {copied ? "Email copied." : "Email"}
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}
