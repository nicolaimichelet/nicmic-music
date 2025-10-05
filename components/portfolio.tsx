"use client";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const MailerLiteForm = dynamic(
    () =>
        Promise.resolve(function MailerLiteFormComponent({
            formId,
        }: {
            formId: string;
        }) {
            return (
                <iframe
                    src={`https://preview.mailerlite.io/forms/1771157/${formId}/share`}
                    width="100%"
                    height="300"
                    frameBorder="0"
                    className="rounded-md"
                />
            );
        }),
    {
        ssr: false,
        loading: () => (
            <div className="w-full h-20 bg-gray-800 rounded-md animate-pulse flex items-center justify-center">
                <span className="text-gray-400 text-sm">Loading form...</span>
            </div>
        ),
    }
);

type PortfolioCardProps = {
    media: React.ReactNode;
    title: string;
    description: string;
    href?: string;
    form?: React.ReactNode;
};

function PortfolioCard({
    media,
    title,
    description,
    href,
    form,
}: PortfolioCardProps) {
    const content = (
        <div className="flex flex-col p-4 md:p-6">
            <div className="w-full overflow-hidden rounded-md">{media}</div>
            <div className="mt-3 min-h-24">
                <h1 className="text-2xl font-semibold font-title">{title}</h1>
                <p className="mt-1 text-sm leading-relaxed opacity-90">
                    {description}
                </p>
            </div>
            {form && <div className="mt-4">{form}</div>}
        </div>
    );
    return href ? (
        <Link href={href} className="block">
            {content}
        </Link>
    ) : (
        content
    );
}

export default function Portfolio() {
    return (
        <section className="bg-[#111827] text-white px-4 md:px-6 py-16 md:py-24">
            <div className="mx-auto max-w-6xl">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold font-title mb-4">
                        Portfolio
                    </h2>
                </div>
            </div>
        </section>
    );
}
