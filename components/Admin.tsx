import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import LongCards from "./small/LongCards";

const cardsProfile = [
  {
    title: "Dong Bajolo",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/iron-man-robert-downey-jr-1577894347.jpg?crop=0.530xw:1.00xh;0.149xw,0&resize=1200:*",
  },
  {
    title: "Ding Bajolo",
    image:
      "https://www.cheatsheet.com/wp-content/uploads/2023/02/Robert-Downey-Jr.-Action-Star.jpg?w=1200",
  },
  {
    title: "Doy Bajolo",
    image:
      "https://cdn.britannica.com/70/129770-050-AEBE1EB9/Robert-Downey-Jr-2008.jpg",
  },
  {
    title: "Dang Bajolo",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/robert-downey-jr-gettyimages-1193444415.jpg",
  },
];

const Admin = () => {
  return (
    <Main>
      <ContainerMain>
        <h1>The Administrators</h1>
        <p className="text-center">
          Our administrators are experts in the field of business and
          technologies with 5 years of experience
        </p>
        <Container style={{ marginTop: "3rem" }}>
          <Row>
            {cardsProfile.map((item) => (
              <Col
                lg={3}
                md={6}
                xs={12}
                style={{ display: "flex", justifyContent: "center" }}
                key={item.title}
              >
                <LongCards title={item.title} image={item.image} />
              </Col>
            ))}
          </Row>
        </Container>
      </ContainerMain>
    </Main>
  );
};

export default Admin;

const ContainerMain = styled.div`
  width: 80%;
  cursor: default;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
`;

const Main = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 5rem 0;
  background-color: #1f76fc;
  color: white;
`;
