import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="flex items-center absolute bottom-0 overflow-hidden bottom-0 justify-center text-center p-4 ht-16 w-full">
            <div className="w-full flex flex-col justify-center items-center">
                <div className="border-sky-blue border-2 p-4 w-4/6 mb-16">
                    Newsletter box
                </div>
                <div className="text-xs text-blue">About</div>
                <div className="flex items-center justify-center">
                    <Image
                        className="self-center mr-0 ml-4"
                        width="44"
                        height="44"
                        src="/nicmic_text_white.svg"
                        alt="nicmic logo"
                    />
                    <p className="ml-2 mt-2 text-xs opacity-60 text-blue">
                        2023
                    </p>
                </div>
            </div>
        </footer>
    )
}
