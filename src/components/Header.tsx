import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Website
          <Button component={Link} to="/">
            Main
          </Button>
          <Button component={Link} to="contact">
            Contact Us
          </Button>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
