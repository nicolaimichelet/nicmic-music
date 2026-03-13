"use client";

import { useState } from "react";
import MainLandingPage from "../components/main-landing-page";
import Footer from "../components/footer";
import Snow from "../components/Snow";
import AmbientGlow from "../components/AmbientGlow";
import Navigation from "../components/Navigation";
import WorkView from "../components/WorkView";

type Mode = "music" | "work";

export default function Home() {
    const [mode, setMode] = useState<Mode>("music");

    return (
        <div className="min-h-screen bg-background relative">
            <AmbientGlow mode={mode} />
            <Snow />
            <Navigation mode={mode} onSelect={setMode} />
            <main className="pt-20">
                {mode === "music" ? (
                    <>
                        <MainLandingPage />
                        <Footer />
                    </>
                ) : (
                    <WorkView />
                )}
            </main>
        </div>
    );
}
