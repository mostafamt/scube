import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import TransformIcon from "@mui/icons-material/Transform";
import SchoolIcon from "@mui/icons-material/School";
import AdjustIcon from "@mui/icons-material/Adjust";
import Progressbar from "./Progressbar";

const WhyScube = () => {
  return (
    <Container className="why-scube">
      <Typography variant="h2" className="why-scube-header">
        Why Scube
      </Typography>
      <Box className="why-scube-cards">
        <Box className="why-scube-card">
          <TransformIcon className="why-scube-icon" />
          <Typography variant="h4" className="why-scube-card-header">
            Paradigm Shift from Teaching to Learning
          </Typography>
          <Typography>
            Learning Experiences Instead of Teaching Learning Experiences
          </Typography>
        </Box>
        <Box className="why-scube-card">
          <SchoolIcon className="why-scube-icon" />
          <Typography variant="h4" className="why-scube-card-header">
            Adaptive & Personalized Model
          </Typography>
          <Typography>
            Instructional Design Theories (RBT) - Learning Styles Model
          </Typography>
        </Box>
        <Box className="why-scube-card">
          <AdjustIcon className="why-scube-icon" />
          <Typography variant="h4" className="why-scube-card-header">
            Learner's Model is Central
          </Typography>
          <Typography>
            All Activities should be adapted according to the student model.
          </Typography>
        </Box>
        <Box className="why-scube-card">
          <AdjustIcon className="why-scube-icon" />
          <Typography variant="h4" className="why-scube-card-header">
            Learner's Model is Central
          </Typography>
          <Typography>
            All Activities should be adapted according to the student model.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default WhyScube;
