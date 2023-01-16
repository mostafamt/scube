import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper";

const Teachers = () => {
  return (
    <Box className="teachers">
      <Container>
        <Typography variant="h2" className="section-title">
          Teachers / Employees of the Month
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={8}>
            <div
              style={{
                height: "25rem",
              }}
            >
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    src="/assets/teacher-1.jpg"
                    alt="teacher-3"
                    height={"100%"}
                  />
                  <Box className="img-content">
                    <Typography>Teacher Name</Typography>
                    <Typography>Physics Teacher</Typography>
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/assets/teacher-2.jpg"
                    alt="teacher-3"
                    height={"100%"}
                  />
                  <Box className="img-content">
                    <Typography>Teacher Name</Typography>
                    <Typography>Physics Teacher</Typography>
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/assets/teacher-3.jpg"
                    alt="teacher-3"
                    height={"100%"}
                  />
                  <Box className="img-content">
                    <Typography>Teacher Name</Typography>
                    <Typography>Physics Teacher</Typography>
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/assets/teacher-4.jpg"
                    alt="teacher-3"
                    height={"100%"}
                  />
                  <Box className="img-content">
                    <Typography>Teacher Name</Typography>
                    <Typography>Physics Teacher</Typography>
                  </Box>
                </SwiperSlide>
              </Swiper>
            </div>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                border: "1px solid black",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Message to Teachers
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Teachers;
