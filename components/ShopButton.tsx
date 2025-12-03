import Link from "next/link";

export default function ShopButton() {
    return (
        <Link
            href="https://nicmic-music.myshopify.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="
                inline-flex items-center justify-center
                px-8 py-3
                border border-nicmic-text/80
                text-lg font-title tracking-wide
                text-nicmic-text
                rounded-md
                bg-white/10
                backdrop-blur-xs
                shadow-sm
                transition-all
                duration-200
                ease-out
                hover:-translate-y-0.5
                hover:scale-[1.03]
                hover:shadow-lg
                hover:bg-white/40
                hover:text-[#111827]
                active:translate-y-0
                active:scale-100
            "
        >
            Enter Shop
        </Link>
    );
}
