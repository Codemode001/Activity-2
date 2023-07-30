import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import LaptopIcon from "@mui/icons-material/Laptop";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import PeopleIcon from "@mui/icons-material/People";

const Virtual = () => {
  return (
    <Main>
      <ContainerMain>
        <Container fluid style={{ padding: 0 }}>
          <Row>
            <Col className="flex justify-center" xs={12} lg={4}>
              <Card
                style={{
                  width: "90%",
                  height: "15rem",
                  backgroundColor: "#28242c",
                  color: "white",
                  margin: "1rem 0",
                }}
              >
                <Card.Body>
                  <div
                    className=" h-[50%] flex"
                    style={{ flexDirection: "column", alignItems: "center" }}
                  >
                    <LaptopIcon style={{ fontSize: "3rem" }} />
                    <Card.Title style={{ fontSize: "2.5rem" }}>
                      Virtual
                    </Card.Title>
                  </div>
                  <Card.Text style={{ fontSize: ".8rem", textAlign: "center" }}>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <div className="flex justify-center">
                    <Button
                      variant="primary"
                      style={{ backgroundColor: "#0d6efd", marginTop: "1rem" }}
                    >
                      Read More
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className=" flex justify-center" xs={12} lg={4}>
              <Card
                style={{
                  width: "90%",
                  height: "15rem",
                  backgroundColor: "#28242c",
                  color: "white",
                  margin: "1rem 0",
                }}
              >
                <Card.Body>
                  <div
                    className=" h-[50%] flex"
                    style={{ flexDirection: "column", alignItems: "center" }}
                  >
                    <VpnLockIcon style={{ fontSize: "3rem" }} />
                    <Card.Title style={{ fontSize: "2.5rem" }}>
                      Virtual
                    </Card.Title>
                  </div>
                  <Card.Text style={{ fontSize: ".8rem", textAlign: "center" }}>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <div className="flex justify-center">
                    <Button
                      variant="primary"
                      style={{ backgroundColor: "#0d6efd", marginTop: "1rem" }}
                    >
                      Read More
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className=" flex justify-center" xs={12} lg={4}>
              <Card
                style={{
                  width: "90%",
                  height: "15rem",
                  backgroundColor: "#28242c",
                  color: "white",
                  margin: "1rem 0",
                }}
              >
                <Card.Body>
                  <div
                    className=" h-[50%] flex"
                    style={{ flexDirection: "column", alignItems: "center" }}
                  >
                    <PeopleIcon style={{ fontSize: "3rem" }} />
                    <Card.Title style={{ fontSize: "2.5rem" }}>
                      Virtual
                    </Card.Title>
                  </div>
                  <Card.Text style={{ fontSize: ".8rem", textAlign: "center" }}>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <div className="flex justify-center">
                    <Button
                      variant="primary"
                      style={{ backgroundColor: "#0d6efd", marginTop: "1rem" }}
                    >
                      Read More
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </ContainerMain>
    </Main>
  );
};

export default Virtual;

const ContainerMain = styled.div`
  width: 80%;
  color: white;
  cursor: default;
  display: flex;
  align-items: center;
`;

const Main = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 5rem 0;
`;
