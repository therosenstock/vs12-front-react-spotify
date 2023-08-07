import {Box, Button, List, ListItem, ListItemText, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {getArtistAlbums} from "../../api";
import {ChevronRight} from "@mui/icons-material";
import {Album, Artist} from "../../models";
import {useNavigate} from "react-router-dom";

export type ArtistAlbumsProps = {
  artist: Artist
}
export const ArtistAlbums = ({ artist }: ArtistAlbumsProps) => {
  const [albums, setAlbums] = useState<Album[]>([])
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    getArtistAlbums(artist.id).then((albums) => {
      setAlbums(albums.items)
    })
  }, [artist.id])

  const formatReleaseDate = (date: string) => {
    const [year, month] = date.split('-')
    return `${month} / ${year}`;
  }

  const navigate = useNavigate();

  return (
    <Box>
      <Typography variant={'h5'} component={'h2'}>Álbums</Typography>
      <List>
        {albums.slice(0, showAll ? albums.length : 5).map((album) => (
          <ListItem key={album.id}>
            <img
              src={album.images[0].url}
              width={40}
              height={40}
              style={{ borderRadius: 4, marginRight: 8 }}
              alt={album.name}
            />
            <ListItemText primary={album.name} secondary={formatReleaseDate(album.release_date)} />
            <Button onClick={() => navigate(`/album/${album.id}`)}>
              <ChevronRight />
            </Button>
          </ListItem>
        ))}
      </List>
      { albums.length > 5 && <Button onClick={() => setShowAll(r => !r)}> {showAll ? 'Ver menos' : 'Ver mais'}</Button>}
    </Box>
  )
}