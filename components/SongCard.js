import Image from 'next/image'

export default function SongCard({ description, source, alt, style }) {
    return (
        <div
            style={style}
            className="group absolute top-0 left-0 cursor-overflow-hidden max-w-4xl max-h-4xl transition-shadow hover:shadow-xl hover:scale-110"
        >
            <Image
                className="h-full w-full object-contain rounded-lg transition-transform max-w-4xl max-h-4xl duration-500 group-hover:scale-110 group-hover:opacity-100"
                src={source}
                alt={alt}
                width={3000}
                height={3000}
            />
        </div>
    )
}
