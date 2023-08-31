export interface GameInfo {
  id: number;
  name: string;
  short_desc: string;
  release_date: number;
  upcoming: boolean;
  delisted: boolean;
  cancelled: boolean;
  spotlight: boolean;
  lowest_price: number;
  highest_discount: number;
  developers: number[];
  publishers: number[];
  platforms: Platform[];
  age_ratings: AgeRating[];
}

export interface Platform {
  name: string;
  slug: string;
  icon: string;
}

export interface AgeRating {
  id: string;
  name: string;
}

export interface GameDeal {
  type: string;
  title: string;
  text: string;
  slug: string;
  image: string;
  game_info: GameInfo;
}

export interface APIResponse {
  success: boolean;
  message: string;
  results: {
    page: number;
    pages: number;
    shown: number;
    total: number;
    items: GameDeal[];
    pagination: string;
  };
}
