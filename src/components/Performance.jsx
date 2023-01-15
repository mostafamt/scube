import { Container, Typography, Box } from "@mui/material";
import React from "react";
import Progressbar from "./Progressbar";
import {
  performanceProgressbarTitles,
  performanceProgressbarValues,
  performanceProgressbarColors,
} from "../constants";

const Performance = () => {
  return (
    <Box className="performance">
      <Container>
        <Typography
          variant="h2"
          className="section-title"
          sx={{ fontSize: "2rem !important" }}
        >
          SCube's Target Performance Improvements
        </Typography>
        <Box className="progressbars">
          {performanceProgressbarTitles.map((title, idx) => (
            <Progressbar
              key="idx"
              title={title}
              value={performanceProgressbarValues[idx]}
              pathColor={performanceProgressbarColors[idx]}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Performance;
