import { notFound } from "next/navigation";
import AudioPlayer from "@/components/AudioPlayer";

const TOKENS: Record<string, { title: string; audio: string }> = {
    "1-l3k9q2z": {
        title: "Reclaim • Day 1",
        audio: "/reclaim/d1_v9k2q6a3.mp3",
    },
    "2-q8n5c1a": {
        title: "Reclaim • Day 2",
        audio: "/reclaim/d2_x4b7m9t2.mp3",
    },
    "3-u7p0d4n": {
        title: "Reclaim • Day 3",
        audio: "/reclaim/d3_r1n8c5z7.mp3",
    },
    "4-h5k8v2b": {
        title: "Reclaim • Day 4",
        audio: "/reclaim/d4_m6q2j9f1.mp3",
    },
    "5-y3m9t6e": {
        title: "Reclaim • Day 5",
        audio: "/reclaim/d5_t8h3w4p9.mp3",
    },
    "6-s4c1r8w": {
        title: "Reclaim • Day 6",
        audio: "/reclaim/d6_c7l5x2v8.mp3",
    },
    "7-n2j6x5q": {
        title: "Reclaim • Day 7",
        audio: "/reclaim/d7_p3s9d1k6.mp3",
    },
};

export default async function Page({
    params,
}: {
    params: Promise<{ token: string }>;
}) {
    const { token } = await params;
    const spec = TOKENS[token];
    if (!spec) return notFound(); // invalid token → 404

    return (
        <main className="mx-auto max-w-xl p-6">
            <meta name="robots" content="noindex,nofollow" />
            <h1 className="text-xl font-semibold mb-4 text-white font-title">
                {spec.title}
            </h1>
            <AudioPlayer src={spec.audio} title="Listen" />
            {/* Put the day's short story/challenge text here */}
            {/* For Day 7, place your Typeform embed below the player */}
        </main>
    );
}
