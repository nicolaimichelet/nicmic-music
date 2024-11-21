"use client"
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-8 font-fantasy">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Image
              src="/nicmic_text_white.svg"
              alt="nicmic logo"
              width={100}
              height={33}
            />
          </div>
          <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <button onClick={() => scrollToSection('home')} className="hover:text-gray-300">Home</button>
            <button onClick={() => scrollToSection('music')} className="hover:text-gray-300">Music</button>
            <button onClick={() => scrollToSection('story')} className="hover:text-gray-300">Story</button>
            <button onClick={() => scrollToSection('portal')} className="hover:text-gray-300">Portal</button>
          </nav>
        </div>
      </div>
    </footer>
  )
}

