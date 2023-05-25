import Image from 'next/image'
import Layout from '../components/Layout'

export default function AboutPage() {
    return (
        <Layout>
            <div className=" border-mountain-blue text-left h-auto border-2 pl-12 pt-6 pb-6 pr-12 rounded-lg flex items-center justify-center bg-gradient-to-b from-blue to-dark-blue bg-opacity-60">
                <p className="max-w-md">
                    I was raised in California and Oslo. This experience shaped
                    me and my music. I grew up reading fantasy novels and
                    listening to movie soundtracks. I started producing music in
                    2010 and playing the piano when I was 13, after watching my
                    mom play the Turkish March by Mozart. I memorized every note
                    and I didn’t stop until I could play it. I continued
                    watching YouTube tutorials, took piano lessons and attended
                    classes in music production, sound engineering and film
                    music. <br></br> <br></br>I draw inspiration from classical
                    music, Hans Zimmer and Dua Lipa. We all have our ups and
                    downs and that is reflected in my music. Some tracks are
                    more danceable and upbeat while others are inspiring and
                    somber.
                </p>
                <div className="rounded-full overflow-hidden w-72 h-72">
                    <Image
                        className="object-cover"
                        width={500}
                        height={500}
                        src="/nicmicabove.png"
                        alt="nicmic smiling"
                    />
                </div>
            </div>
        </Layout>
    )
}
