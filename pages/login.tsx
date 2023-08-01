import React from "react";
import styled from "styled-components";
import "../app/globals.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Login = () => {
  return (
    <Main>
      <Container>
        <Header>LOGIN</Header>
        <Body>
          <Form.Group
            className="mb-3 w-full"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Control
              className="w-full"
              type="email"
              placeholder="Email"
              style={{
                height: "3rem",
                padding: "0 1rem 0 1rem",
                borderRadius: "5px",
                fontSize: "1.5rem",
                color: "black",
              }}
            />
          </Form.Group>
          <Form.Group
            className="mb-3 w-full"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Control
              className="w-full"
              type="email"
              placeholder="Password"
              style={{
                height: "3rem",
                padding: "0 1rem 0 1rem",
                borderRadius: "5px",
                fontSize: "1.5rem",
                color: "black",
              }}
            />
          </Form.Group>
          <Button
            id="button-addon2"
            type="submit"
            style={{
              backgroundColor: "#0d6efd",
              color: "white",
              height: "3rem",
              width: "30%",
              borderRadius: "10px",
              marginTop: "2rem",
            }}
          >
            Submit
          </Button>
        </Body>
        <div className="cursor-pointer">forgot password</div>
      </Container>
    </Main>
  );
};

export default Login;

const Body = styled.form`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
  flex-direction: column;
  gap: 1rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 600;
  height: 15%;
  border-bottom: 1px solid gray;
  width: 90%;
`;

const Container = styled.div`
  background-color: #28242c;
  width: 40%;
  height: 60%;
  border-radius: 10px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.div`
  background-color: #044556;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
