import { TitleOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

const ServicesCard = ({ icon, title, text }) => {
  return (
    <Box className="service-card">
      <Box>{icon}</Box>
      <Typography variant="h5">{title}</Typography>
      <Typography>{text}</Typography>
    </Box>
  );
};

export default ServicesCard;
