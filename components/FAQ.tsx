import React from "react";
import styled from "styled-components";
import AccordionCom from "./small/Accordion";

const FAQ = () => {
  return (
    <Main>
      <Container>
        <h1>FREQUENTLY ASKED QUESTIONS</h1>
        <AccordionCom />
      </Container>
    </Main>
  );
};

export default FAQ;
const Container = styled.div`
  width: 80%;
  cursor: default;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 2.8rem;
    font-weight: 600;
    margin-bottom: 4rem;
  }
`;

const Main = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem 0 0 0;
  margin-bottom: 5rem;
`;
