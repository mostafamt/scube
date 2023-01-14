import React from "react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Typography } from "@mui/material";
import HeaderSlide from "./HeaderSlide";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";

const SliderImages = ["/assets/2.png", "/assets/3.png", "/assets/4.png"];
const SliderHeaders = [
  "One Size Does Not Fit All",
  "Private Tutoring",
  "SCube is Different",
];
const SliderText = [
  "Students come from a variety of backgrounds, cultures, schools, and learning abilities, so we cannot think that one curriculum, or one pair of pants, can fit all.",
  "One-on-One (private) tutoring increases performance to around 98% in a standard classroom [Bloom,1984].",
  "Delivers Personalized teaching strategies to match each learner's learning style Merged FSLSM + Kolb's models (Scube Model)",
];

const Header = () => {
  return (
    <>
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {SliderImages.map((sliderImage, idx) => (
          <SwiperSlide key={idx}>
            <HeaderSlide imgSrc={sliderImage}>
              <Typography
                variant="h3"
                sx={{
                  color: "#fff",
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                }}
              >
                {SliderHeaders[idx]}
              </Typography>
              <Typography sx={{ color: "#fff" }}>{SliderText[idx]}</Typography>
            </HeaderSlide>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Header;
