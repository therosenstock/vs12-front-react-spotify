import { useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getArtist} from "../api";
import { Container} from "@mui/material";
import {ArtistAlbums, ArtistHero, Loading} from "../components";
import {Artist} from "../models";

export const ArtistaPage = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState<Artist>()
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return

    setLoading(true);
    getArtist(id)
      .then((artist) => setArtist(artist))
      .finally(() => {
        setTimeout(() => setLoading(false), 400)
      })
  }, [id])

  if (loading) {
    return <Loading>Buscando artista</Loading>
  }

  if (!artist) {
    return <></>
  }

  return (
    <>
      <ArtistHero artist={artist} />
      <Container sx={{ mt: 2 }}>
        <ArtistAlbums artist={artist} />
      </Container>
    </>
  )
}