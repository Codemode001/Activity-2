import React from "react";
import styled from "styled-components";
import "../app/globals.css";

const Login = () => {
  return (
    <Main>
      <Container>
        <Header>login</Header>
      </Container>
    </Main>
  );
};

export default Login;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 600;
`;

const Container = styled.div`
  background-color: #28242c;
  width: 40%;
  height: 60%;
  border-radius: 10px;
`;

const Main = styled.div`
  background-color: #044556;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
