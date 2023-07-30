import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { media } from "@/constant/mediaQuery";

const Right = () => {
  return (
    <Main>
      <ContainerMain>
        <Container fluid>
          <Row>
            <Col
              sm={12}
              md={6}
              style={{ alignItems: "center", display: "flex" }}
            >
              <img
                src="success.jpg"
                style={{ height: "90%", objectFit: "cover" }}
              />
            </Col>
            <Col
              sm={12}
              md={6}
              className="flex"
              style={{ alignItems: "center" }}
            >
              <div>
                <h1>
                  Your <span>SUCCESS</span> Is Our Focus
                </h1>
                <p style={{ margin: "1.5rem 0" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem a necessitatibus deleniti facere nulla. Nulla, commodi
                  ex voluptates, ab earum corporis tempore quam ipsa nostrum,
                  necessitatibus eligendi voluptas minus. Placeat?
                </p>
                <Button>Connect With Us!</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </ContainerMain>
    </Main>
  );
};

export default Right;

const Button = styled.div`
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 600;
`;

const ContainerMain = styled.div`
  height: 90%;
  padding: 0;
  h1 {
    font-size: 2.9rem;
    font-weight: 600;
    color: #1f76fc;
  }
  p {
    font-size: 1rem;
    color: #1f76fc;
    line-height: 1.7rem;
  }

  ${media.up("small")} {
    width: 90%;
  }
  ${media.up("medium")} {
    width: 100%;
  }
`;

const Main = styled.div`
  height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;

  ${media.up("small")} {
    img {
      display: none;
    }
  }
  ${media.up("medium")} {
    img {
      display: flex;
    }
  }
`;
