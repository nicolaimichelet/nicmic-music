import Image from "next/image";

export default function SongCard({ description, source, alt }) {
    return (
        <div className="group rounded-xl relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-72 w-84">
                <Image
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125 group-hover:opacity-80"
                    src={source}
                    alt={alt}
                    width={3000}
                    height={3000}
                />

                <img />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {description}
                </p>
                <button className="rounded-full bg-cover py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                    Buy
                </button>
            </div>
        </div>
    );
}
