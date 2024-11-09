import { Container, Typography } from "@mui/material";
import React from "react";
import VideoEmbed from "../components/VideoEmbed";

const MainPage: React.FC = () => {
  return (
    <Container>
      <Typography variant="h2">Welcome to My Website</Typography>
      <VideoEmbed />
    </Container>
  );
};

export default MainPage;
