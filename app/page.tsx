import NicmicMusic from '../components/nicmic-music'
import SoundcloudPlayer from '../components/soundcloud-player'
import Story from '../components/story'
import Portal from '../components/portal'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className="font-fantasy">
      <section id="home">
        <NicmicMusic />
      </section>
      <section id="music">
        <SoundcloudPlayer />
      </section>
      <section id="story">
        <Story />
      </section>
      <section id="portal">
        <Portal />
      </section>
      <Footer />
    </div>
  )
}

