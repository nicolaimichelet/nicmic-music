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

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <section className="w-full bg-gray-800 py-16 font-fantasy" ref={ref}>
      <div className={`max-w-4xl mx-auto px-4 transition-opacity duration-1000 ${isVisible ? "'opacity-100'" : "'opacity-0'"}`}>
        <h2 className="text-4xl font-bold text-white mb-6 text-center">Story</h2>
        <div className="text-xl text-gray-300 space-y-8 text-center">
          <p>
            Raised in snowy Oslo and golden California, Nicmic´s music is a call to embrace the unknown and transform it. His tracks range from soaring, danceable anthems to immersive, cinematic compositions, mirroring life's highs and lows.
          </p>
          <p>
          Nicmic's sonic palette blends the timeless elegance of classical music with the grandeur of cinematic scores and the infectious energy of modern pop. His influences range from composers like Mozart, to cinematic legends such as Hans Zimmer, and modern pop artists like Imagine Dragons. By fusing orchestral elements and piano with atmospheric soundscapes all wrapped up in a modern production, Nicmic creates music that invites listeners on an emotional journey, where sound and storytelling collide.</p>
        </div>
      </div>
    </section>
  )
}

