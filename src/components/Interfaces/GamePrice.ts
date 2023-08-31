export interface Store {
  name: string;
  image: string;
  type: string;
  official: boolean;
}

export interface Coupon {
  available: boolean;
  discount: number;
  code: string;
  price_without: number;
  terms: string;
}

export interface PriceListItem {
  url: string;
  store: Store;
  edition: string;
  edition_full: string;
  region: string;
  available: boolean;
  price: number;
  discount: number;
  coupon: Coupon;
}

export interface PricesInfo {
  currency: string;
  lowest: number;
  highest: number;
  stores: number;
  offers: number;
  editions: string[];
  regions: string[];
  list: PriceListItem[];
}

export interface GameInfo {
  id: number;
  name: string;
  slug: string;
  cover: string;
  banner: string;
  release: number;
}

export interface GameResponse {
  success: boolean;
  message: string;
  info: GameInfo;
  prices: PricesInfo;
}
