import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props: any) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Header = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Main>
      <Container>
        <div
          className="flex justify-between"
          style={{ fontSize: "1.2rem", fontWeight: "400" }}
        >
          <div>USTP CONeXT</div>
          <ul className="flex" style={{ gap: "1rem" }}>
            <li>About Us</li>
            <li>FAQ</li>
            <li>Administrators</li>
          </ul>
        </div>
        <Connected>
          <div
            className=" w-[40%] flex"
            style={{
              flexDirection: "column",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <h1>Get Connected to The Next Generation</h1>
            <div style={{ fontSize: "1.2rem" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
              voluptate natus libero eos iure blanditiis illum! Dolor obcaecati
              facilis iusto!
            </div>
            <Button
              variant="primary"
              onClick={() => setModalShow(true)}
              style={{ backgroundColor: "white", color: "black", width: "30%" }}
            >
              Connect With Us
            </Button>

            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>

          <div className="w-[60%]  flex items-center">
            <Image src="header-img.png" />
          </div>
        </Connected>
      </Container>
    </Main>
  );
};

export default Header;

const Image = styled.img`
  width: 60%;
  margin-left: 5rem;
`;

const Connected = styled.div`
  height: 80%;
  margin-top: 2rem;
  display: flex;

  h1 {
    font-size: 3rem;
    font-weight: 600;
  }
`;

const Container = styled.div`
  width: 80%;
  color: white;
  cursor: default;
`;

const Main = styled.div`
  background-color: #044556;
  height: 60vh;
  display: flex;
  justify-content: center;
  padding: 2rem 0 0 0;
`;
