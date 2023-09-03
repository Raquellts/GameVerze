export interface GameDetails {
  [key: string]: {
    success: boolean;
    data: SteamGame;
  };
}

export interface SteamGame {
  type: string;
  name: string;
  steam_appid: number;
  required_age: number;
  is_free: boolean;
  detailed_description: string;
  about_the_game: string;
  short_description: string;
  supported_languages: string;
  header_image: string;
  capsule_image: string;
  website: string;
  pc_requirements: Requirements;
  mac_requirements: Requirements;
  linux_requirements: Requirements;
  legal_notice: string;
  developers: string[];
  publishers: string[];
  price_overview: PriceOverview;
  platforms: Platforms;
  metacritic: Metacritic;
  categories: Category[];
  genres: Genre[];
  screenshots: Screenshot[];
  movies: Movie[];
  recommendations: Recommendations;
  achievements: Achievements;
  release_date: ReleaseDate;
  support_info: SupportInfo;
  background: string;
}

export interface Requirements {
  minimum: string;
  recommended?: string;
}

export interface PriceOverview {
  currency: string;
  initial: number;
  final: number;
  discount_percent: number;
  initial_formatted: string;
  final_formatted: string;
}

export interface Platforms {
  windows: boolean;
  mac: boolean;
  linux: boolean;
}

export interface Metacritic {
  score: number;
  url: string;
}

export interface Category {
  id: number;
  description: string;
}

export interface Genre {
  id: string;
  description: string;
}

export interface Screenshot {
  id: number;
  path_thumbnail: string;
  path_full: string;
}

export interface Movie {
  id: number;
  name: string;
  thumbnail: string;
  webm: {
    480: string;
    max: string;
  };
  mp4: {
    480: string;
    max: string;
  };
  highlight: boolean;
}

export interface Recommendations {
  total: number;
}

export interface Achievements {
  total: number;
  highlighted: HighlightedAchievement[];
}

export interface HighlightedAchievement {
  name: string;
  path: string;
}

export interface ReleaseDate {
  coming_soon: boolean;
  date: string;
}

export interface SupportInfo {
  url: string;
  email: string;
}

// Add other relevant interfaces as needed
