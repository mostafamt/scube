import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Input,
  InputAdornment,
  Typography,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import {
  LocalPhoneOutlined,
  LocationOnOutlined,
  MailOutline,
  MailOutlineOutlined,
  MessageOutlined,
  PersonOutline,
  PhoneAndroid,
  Subject,
} from "@mui/icons-material";

const contactLabels = [
  "Full Name",
  "Email Address",
  "Phone Number",
  "Subject",
  "Your Message",
];
const contactIcons = [
  <PersonOutline />,
  <MailOutline />,
  <PhoneAndroid />,
  <Subject />,
  <MessageOutlined />,
];

const Contact = () => {
  return (
    <Box className="contact">
      <Container>
        <Typography
          variant="h2"
          className="section-title"
          sx={{ color: "#fff" }}
        >
          Get in Touch
        </Typography>

        <Grid container spacing={4} alignItems="center">
          <Grid item xs={3}>
            <Box className="contact-left">
              <img src="/assets/scube.png" alt="logo" height="120" />
              <Typography>
                The provider of research-based innovative intelligent solutions
                for Asynchronous e-Learning
              </Typography>
              <Box className="contact-info">
                <Typography>Contact Information</Typography>
                <ul className="list">
                  <li>
                    <LocationOnOutlined />
                    6th of October City, Giza , Egypt
                  </li>
                  <li>
                    <LocalPhoneOutlined />
                    +20 122 318 7514
                  </li>
                  <li>
                    <MailOutlineOutlined />
                    sales@scube-edutech.com
                  </li>
                </ul>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <form>
              <Grid container spacing={4}>
                {contactLabels.map((label, idx) => (
                  <Grid key={label} item xs={label === "Your Message" ? 12 : 6}>
                    <FormControl variant="standard" className="form-control">
                      <InputLabel
                        htmlFor="input-with-icon-adornment"
                        sx={{ color: "#fff" }}
                      >
                        {label}
                      </InputLabel>
                      <Input
                        id="input-with-icon-adornment"
                        multiline={label === "Your Message" ? true : false}
                        rows={label === "Your Message" ? 3 : null}
                        // color="success"
                        startAdornment={
                          <InputAdornment position="start">
                            {contactIcons[idx]}
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </Grid>
                ))}
                <Grid item xs={12} textAlign="center">
                  <Button type="submit" variant="contained">
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid item xs={3}>
            <Box
              sx={{
                border: "1px solid white",
                height: "150px",
                margin: "1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              School Logo
            </Box>
            <Box
              sx={{
                border: "1px solid white",
                height: "150px",
                margin: "1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              School Contact Info
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box className="copyright">
        <Typography>
          Copyright &copy; 2023 SCube for Education Technology. All Rights
          Reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Contact;
