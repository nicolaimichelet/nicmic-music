"use client"

import { useEffect, useRef, useState } from 'react'

export default function Story() {
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
    <section className="w-full bg-gray-800 py-16 font-fantasy" ref={ref}>
      <div className={`max-w-4xl mx-auto px-4 transition-opacity duration-1000 ${isVisible ? "'opacity-100'" : "'opacity-0'"}`}>
        <h2 className="text-4xl font-bold text-white mb-6 text-center">Follow the feeling...</h2>
        <div className="text-xl text-gray-300 space-y-8 text-center">
          <p>
            Nicmic&apos;s music is a call to embrace the unknown and transform it.
          </p>
          <p>
          Nicmic&apos;s sonic palette blends timeless elegance of classical music with the grandeur of cinematic scores and infectious energy of pop. His influences range from Mozart, Hans Zimmer, and Imagine Dragons. By fusing orchestral elements and piano with atmospheric soundscapes Nicmic invites you to follow the feeling.</p>
        </div>
      </div>
    </section>
  )
}

