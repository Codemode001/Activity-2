import React from "react";
import styled from "styled-components";

const Footer = () => {
  return <Main>Copyright © 2023</Main>;
};

export default Footer;

const Main = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 5rem 0;
  background-color: #044556;
  color: white;
`;
