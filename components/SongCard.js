import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function SongCard({
    description,
    source,
    alt,
    rotation,
    isActive,
    isInactive,
    index,
}) {
    return (
        <div
            className={`group flex justify-center w-full absolute top-0 left-0 cursor-overflow-hidden  transition-shadow hover:shadow-xl ${
                isActive ? 'z-10' : 'z-0'
            }`}
            style={{
                transform: `rotate(${isActive ? 0 : rotation}deg) translateX(${
                    isInactive ? '300%' : '0'
                })`,
                transition: 'transform 0.5s ease-in-out',
            }}
        >
            <Image
                className="w-[16rem] h-[16rem] md:w-[32rem] md:h-[32rem] lg:w-[40rem] lg:h-[40rem] object-contain rounded-lg transition-transform duration-500 group-hover:scale-110 group-hover:opacity-100"
                src={source}
                alt={alt}
                width={3000}
                height={3000}
            />
        </div>
    )
}
