import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#ce93d8",
          color: "#000",
          display: "flex",
          padding: "1rem",
          justifyContent: "center",
          gap: "1rem",
          marginTop: "1rem",
          borderTop: "3px solid #AB47BC",
        }}
      >
        <a target="_blank" href="https://github.com/therosenstock">
          <GitHubIcon />
        </a>
        <Typography>therosenstock &copy; 2023.</Typography>
      </Box>
    </>
  );
};
