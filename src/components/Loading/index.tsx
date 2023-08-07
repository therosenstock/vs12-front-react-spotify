import {Box, CircularProgress, Typography} from "@mui/material";
import {ReactNode} from "react";

export type LoadingProps = {
  children?: ReactNode | ReactNode[]
}

export const Loading = ({ children }: LoadingProps) => {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      flexDirection={'column'}
      gap={3}
      position={'absolute'}
      top={0}
      right={0}
      bottom={0}
      left={0}
      bgcolor={'rgba(255, 255, 255, 0.2)'}
    >
      <CircularProgress />
      {children && <Typography variant={'body1'}>{children}</Typography>}
    </Box>
  )
}