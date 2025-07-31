"use client"
import Image from 'next/image'

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-8 font-montserrat">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Image
              src="/nicmic_logo_white.png"
              alt="nicmic logo"
              width={60}
              height={60}
            />
          </div>
          <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <button onClick={() => scrollToSection('home')} className="hover:text-[#3ec5e3] transition-colors duration-300">Home</button>
            <button onClick={() => scrollToSection('music')} className="hover:text-[#3ec5e3] transition-colors duration-300">Music</button>
          </nav>
        </div>
         {/* Centered text below logo/nav */}
         <div className="mt-6 text-center text-sm tracking-wide">
          nicmic © 2025
        </div>
      </div>
    </footer>
  )
}

