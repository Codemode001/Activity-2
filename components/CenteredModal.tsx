import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Modal from "react-bootstrap/Modal";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "react-bootstrap/Button";

function CenteredModal(props: any) {
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
    const name = formData.get("firstName") as string;
    const email = formData.get("username") as string;

    const queryParams = new URLSearchParams({
      email: email,
      password: password,
      name: name,
    });

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
      router.push(`/success?${queryParams}`);
    }
  };

  console.log(router);

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

export default CenteredModal;
