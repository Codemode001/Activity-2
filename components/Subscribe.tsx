import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import { media } from "@/constant/mediaQuery";

const Subscribe = () => {
  return (
    <Main>
      <h1
        className="w-[50%] flex"
        style={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
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
    </Main>
  );
};

export default Subscribe;

const Main = styled.div`
  background-color: #28242c;
  height: 10rem;
  display: flex;

  ${media.up("small")} {
    h1 {
      font-size: 1.5rem;
      font-weight: 600;
      color: white;
      letter-spacing: 1px;
    }
  }

  ${media.up("medium")} {
  }

  ${media.up("large")} {
    h1 {
      font-size: 2rem;
      font-weight: 600;
      color: white;
      letter-spacing: 1px;
    }
  }
`;
