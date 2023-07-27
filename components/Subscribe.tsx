import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Subscribe = () => {
  return (
    <Main>
      <h1
        className="w-[50%] flex"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        Sign Up For Constant Notification
      </h1>
      <div
        className="w-[50%] flex"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <InputGroup className="w-[50%]">
          <Form.Control
            placeholder="Enter your email"
            aria-label="Enter your email"
            aria-describedby="basic-addon2"
          />
          <Button
            id="button-addon2"
            style={{ backgroundColor: "#0d6efd", color: "white" }}
          >
            Button
          </Button>
        </InputGroup>
      </div>
      {/* <div className="bg-red-500 w-[30%]">asf</div> */}
    </Main>
  );
};

export default Subscribe;

const Main = styled.div`
  background-color: #28242c;
  height: 10rem;
  display: flex;

  h1 {
    font-size: 2rem;
    font-weight: 600;
    color: white;
    letter-spacing: 1px;
  }
`;
