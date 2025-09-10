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
            <div className="mx-auto max-w-6xl space-y-12 md:space-y-16">
                {/* Row 1: Nicmic Origins full width */}
                <div className="mx-auto md:max-w-md lg:max-w-lg xl:max-w-xl p-4 md:p-6">
                    <div className="relative aspect-square w-full overflow-hidden rounded-md">
                        <video
                            className="absolute inset-0 h-full w-full object-contain"
                            autoPlay
                            muted
                            loop
                            playsInline
                            controls={false}
                            controlsList="nodownload noplaybackrate nofullscreen"
                            disablePictureInPicture
                            poster="/origins.jpg"
                        >
                            <source src="/origins.mp4" type="video/mp4" />
                            <Image
                                src="/origins.jpg"
                                alt="Nicmic: Origins"
                                fill
                                className="object-contain"
                            />
                        </video>
                    </div>
                    <div className="mt-3">
                        <h1 className="text-2xl font-semibold font-title">
                            nicmic:origins
                        </h1>
                        <p className="mt-1 text-sm leading-relaxed opacity-90">
                            The opening story of nicmic. Coming soon.
                        </p>
                    </div>
                </div>

                {/* Row 2: Reclaim + Feel side-by-side on md+ */}
                <div className="grid grid-cols-1 gap-10 md:gap-12 md:grid-cols-2">
                    <PortfolioCard
                        media={
                            <div className="relative aspect-video w-full">
                                <Image
                                    src="/reclaim.jpg"
                                    alt="Reclaim"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    unoptimized
                                />
                            </div>
                        }
                        title="Reclaim"
                        description="A seven day challenge to reclaim your attention and focus. You can sign up below to get started. Seven emails in seven days. After you confirm you email, the challenge starts. If you do not receive any email, check your Promotion or Spam folder. Good luck!"
                        form={<MailerLiteForm formId="164353110797452585" />}
                    />

                    <PortfolioCard
                        media={
                            <div className="relative aspect-video w-full">
                                <video
                                    className="absolute inset-0 h-full w-full object-contain"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    controls={false}
                                    controlsList="nodownload noplaybackrate nofullscreen"
                                    disablePictureInPicture
                                    poster="/feelcollection.jpg"
                                >
                                    <source
                                        src="/feelcollection.mp4"
                                        type="video/mp4"
                                    />
                                    {/* Fallback image if video unsupported */}
                                    <Image
                                        src="/feelcollection.jpg"
                                        alt="Feel collection"
                                        fill
                                        className="object-contain"
                                    />
                                </video>
                            </div>
                        }
                        title="Feel collection"
                        description="Short cinematic audio moments for clarity, rest or focus. Coming soon."
                    />
                </div>
            </div>
        </section>
    );
}
