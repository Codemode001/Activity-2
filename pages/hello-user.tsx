import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

import "../app/globals.css";

const Hello = () => {
  const router = useRouter();
  return (
    <Main>
      <h1>
        Welcome! <span style={{ color: "#044556" }}>{router.query.name}</span>
      </h1>
      <Link href="/">
        <Button>PROCEED</Button>
      </Link>
    </Main>
  );
};

export default Hello;

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
