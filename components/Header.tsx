import React, { useState } from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import CenteredModal from "./CenteredModal";

import { media } from "@/constant/mediaQuery";

const Header = () => {
  const [modalShow, setModalShow] = React.useState(false);

  const handleBurgerMenuClick = () => {
    setModalShow(true);
  };

  return (
    <Main>
      <Container>
        <div
          className="flex justify-between"
          style={{ fontSize: "1.2rem", fontWeight: "400" }}
        >
          <div>USTP CONeXT</div>

          <BurgerMenuButton onClick={handleBurgerMenuClick}>
            <MenuIcon />
          </BurgerMenuButton>

          <ul className="flex default-nav" style={{ gap: "1rem" }}>
            <li>About Us</li>
            <li>FAQ</li>
            <li className="">Administrators</li>
            <div>
              <Link href="/login">Login</Link>
            </div>
          </ul>
        </div>

        <Connected>
          <div
            className=" flex text"
            style={{
              flexDirection: "column",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <h1>Get Connected to The Next Generation</h1>
            <p style={{ margin: "1rem 0" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
              voluptate natus libero eos iure blanditiis illum! Dolor obcaecati
              facilis iusto!
            </p>
            <Button
              variant="primary"
              onClick={() => setModalShow(true)}
              style={{ backgroundColor: "white", color: "black" }}
              className="button"
            >
              Connect With Us
            </Button>

            <CenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>
          <div className=" flex items-center image">
            <Image src="header-img.png" className="image-control" />
          </div>
        </Connected>
      </Container>
    </Main>
  );
};

export default Header;

const BurgerMenuButton = styled.button`
  ${media.up("small")} {
    display: block;
  }
  ${media.up("large")} {
    display: none;
  }
`;

const Image = styled.img`
  width: 60%;
  margin-left: 5rem;
`;

const Connected = styled.div`
  height: 80%;
  margin-top: 2rem;
  display: flex;

  ${media.up("small")} {
    h1 {
      font-size: 1.5rem;
      font-weight: 600;
    }
    p {
      font-size: 1rem;
    }
    .image {
      display: none;
    }
    .text {
      width: 100%;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  ${media.up("medium")} {
    h1 {
      font-size: 1.8rem;
      font-weight: 600;
    }
    p {
      font-size: 1.2rem;
    }
    .image {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
    }
    .text {
      width: 50%;
      display: block;
      text-align: left;
    }
    .image-control {
      width: 100%;
    }
  }

  ${media.up("large")} {
    h1 {
      font-size: 3rem;
      font-weight: 600;
      color: white;
    }
    p {
      font-size: 1.2rem;
    }
    .image {
      display: block;
      width: 60%;
    }
    .text {
      width: 40%;
      text-align: left;
      display: flex;
      align-items: start;
    }
    .image-control {
      width: 70%;
    }
  }
`;

const Container = styled.div`
  width: 80%;
  color: white;
  cursor: default;

  li {
    cursor: pointer
  }

  ${media.up("small")} {
    .default-nav {
      display: none;
    }
  }
  ${media.up("large")} {
    .default-nav {
      display: flex;
    }
`;

const Main = styled.div`
  background-color: #044556;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem 0 3rem 0;
`;
