import { Box, Container, Grid, Tab, Tabs, Typography } from "@mui/material";
import React from "react";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Story = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Box className="story">
        <Typography variant="h2" className="section-title">
          Our Message
        </Typography>
        <Grid container spacing={8}>
          <Grid item xs={7}>
            <Box className="img">
              <img
                src="https://randomuser.me/api/portraits/men/79.jpg"
                alt="principal photo"
                style={{
                  borderRadius: "50%",
                }}
              />
            </Box>
            <Box>
              <Typography align="center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequuntur quisquam dolore rem dignissimos nesciunt cum natus
                quos a odio labore soluta est inventore tempore facilis totam
                nostrum in provident suscipit cupiditate voluptatibus, eos autem
                illum voluptatem. Reiciendis nulla provident repellendus.
                Necessitatibus cum rem dolor iure ea aliquid et! Atque quos
                cupiditate, doloremque maxime magni, nam quisquam alias
                necessitatibus veritatis voluptatem sit. Corrupti, voluptatum,
                nulla delectus reprehenderit omnis, magnam ducimus iusto in sed
                recusandae dignissimos quidem illum iste voluptas
                necessitatibus! Veritatis doloribus fugiat similique.
                Consequatur, iste qui consequuntur eaque ducimus delectus quos,
                aspernatur maxime rem quaerat aliquid veritatis debitis harum
                illum?
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={5}>
            <Box className="story-right">
              <Typography variant="h4">Our Story</Typography>
              <Typography>
                Our team comes with the experience and knowledge
              </Typography>
              <Box>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab label="Our Vision" {...a11yProps(0)} />
                    <Tab label="Our Mission" {...a11yProps(1)} />
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  Our vision is to initiate and lead the science of Intelligent
                  e- Learning and to pioneer and constantly grow to become the
                  lead exporter of innovative Intelligent e-Learning
                  technologies worldwide, and to become a leading performer in
                  the competitive global marketplace of developing Intelligent
                  solutions for the equitable access of lifelong learners (LLL)
                  including those vulnerable and underserved.
                </TabPanel>
                <TabPanel value={value} index={1}>
                  Our mission is to provide our customers with high quality
                  innovative intelligent solutions with maximized cost- benefit
                  and expedited ROI via improving the Efficiency, Efficacy, and
                  Engagement of the Learning systems. Our work processes and
                  products lifecycle seamlessly integrate research and
                  development for continuously exploring new innovative
                  improvements and ideas to guarantee continuous evolution of
                  the learning systems, while our products follow the
                  contemporary theories and paradigm shifts to guarantee a
                  top-level satisfaction of our end- users (the learners).
                </TabPanel>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Story;
