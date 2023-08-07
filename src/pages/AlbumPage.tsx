import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import { AlbumTracks, Header, Hero, Loading } from "../components";
import { Album } from "../models";
import { getAlbum } from "../api";
import { Footer } from "../components/Footer";

export const AlbumPage = () => {
  const { id } = useParams();
  const [album, setAlbum] = useState<Album>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    getAlbum(id)
      .then((album) => setAlbum(album))
      .finally(() => {
        setTimeout(() => setLoading(false), 400);
      });
  }, [id]);

  if (loading) {
    return <Loading>Buscando álbum</Loading>;
  }

  if (!album) {
    return <></>;
  }

  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Box>
          <Header />
        </Box>
        <Hero title={album.name} url={album.images[0].url} />
        <Container sx={{ mt: 2 }}>
          <AlbumTracks album={album} />
        </Container>
        <Footer />
      </Box>
    </>
  );
};
