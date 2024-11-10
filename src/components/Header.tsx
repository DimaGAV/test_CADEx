import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  color: #fff;
  position: sticky;
  top: 0;
`;

const Logo = styled.div`
  font-size: 24px;
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
          Contact Us
        </Button>
      </Link>
    </HeaderContainer>
  );
};

export default Header;
