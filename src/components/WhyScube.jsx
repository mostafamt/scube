import { Box, Container, Typography } from "@mui/material";
import React from "react";
import WhyScubeCard from "./WhyScubeCard";
import {
  WhyScubeIcons,
  WhyScubeHeaders,
  WhyScubeText,
} from "../constants/index";

const WhyScube = () => {
  return (
    <Container className="why-scube">
      <Typography variant="h2" className="section-title">
        Why Scube
      </Typography>
      <Box className="why-scube-cards">
        {WhyScubeHeaders.map((header, idx) => (
          <WhyScubeCard
            key={idx}
            icon={WhyScubeIcons[idx]}
            header={header}
            text={WhyScubeText[idx]}
          />
        ))}
      </Box>
    </Container>
  );
};

export default WhyScube;
