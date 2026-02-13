"use client";

type MistProps = {
    className?: string;
    opacity?: number;
};

export default function Mist({ className = "", opacity = 1 }: MistProps) {
    return (
        <div
            className={`absolute w-[200%] h-full -left-1/2 top-0 pointer-events-none animate-mist-drift ${className}`}
            style={{
                opacity,
                background:
                    "radial-gradient(ellipse at 20% 80%, rgba(142,194,232,0.04) 0%, transparent 50%), radial-gradient(ellipse at 80% 60%, rgba(142,194,232,0.03) 0%, transparent 50%), radial-gradient(ellipse at 50% 90%, rgba(142,194,232,0.05) 0%, transparent 40%)",
            }}
            aria-hidden
        />
    );
}
