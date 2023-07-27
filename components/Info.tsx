import React from "react";
import styled from "styled-components";

import Left from "./small/Left";

const Info = () => {
  return (
    <Main>
      <Container>
        <Left />
      </Container>
    </Main>
  );
};

export default Info;

const Container = styled.div`
  width: 80%;
  cursor: default;
`;

const Main = styled.div`
  height: 60vh;
  display: flex;
  justify-content: center;
  padding: 2rem 0 0 0;
`;
