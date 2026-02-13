import MainLandingPage from "../components/main-landing-page";
import Footer from "../components/footer";
import Snow from "../components/Snow";
import AmbientGlow from "../components/AmbientGlow";

export default function Home() {
    return (
        <div className="min-h-screen bg-background">
            <AmbientGlow />
            <Snow />
            <MainLandingPage />
            <Footer />
        </div>
    );
}
