import {Box, Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {Circle} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {Artist} from "../../models";

export type ArtistCardProps = {
  artist: Artist
}

export const ArtistCard = ({ artist }: ArtistCardProps) => {
  const navigate = useNavigate()

  return <Card variant="outlined" sx={{ display: 'flex', flexDirection: 'column' }}>
    <CardMedia
      sx={{ height: 240 }}
      image={artist?.images?.[0]?.url}
      title={artist.name}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {artist.name}
      </Typography>
      <ul style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
        {artist.genres.map((genre) =>
          <ul key={genre} style={{ display: 'flex', alignItems: 'center',  textTransform: 'capitalize' }}>
            <Circle sx={{ fontSize: 8, marginRight: '4px' }} />
            <Typography variant={"body2"}>{genre}</Typography>
          </ul>
        )}
      </ul>
    </CardContent>
    <Box flex={1} />
    <CardActions>
      <Button size="small" onClick={() => navigate(`/artist/${artist.id}`)}>Ver mais</Button>
    </CardActions>
  </Card>
}