import {Box, Button, Divider, List, ListItem, ListItemText, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {getAlbumTracks} from "../../api";
import { PlayArrow} from "@mui/icons-material";
import {Album, Track} from "../../models";

export type AlbumTracksProps = {
  album: Album
}
export const AlbumTracks = ({ album }: AlbumTracksProps) => {
  const [tracks, setTracks] = useState<Track[]>([])

  useEffect(() => {
    getAlbumTracks(album.id).then((tracks) => {
      setTracks(tracks.items)
    })
  }, [album.id])

  const play = (track: Track) => {
    window.open(track.external_urls.spotify, '__black')
  }

  const formatDuration = (duration: number) => {
    const minutes = Math.floor(duration / 1000 / 60);
    const seconds = Math.ceil(duration / 1000 - (minutes * 60))

    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <Box>
      <Typography variant={'h5'} component={'h2'}>Músicas</Typography>
      <Divider sx={{ mt: 2 }} />
      <List>
        {tracks.map((track, index) => (
          <>
            <ListItem key={track.id}>
              <Box width={40}>
                <Typography align={'center'}>{track.track_number}</Typography>
              </Box>
              <ListItemText primary={track.name} secondary={formatDuration(track.duration_ms)} />
              {track.is_playable &&
                <Button onClick={() => play(track)}>
                  <PlayArrow />
                </Button>
              }
            </ListItem>
            {tracks.length !== index + 1 && <Divider key={index} />}
          </>
        ))}
      </List>
    </Box>
  )
}