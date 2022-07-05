import React from "react";
import styled from "styled-components";
import StNavbar from "./Navbar";

const Stylednavbar = () => {
  return (
    <Container>
      <StNavbar />
    </Container>
  );
};

export default Stylednavbar;

const Container = styled.div`
  background: #000000;
 
`;