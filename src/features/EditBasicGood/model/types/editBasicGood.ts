export interface EditBasic {
  [x: string]: any;
  _id: string;
  name: string;
  price: number;
  salePrice: boolean;
  bestSellers: boolean;
  sellingHits: boolean;
  oldPrice: number;
  sale: number;
  releaseDate: string;
  genre: string;
  image?: string;
  images: string[];
  intro: string;
  description: string;
  keywords: string;
  metaOgTitle: string;
  metaDescription: string;
  metaOgImage: string;
  metaOgUrl: string;
  canonical: string;
  link?: string;
  comments: any[];
  keys: string[];
  purchasedKeys: string[];
}

export interface EditBasicGoodSchema {
  data?: EditBasic;
  isLoading: boolean;
  error?: string;
}