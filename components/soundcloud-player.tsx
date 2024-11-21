export default function SoundcloudPlayer() {
  return (
    <section className="w-full bg-gray-900 py-16 font-fantasy">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-2 text-center animate-fade-in">Music</h2>
        <p className="text-xl text-gray-300 mb-8 text-center animate-fade-in animation-delay-300">Step into nicmic&apos;s world</p>
        <div className="animate-fade-in animation-delay-500">
          <iframe 
            width="100%" 
            height="450" 
            scrolling="no" 
            frameBorder="no" 
            allow="autoplay" 
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1910677079&color=%232e3038&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            className="rounded-lg shadow-lg"
          ></iframe>
          <div className="text-xs text-gray-400 mt-2 text-center">
            <a href="https://soundcloud.com/nicmicmusic" title="nicmic" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">nicmic</a> · <a href="https://soundcloud.com/nicmicmusic/sets/nicmic" title="nicmic" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">nicmic</a>
          </div>
        </div>
      </div>
    </section>
  )
}

