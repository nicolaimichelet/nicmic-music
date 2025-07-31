// Social Media Icon Interface
export interface SocialIcon {
  name: string;
  Icon: React.ComponentType<{ size?: number }>;
  url: string;
  color?: string;
}

// Audio Track Interface
export interface AudioTrack {
  id: string;
  title: string;
  artist: string;
  duration: number;
  url: string;
  artwork?: string;
  releaseDate?: string;
}

// Countdown Timer Interface
export interface CountdownTimer {
  targetDate: Date;
  title: string;
  description?: string;
}

// Newsletter Subscription Interface
export interface NewsletterSubscription {
  email: string;
  subscribedAt: Date;
  preferences?: {
    newReleases: boolean;
    behindTheScenes: boolean;
    exclusiveContent: boolean;
  };
}

// Site Section Interface
export interface SiteSection {
  id: string;
  title: string;
  component: React.ComponentType;
  visible: boolean;
  order: number;
} 