import Link from "next/link";
import { SOCIAL_LINKS } from "../lib/constants";

type ShopButtonProps = {
    className?: string;
};

export default function ShopButton({ className = "" }: ShopButtonProps) {
    return (
        <Link
            href={SOCIAL_LINKS.shop}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-[11px] uppercase tracking-[3px] text-textMuted no-underline opacity-40 transition-opacity duration-500 transition-colors hover:opacity-80 hover:text-accent ${className}`}
        >
            Shop
        </Link>
    );
}
