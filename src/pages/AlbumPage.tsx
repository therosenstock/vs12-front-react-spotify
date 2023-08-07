import { useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import { Container} from "@mui/material";
import {AlbumTracks, Hero, Loading} from "../components";
import {Album} from "../models";
import {getAlbum} from "../api";

export const AlbumPage = () => {
  const { id } = useParams();
  const [album, setAlbum] = useState<Album>()
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return

    setLoading(true);
    getAlbum(id)
      .then((album) => setAlbum(album))
      .finally(() => {
        setTimeout(() => setLoading(false), 400)
      })
  }, [id])

  if (loading) {
    return <Loading>Buscando álbum</Loading>
  }

  if (!album) {
    return <></>
  }

  return (
    <>
      <Hero title={album.name} url={album.images[0].url} />
      <Container sx={{ mt: 2 }}>
        <AlbumTracks album={album} />
      </Container>
    </>
  )
}