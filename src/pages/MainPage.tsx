import { Button, Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import VideoEmbed from "../components/VideoEmbed";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";

const MainPage: React.FC = () => {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          background: "#DCDCDC",
          padding: 2,
        }}
      >
        <Container sx={{ width: "500px" }}>
          <Typography variant="h2">Most important title on the page</Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            iure cum nobis repellat, libero repudiandae minus eum fugiat
            suscipit explicabo assumenda exercitationem perspiciatis voluptatum.
            Soluta illum est tempora nemo saepe.
          </Typography>
        </Container>
        <VideoEmbed />
      </Container>

      <Typography variant="h2" textAlign="center" sx={{ mt: 4, mb: 2 }}>
        Also very important title
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {[...Array(6)].map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ padding: 2, textAlign: "left" }}>
              <Typography variant="h4">Title</Typography>
              <Typography>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequuntur adipisci enim vitae ullam.
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Link to="/contact">
          <Button variant="contained" color="primary">
            Contact Us
          </Button>
        </Link>
      </Box>

      <Container
        sx={{
          width: "100%",
          height: "350px",
          mt: 4,
          background: "#DCDCDC",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h2">Less important title</Typography>
        {/* <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}> */}
        <Link to="/contact" style={{ marginTop: "60px" }}>
          <Button variant="contained" color="primary">
            Contact Us
          </Button>
        </Link>
        {/* </Box> */}
      </Container>
    </>
  );
};

export default MainPage;
