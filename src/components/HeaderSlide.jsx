import { Box } from "@mui/material";
import React from "react";

const HeaderSlide = ({ children, imgSrc }) => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "90vh",
        color: "black",
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${imgSrc})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "80%", margin: "0 auto" }}>{children}</Box>
    </Box>
  );
};

export default HeaderSlide;
