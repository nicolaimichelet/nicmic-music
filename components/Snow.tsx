"use client";

import { useMemo, useEffect, useState } from "react";

const DESKTOP_COUNT = 50;
const MOBILE_COUNT = 25;

function getCount() {
    if (typeof window === "undefined") return DESKTOP_COUNT;
    return window.innerWidth < 600 ? MOBILE_COUNT : DESKTOP_COUNT;
}

export default function Snow() {
    const [count, setCount] = useState(DESKTOP_COUNT);

    useEffect(() => {
        setCount(getCount());
        const onResize = () => setCount(getCount());
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const flakes = useMemo(() => {
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            size: 1 + Math.random() * 2,
            drift: -30 + Math.random() * 60,
            duration: 12 + Math.random() * 20,
            delay: Math.random() * 30,
            opacity: 0.1 + Math.random() * 0.25,
        }));
    }, [count]);

    return (
        <div
            className="fixed inset-0 pointer-events-none z-[1000] overflow-hidden"
            aria-hidden
        >
            {flakes.map((f) => (
                <div
                    key={f.id}
                    className="absolute rounded-full bg-white animate-snowfall"
                    style={{
                        left: f.left,
                        width: f.size,
                        height: f.size,
                        ["--snow-drift" as string]: `${f.drift}px`,
                        ["--snow-opacity" as string]: f.opacity,
                        animationDuration: `${f.duration}s`,
                        animationDelay: `-${f.delay}s`,
                    }}
                />
            ))}
        </div>
    );
}
