import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Confetti from "react-confetti";
import { useRouter } from "next/router";

import "../app/globals.css";

const Success = () => {
  const router = useRouter();
  console.log(router);

  function pushData() {
    router.push({
      pathname: "/login",
      query: {
        email: router.query.email,
        pass: router.query.password,
      },
    });
  }
  return (
    <Main>
      <Confetti style={{ width: "100%" }} />
      <h1>
        REGISTRATION <span style={{ color: "#044556" }}>SUCCESS</span>
      </h1>

      <Button onClick={pushData}>Want to login?</Button>
    </Main>
  );
};

export default Success;

const Button = styled.button`
  background-color: #ffc003;
  height: 4rem;
  width: 15rem;
  border-radius: 5px;
  color: white;
  font-size: 2rem;
  font-weight: 600;
  margin-top: 2rem;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #0275d8;
    scale: 1.2;
  }
`;

const Main = styled.div`
  height: 100vh;
  padding: 0;
  margin: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 4rem;
    color: #28242c;
    font-weight: 600;
  }
`;
