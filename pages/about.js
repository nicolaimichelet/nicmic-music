import Image from 'next/image'
import Layout from '../components/Layout'

export default function AboutPage() {
    return (
        <Layout>
            <div className=" border-mountain-blue text-left h-auto border-2 pl-12 pt-6 pb-6 pr-12 rounded-lg flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-mountain-blue to-nicmic-black-blue bg-opacity-60">
                <p className="max-w-md">
                    I was raised in California and Oslo and this dual experience
                    shaped me and my music. I grew up reading fantasy novels and
                    listening to movie soundtracks as I tried to navigate two
                    worlds. I found relief in producing music and playing piano.
                    After watching my mom play the Turkish March by Mozart, I
                    memorized every note and I didn&apos;t stop until I could
                    play it myself. I continued watching YouTube tutorials, took
                    piano lessons and attended classes in music production,
                    sound engineering and film music. <br></br> <br></br>I draw
                    inspiration from classical music, soundtracks, Hans Zimmer,
                    OneRepublic, Imagine Dragons and Dua Lipa. We all have our
                    ups and downs and I hope to reflect that in music. Some
                    tracks are more danceable while others are inspiring. My
                    goal is to create cinematic pop music that is infectious,
                    meaningful, and transports you to new worlds. If you&apos;ve
                    ever feel torn between two cultures I hope you find a home
                    here.
                </p>
                <Image
                    className="object-cover rounded-full overflow-hidden mt-8 md:mt-0 h-fit"
                    width={300}
                    height={300}
                    src="/nicmicabove.png"
                    alt="nicmic smiling"
                />
            </div>
        </Layout>
    )
}
