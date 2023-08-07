import {Box, Typography} from "@mui/material";

export type HeroProps = {
  title: string;
  url: string
}

export const Hero = ({ title, url }: HeroProps) => {
  return (
    <Box position={'relative'} height={480} display={'flex'} alignItems={'flex-end'} p={3}>
      <img
        src={url}
        alt={title}
        width={'100%'}
        height={'100%'}
        style={{ objectFit: 'cover', position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, zIndex: 1}}
      />
      <Box
        position={'absolute'}
        top={0}
        right={0}
        bottom={0}
        left={0}
        sx={{ background: 'linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.7) 35%, rgba(0, 0, 0, 0) 100%)' }}
        zIndex={2}
      />
      <Typography variant={'h3'} color={'white'} zIndex={3} component="h1">
        {title}
      </Typography>
    </Box>
  )
}