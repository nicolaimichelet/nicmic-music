"use client";

import { useEffect, useState, useRef } from "react";

export default function AmbientGlow() {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(false);
    const raf = useRef<number>(0);
    const target = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const isTouch =
            typeof window !== "undefined" &&
            ("ontouchstart" in window || navigator.maxTouchPoints > 0);
        if (isTouch) return;

        setVisible(true);
        setPos({
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
        });
        target.current = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
        };

        const handleMove = (e: MouseEvent) => {
            target.current = { x: e.clientX, y: e.clientY };
        };

        const update = () => {
            setPos((p) => ({
                x: p.x + (target.current.x - p.x) * 0.05,
                y: p.y + (target.current.y - p.y) * 0.05,
            }));
            raf.current = requestAnimationFrame(update);
        };
        raf.current = requestAnimationFrame(update);
        window.addEventListener("mousemove", handleMove);
        return () => {
            window.removeEventListener("mousemove", handleMove);
            cancelAnimationFrame(raf.current);
        };
    }, []);

    if (!visible) return null;

    return (
        <div
            className="fixed rounded-full pointer-events-none z-[1] transition-[left,top] duration-[1500ms] ease-out"
            style={{
                width: 600,
                height: 600,
                left: pos.x,
                top: pos.y,
                transform: "translate(-50%, -50%)",
                background:
                    "radial-gradient(circle, rgba(142,194,232,0.015) 0%, transparent 70%)",
            }}
            aria-hidden
        />
    );
}
