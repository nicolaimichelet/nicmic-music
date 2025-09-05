import NicmicMusic from "../components/nicmic-music";
import Portfolio from "../components/portfolio";
import Portal from "../components/portal";
import Footer from "../components/footer";

export default function Home() {
    return (
        <div className="font-montserrat">
            <section id="home">
                <NicmicMusic />
            </section>
            <section id="music">
                <Portfolio />
            </section>
            <section id="portal">
                <Portal />
            </section>
            <Footer />
        </div>
    );
}
