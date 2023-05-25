import Image from 'next/image'

export default function SongCard({ source, alt }) {
    return (
        <div>
            <Image
                className="w-[16rem] h-[16rem] md:w-[24rem] md:h-[24rem] lg:w-[30rem] lg:h-[30rem] object-contain rounded-lg transition-transform duration-500 group-hover:scale-110 group-hover:opacity-100 cursor-overflow-hidden  transition-shadow hover:shadow-xl"
                src={source}
                alt={alt}
                width={3000}
                height={3000}
            />
        </div>
    )
}
