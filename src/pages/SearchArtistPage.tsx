import { FormEvent, useState } from "react";
import {
  Box,
  Container,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { getArtists } from "../api";
import { ArtistCard, Header } from "../components";
import { Footer } from "../components/Footer";

export const SearchArtistPage = () => {
  const [searchText, setSearchText] = useState("");
  const [artists, setArtists] = useState<any[]>([]);

  const searchArtists = async (e: FormEvent) => {
    e.preventDefault();
    const artists = await getArtists(searchText?.trim());
    setArtists(artists.artists.items);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Box>
        <Header />
      </Box>

      <Container sx={{ flex: 1 }}>
        <Typography
          variant={"h5"}
          component={"h1"}
          align={"center"}
          sx={(theme) => ({
            [theme.breakpoints.up("md")]: {
              marginTop: "5%",
            },
          })}
        >
          Pesquisar artista
        </Typography>
        <form onSubmit={searchArtists}>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            margin={"auto"}
            width={"100%"}
            marginTop={2}
            sx={(theme) => ({
              [theme.breakpoints.up("md")]: {
                width: "60%",
              },
            })}
          >
            <TextField
              placeholder={"Digite o nome do artista"}
              fullWidth
              onChange={(e) => setSearchText(e.target.value)}
            />

            <IconButton type={"submit"} color={"primary"} size={"large"}>
              <SearchIcon />
            </IconButton>
          </Box>
        </form>

        <Box
          sx={{
            display: "grid",
            marginTop: 3,
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "16px",
          }}
        >
          {artists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};
