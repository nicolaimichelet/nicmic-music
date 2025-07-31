"use client"
import Image from 'next/image'
import { FaSpotify, FaYoutube, FaInstagram } from 'react-icons/fa';
import { SiSoundcloud } from 'react-icons/si';


// Nicmic color palette
const colors = {
  primary: "'#3b82f6'", // Blue
  secondary: "'#8b5cf6'", // Purple
  accent: "'#f59e0b'", // Amber
  background: "'#1f2937'", // Dark blue-gray
  text: "'#f3f4f6'", // Light gray
}


const icons = [
  { name: "Soundcloud", Icon: SiSoundcloud, url: "https://soundcloud.com/nicmicmusic" },
  { name: "Spotify", Icon: FaSpotify, url: "https://open.spotify.com/artist/1ahjhkpk4VmdiQ7dNWYLeR" },
  { name: "Youtube", Icon: FaYoutube, url: "https://www.youtube.com/c/nicmicmusic" },
  { name: "Instagram", Icon: FaInstagram, url: "https://www.instagram.com/nicmicmusic/" },
];

export default function NicmicMusic() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden font-montserrat" style={{ backgroundColor: colors.background }}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 opacity-50 z-0"></div>
      <div className="absolute inset-0 z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/nicmic-piano.jpg"
          className="w-full h-full object-cover opacity-80"
        >
          <source src="/nicmic.mp4" type="video/mp4" />
          {/* Fallback to image if video fails to load */}
          <img src="/nicmic-piano.jpg" alt="nicmic at the piano" className="w-full h-full object-cover opacity-80" />
        </video>
      </div>
      <div className="z-30 flex flex-col items-center justify-center text-center">
        <Image
          src="/nicmic_text_white.png"
          alt="nicmic logo"
          width={300}
          height={100}
          className="mb-4 animate-fade-in"
        />
        <div className="flex space-x-6 mb-8">
          {icons.map((icon, index) => (
            <a
              key={icon.name}
              href={icon.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-900 transition-all duration-300 animate-fade-in hover:scale-110"
              style={{ animationDelay: `${(index + 2) * 150}ms` }}
            >
              <icon.Icon size={30} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

