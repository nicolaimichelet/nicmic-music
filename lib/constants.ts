// Social Media Links
export const SOCIAL_LINKS = {
    soundcloud: "https://soundcloud.com/nicmicmusic",
    spotify: "https://open.spotify.com/artist/1ahjhkpk4VmdiQ7dNWYLeR",
    apple: "https://music.apple.com/us/artist/nicmic/1479419475",
    youtube: "https://www.youtube.com/c/nicmicmusic",
    instagram: "https://www.instagram.com/nicmicmusic/",
    shop: "https://nicmic-music.myshopify.com/",
} as const;

// Color Palette — Midnight Frost
export const COLORS = {
    background: "#0d1320",
    backgroundDeep: "#090e18",
    text: "#d4dfe9",
    textMuted: "#6889a8",
    accent: "#8ec2e8",
    accentDim: "#5a94b8",
    border: "rgba(142, 194, 232, 0.07)",
    glow: "rgba(142, 194, 232, 0.10)",
    warm: "#c4956a",
} as const;

// Site Configuration
export const SITE_CONFIG = {
    title: "Nicmic Music",
    description: "Follow the feeling",
    logo: "/nicmic%20light%20logo.png",
    backgroundVideo: "/nicmic.mp4",
    backgroundImage: "/nicmic-piano.jpg",
} as const;

// Audio Player Configuration (kept for potential future use)
export const AUDIO_CONFIG = {
    defaultVolume: 0.7,
    autoplay: false,
    showProgress: true,
} as const;
