import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  font-family: "Times New Roman", Times, serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  position: sticky;
  top: 0;
  background-color: #fff;
`;

const Logo = styled.div`
  font-size: 32px;
  font-weight: bold;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo>Some Company</Logo>
      </Link>
      <Link to="/contact">
        <Button variant="contained" color="primary">
          Contact us
        </Button>
      </Link>
    </HeaderContainer>
  );
};

export default Header;
