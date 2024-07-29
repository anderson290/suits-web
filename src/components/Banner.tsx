import Box from "@mui/material/Box";

import banner from "../assets/images/banner.png";
import { Typography } from "@mui/material";

function Banner() {
  return (
    <div
      style={{
        background: `url(${banner}) no-repeat center center`,
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#0000008a",
        }}
      >
        <Box padding={20} textAlign={"center"}>
          <Typography color={"white"} variant="h1">
            Álvaro Miranda Ramirez
          </Typography>
          <Typography color={"white"}>Advogado</Typography>
        </Box>
      </Box>
    </div>
  );
}

export default Banner;
