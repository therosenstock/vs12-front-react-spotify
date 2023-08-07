export interface Artist {
  id: string;
  name: string;
  genres: string[]
  images: {
    height: number;
    width: number;
    url: string;
  }[]
}