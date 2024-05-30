export interface UnsplashImage {
  id: string;
  urls: {
    small: string;
    full?: string;
    regular: string;
  };
  alt_description: string;
}

export interface FetchImagesResponse {
  results: UnsplashImage[];
  total: number;
  total_pages: number;
}