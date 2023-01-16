import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Box, Grid as MGrid } from "@mui/material";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Grid, Pagination, Navigation } from "swiper";
import { Container, Typography } from "@mui/material";

const Students = () => {
  return (
    <Box className="students">
      <Container>
        <Typography variant="h2" className="section-title">
          Starts of The month
        </Typography>

        <MGrid container spacing={4}>
          <MGrid item xs={8}>
            <div
              style={{
                height: "25rem",
              }}
            >
              <Swiper
                slidesPerView={4}
                grid={{
                  rows: 2,
                }}
                spaceBetween={40}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Grid, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    src="/assets/student-1.jpg"
                    alt="student"
                    height={"100%"}
                  />
                  <Box className="img-content">
                    <Typography>Student Name</Typography>
                    <Typography>Grade 6</Typography>
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/assets/student-2.jpg"
                    alt="student"
                    height={"100%"}
                  />
                  <Box className="img-content">
                    <Typography>Student Name</Typography>
                    <Typography>Grade 6</Typography>
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/assets/student-3.jpg"
                    alt="student"
                    height={"100%"}
                  />
                  <Box className="img-content">
                    <Typography>Student Name</Typography>
                    <Typography>Grade 6</Typography>
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/assets/student-4.jpg"
                    alt="student"
                    height={"100%"}
                  />
                  <Box className="img-content">
                    <Typography>Student Name</Typography>
                    <Typography>Grade 6</Typography>
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/assets/student-1.jpg"
                    alt="student"
                    height={"100%"}
                  />
                  <Box className="img-content">
                    <Typography>Student Name</Typography>
                    <Typography>Grade 6</Typography>
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/assets/student-2.jpg"
                    alt="student"
                    height={"100%"}
                  />
                  <Box className="img-content">
                    <Typography>Student Name</Typography>
                    <Typography>Grade 6</Typography>
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/assets/student-3.jpg"
                    alt="student"
                    height={"100%"}
                  />
                  <Box className="img-content">
                    <Typography>Student Name</Typography>
                    <Typography>Grade 6</Typography>
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/assets/student-4.jpg"
                    alt="student"
                    height={"100%"}
                  />
                  <Box className="img-content">
                    <Typography>Student Name</Typography>
                    <Typography>Grade 6</Typography>
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/assets/student-1.jpg"
                    alt="student"
                    height={"100%"}
                  />
                  <Box className="img-content">
                    <Typography>Student Name</Typography>
                    <Typography>Grade 6</Typography>
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/assets/student-2.jpg"
                    alt="student"
                    height={"100%"}
                  />
                  <Box className="img-content">
                    <Typography>Student Name</Typography>
                    <Typography>Grade 6</Typography>
                  </Box>
                </SwiperSlide>
              </Swiper>
            </div>
          </MGrid>
          <MGrid item xs={4}>
            <Box
              sx={{
                border: "1px  solid  black",
                height: "90%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Message to parents
            </Box>
          </MGrid>
        </MGrid>
      </Container>
    </Box>
  );
};

export default Students;
