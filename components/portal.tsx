"use client"

import { useEffect, useRef, useState } from 'react'
import { Button } from "@/components/ui/button"

export default function Portal() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )
    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <section className="w-full bg-gray-900 py-16 font-fantasy" ref={ref}>
      <div className={`max-w-4xl mx-auto px-4 transition-opacity duration-1000 ${isVisible ? "'opacity-100'" : "'opacity-0'"}`}>
        <h2 className="text-4xl font-bold text-white mb-2 text-center">Portal</h2>
        <div className="text-center text-gray-300 space-y-4">
          <Button 
            variant="secondary" 
            className="mt-6 bg-[#43b2d0] text-white hover:bg-[#3a9eb9] transition-all duration-300 shadow-[0_0_15px_rgba(67,178,208,0.5)] hover:shadow-[0_0_20px_rgba(67,178,208,0.7)]"
          >
            <a href="https://www.instagram.com/nicmicmusic/" target="_blank" rel="noopener noreferrer" className="px-4 py-2">
              Connect with nicmic
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

