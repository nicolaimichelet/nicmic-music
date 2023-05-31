import Image from 'next/image'
import Link from 'next/link'
import { useSwiperSlide } from 'swiper/react'

export default function SongCard({
    source,
    alt,
    description,
    spotifyLink,
    appleMusicLink,
    buyNowLink,
    isActive,
}) {
    const swiperSlide = useSwiperSlide()

    return (
        <div className="flex flex-col items-center">
            <Image
                className="w-[14rem] h-[14rem] md:w-[16rem] md:h-[16rem] lg:w-[18rem] lg:h-[18rem] object-contain rounded-lg duration-500 group-hover:opacity-100 transition-shadow hover:shadow-xl"
                src={source}
                alt={alt}
                width={3000}
                height={3000}
            />
            <div
                className={`song-card ${
                    swiperSlide.isActive ? 'activeSongCard' : 'inactive'
                }`}
            >
                {swiperSlide.isActive ? (
                    <div className="w-min flex flex-col m-8">
                        <p className="text-xs  min-h-[80px]">{description}</p>
                        <div className="flex justify-evenly items-center m-2">
                            <p className="text-base mr-1">Listen</p>
                            <Link target="_blank" href={spotifyLink}>
                                <svg
                                    className="m-1 cursor-pointer hover:scale-125 hover:fill-extra-sky-blue dark:hover:fill-dark-blue hover:transition hover:ease-in-out"
                                    fill="#ffffff"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 50 50"
                                    width="24px"
                                    height="24px"
                                >
                                    <path d="M25.009,1.982C12.322,1.982,2,12.304,2,24.991S12.322,48,25.009,48s23.009-10.321,23.009-23.009S37.696,1.982,25.009,1.982z M34.748,35.333c-0.289,0.434-0.765,0.668-1.25,0.668c-0.286,0-0.575-0.081-0.831-0.252C30.194,34.1,26,33,22.5,33.001c-3.714,0.002-6.498,0.914-6.526,0.923c-0.784,0.266-1.635-0.162-1.897-0.948s0.163-1.636,0.949-1.897c0.132-0.044,3.279-1.075,7.474-1.077C26,30,30.868,30.944,34.332,33.253C35.022,33.713,35.208,34.644,34.748,35.333z M37.74,29.193c-0.325,0.522-0.886,0.809-1.459,0.809c-0.31,0-0.624-0.083-0.906-0.26c-4.484-2.794-9.092-3.385-13.062-3.35c-4.482,0.04-8.066,0.895-8.127,0.913c-0.907,0.258-1.861-0.272-2.12-1.183c-0.259-0.913,0.272-1.862,1.184-2.12c0.277-0.079,3.854-0.959,8.751-1c4.465-0.037,10.029,0.61,15.191,3.826C37.995,27.328,38.242,28.388,37.74,29.193z M40.725,22.013C40.352,22.647,39.684,23,38.998,23c-0.344,0-0.692-0.089-1.011-0.275c-5.226-3.068-11.58-3.719-15.99-3.725c-0.021,0-0.042,0-0.063,0c-5.333,0-9.44,0.938-9.481,0.948c-1.078,0.247-2.151-0.419-2.401-1.495c-0.25-1.075,0.417-2.149,1.492-2.4C11.729,16.01,16.117,15,21.934,15c0.023,0,0.046,0,0.069,0c4.905,0.007,12.011,0.753,18.01,4.275C40.965,19.835,41.284,21.061,40.725,22.013z" />
                                </svg>
                            </Link>
                            <Link target="_blank" href={appleMusicLink}>
                                <svg
                                    className="m-1 mr-4 cursor-pointer hover:scale-125 hover:fill-extra-sky-blue dark:hover:fill-dark-blue hover:transition hover:ease-in-out"
                                    fill="#FFFFFF"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 50 50"
                                    width="24px"
                                    height="24px"
                                >
                                    <path d="M37,4H13c-4.962,0-9,4.037-9,9v24c0,4.963,4.038,9,9,9h24c4.962,0,9-4.037,9-9V13C46,8.037,41.962,4,37,4z M35,27v4v0.021	h-0.002C34.986,33.768,32.749,36,30,36h-0.5c-0.987,0-1.933-0.42-2.596-1.152c-0.662-0.731-0.985-1.718-0.887-2.705	C26.195,30.38,27.787,29,29.643,29H31c1.103,0,2-0.897,2-2v-9.795l-12,2.25V30v4c0,2.757-2.243,5-5,5h-0.5	c-0.987,0-1.933-0.42-2.596-1.152c-0.662-0.731-0.985-1.718-0.887-2.705C12.195,33.38,13.787,32,15.643,32H17c1.103,0,2-0.897,2-2	V15.353c0-0.963,0.687-1.79,1.633-1.966l12.591-2.36c0.439-0.083,0.891,0.033,1.234,0.319C34.803,11.632,35,12.053,35,12.5V27z" />
                                </svg>
                            </Link>
                            <a target="_blank" href={buyNowLink}>
                                <button className="bg-yellow h-10 w-52 min-w-[40px] max-w-[120px] p-1 text-pale-blue font-semibold rounded-lg shadow-sm">
                                    Buy now
                                </button>
                            </a>
                        </div>
                    </div>
                ) : (
                    <>
                        <span className="spotify-link skeleton"></span>
                        <span className="apple-music-link skeleton"></span>
                        <span className="buy-now-link skeleton"></span>
                    </>
                )}
            </div>
        </div>
    )
}
