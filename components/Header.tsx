import React, { useState } from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useRouter } from "next/navigation";

import { media } from "@/constant/mediaQuery";

function MyVerticallyCenteredModal(props: any) {
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [passwordConfirmError, setPasswordConfirmError] = useState<
    string | null
  >(null);
  const [isPassword, setIsPassword] = useState(true);
  const router = useRouter();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data: any = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    const password = formData.get("Password") as string;
    const confirmPassword = formData.get("ConfirmPassword") as string;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[_@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must be at least 6 characters and contain one uppercase letter, one lowercase letter, and one special character."
      );
      return;
    } else if (confirmPassword != password) {
      setPasswordConfirmError("Password Does not match");
      return;
    } else {
      setPasswordError(null);
      setPasswordConfirmError(null);
      window.alert(JSON.stringify(data));
      console.log(JSON.stringify(data));
      router.push("/success");
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="w-full flex justify-center"
          style={{ color: "#1f76fc", fontSize: "2rem" }}
        >
          REGISTER
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ padding: "3rem 1rem 1rem 1rem" }}>
        <form onSubmit={onSubmit}>
          <InputGroup className="mb-3" style={{ height: "3rem" }}>
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <Form.Control
              placeholder="Username"
              aria-label="Username"
              name="username"
              aria-describedby="basic-addon1"
              required
              type="email"
            />
          </InputGroup>
          <InputGroup
            className="mb-3"
            style={{ height: "3rem", margin: "1.5rem 0 1.5rem 0" }}
          >
            <InputGroup.Text>First and last name</InputGroup.Text>
            <Form.Control aria-label="First name" name="firstName" required />
            <Form.Control aria-label="Last name" name="lastName" required />
          </InputGroup>
          <div className="flex items-center" style={{ gap: "1rem" }}>
            <div>Password</div>
            <Form.Control
              required
              type={isPassword ? "Password" : "Text"}
              name="Password"
              isInvalid={!!passwordError}
            />

            <div
              className="cursor-pointer"
              onClick={() => setIsPassword(!isPassword)}
            >
              {isPassword ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
            </div>
            <Form.Control.Feedback type="invalid">
              {passwordError}
            </Form.Control.Feedback>
          </div>
          <div
            className="flex items-center"
            style={{ gap: "1rem", marginTop: "1rem" }}
          >
            <div style={{ fontSize: "1.2rem" }}>Confirm</div>
            <Form.Control
              required
              type={isPassword ? "Password" : "Text"}
              name="ConfirmPassword"
              isInvalid={!!passwordError}
            />

            <Form.Control.Feedback type="invalid">
              {passwordConfirmError}
            </Form.Control.Feedback>
          </div>
          <div
            className="flex justify-center"
            style={{ margin: "2rem 0 1rem 0" }}
          >
            <Button
              id="button-addon2"
              type="submit"
              style={{ backgroundColor: "#0d6efd", color: "white" }}
            >
              Submit
            </Button>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button style={{ color: "black" }} onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

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
              <Link href="/hello-user">Login</Link>
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

            <MyVerticallyCenteredModal
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
