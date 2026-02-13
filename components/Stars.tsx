"use client";

import { useMemo } from "react";

type StarsProps = {
    count: number;
};

export default function Stars({ count }: StarsProps) {
    const stars = useMemo(() => {
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            left: `${5 + Math.random() * 90}%`,
            top: `${5 + Math.random() * 90}%`,
            size: 1 + Math.random() * 1.8,
            maxOpacity: 0.08 + Math.random() * 0.25,
            duration: 3 + Math.random() * 5,
            delay: Math.random() * 5,
        }));
    }, [count]);

    return (
        <div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            aria-hidden
        >
            {stars.map((s) => (
                <span
                    key={s.id}
                    className="absolute rounded-full bg-accent"
                    style={{
                        left: s.left,
                        top: s.top,
                        width: s.size,
                        height: s.size,
                        ["--star-max" as string]: s.maxOpacity,
                        animation: `starBreath ${s.duration}s ease-in-out -${s.delay}s infinite`,
                    }}
                />
            ))}
        </div>
    );
}
