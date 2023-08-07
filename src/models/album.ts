export interface Album {
  id: string;
  name: string;
  release_date: string;
  genres: string[]
  images: {
    url: string;
    height: number;
    width: number
  }[]
}