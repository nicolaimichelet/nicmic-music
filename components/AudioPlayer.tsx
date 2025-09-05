export default function AudioPlayer({
    src,
    title = "Listen",
}: {
    src: string;
    title?: string;
}) {
    return (
        <div>
            <h2 className="text-lg font-medium mb-2 text-white">{title}</h2>
            <audio
                controls
                controlsList="nodownload"
                preload="none"
                src={src}
                className="w-full"
            />
        </div>
    );
}
