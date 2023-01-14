import { Container, Typography, Box } from "@mui/material";
import React from "react";
import Progressbar from "./Progressbar";

const Performance = () => {
  return (
    <Box className="performance">
      <Container>
        <Typography variant="h2" className="performance-header">
          SCube's Target Performance Improvements
        </Typography>
        <Box
          sx={{
            margin: "2rem",
            display: "flex",
            // gap: "2rem",
            justifyContent: "space-between",
            // flexWrap: "wrap",
          }}
        >
          <Progressbar
            title="Increased Efficacy"
            value={30}
            pathColor="#fdc063"
          />
          <Progressbar
            title="Increased Efficiency"
            value={35}
            pathColor="#05c3cc"
          />
          <Progressbar
            title="Increased Engagement"
            value={80}
            pathColor="#ff8b8b"
          />
          <Progressbar title="Reduced Cost" value={92} pathColor="#ff904c" />
        </Box>
      </Container>
    </Box>
  );
};

export default Performance;
