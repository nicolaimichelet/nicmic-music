"use client"

export default function SoundcloudPlayer() {
  return (
    <section className="w-full bg-gray-900 py-16 font-montserrat">
      <div className="max-w-4xl mx-auto px-4">
        <div className="animate-fade-in animation-delay-500">
          <video
            className="rounded-lg shadow-lg w-full max-w-md md:max-w-lg mx-auto"
            controls
            controlsList="nodownload noplaybackrate"
            disablePictureInPicture
            playsInline
            preload="metadata"
            poster="/origins.jpg"
            onContextMenu={(e) => e.preventDefault()}
          >
            <source src="/origins.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  )
}

