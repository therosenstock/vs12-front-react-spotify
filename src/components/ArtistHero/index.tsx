import {Artist} from "../../models";
import {Hero} from "../Hero";

export type ArtistHeroProps = {
  artist: Artist
}

export const ArtistHero = ({ artist }: ArtistHeroProps) => {
  return <Hero title={artist.name} url={artist.images[0].url} />
}