"use client";

import type { ReactNode } from "react";

type WorkCardProps = {
    tag: string;
    title: string;
    description: string;
    embed?: ReactNode;
    featured?: boolean;
    comingSoon?: boolean;
};

export default function WorkCard({
    tag,
    title,
    description,
    embed,
    featured,
    comingSoon,
}: WorkCardProps) {
    return (
        <article
            className={`group relative overflow-hidden rounded-sm border border-[rgba(212,169,106,0.08)] bg-gradient-to-br from-[rgba(212,169,106,0.05)] to-[rgba(212,169,106,0.01)] transition-all duration-500 ${
                featured ? "md:col-span-full" : ""
            } ${
                comingSoon
                    ? "opacity-50"
                    : "hover:-translate-y-1 hover:border-[rgba(212,169,106,0.2)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.3),0_0_30px_rgba(212,169,106,0.05)]"
            }`}
        >
            <div className="w-full aspect-video bg-gradient-to-br from-[rgba(212,169,106,0.08)] to-[rgba(9,14,24,0.8)] flex items-center justify-center overflow-hidden">
                {embed ?? (
                    <div className="flex flex-col items-center justify-center gap-2 text-[10px] text-[rgba(212,169,106,0.4)] uppercase tracking-[0.2em]">
                        <span>coming soon</span>
                    </div>
                )}
            </div>
            <div className="px-5 py-4">
                <div className="mb-1 text-[10px] uppercase tracking-[0.26em] text-[rgba(212,169,106,0.55)]">
                    {tag}
                </div>
                <div className="mb-1 font-subtitle text-[1.2rem] text-[rgba(240,230,215,0.9)]">
                    {title}
                </div>
                <p className="text-[13px] leading-relaxed text-[rgba(200,220,240,0.6)]">
                    {description}
                </p>
            </div>
        </article>
    );
}

