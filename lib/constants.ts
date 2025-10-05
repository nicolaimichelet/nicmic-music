// Social Media Links
export const SOCIAL_LINKS = {
    soundcloud: "https://soundcloud.com/nicmicmusic",
    spotify: "https://open.spotify.com/artist/1ahjhkpk4VmdiQ7dNWYLeR",
    apple: "https://music.apple.com/us/artist/nicmic/1479419475",
    substack: "https://nicmicmusic.substack.com",
    youtube: "https://www.youtube.com/c/nicmicmusic",
    instagram: "https://www.instagram.com/nicmicmusic/",
} as const;

// Color Palette
export const COLORS = {
    primary: "#3b82f6", // Blue
    secondary: "#8b5cf6", // Purple
    accent: "#f59e0b", // Amber
    background: "#1f2937", // Dark blue-gray
    text: "#f3f4f6", // Light gray
} as const;

// Site Configuration
export const SITE_CONFIG = {
    title: "Nicmic Music",
    description: "Follow the feeling",
    logo: "/nicmic_logo_white.png",
    backgroundVideo: "/nicmic.mp4",
    backgroundImage: "/nicmic-piano.jpg",
} as const;

// Audio Player Configuration
export const AUDIO_CONFIG = {
    defaultVolume: 0.7,
    autoplay: false,
    showProgress: true,
} as const;
