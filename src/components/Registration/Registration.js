import { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Registration = () => {
  const [validated, setValidated] = useState(false);
  const [loginData, setLoginData] = useState({});
  const history = useHistory();

  const location = useLocation();
  const redirect_uri = location.state?.from || "/home";
  const { user, registerUser, signInUsingGoogle } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };

  return (
    <div className="container">
      <h2 className="fw-bold mt-3 mb-3 text-center">
        <em>Welcome to Registration!</em>
      </h2>
      <div className="row  d-flex align-items-center justify-content-center">
        <div className="col-md-7 col-sm-12">
          <img
            src="https://thumbs.dreamstime.com/b/online-registration-sign-up-concept-young-man-signing-login-to-account-user-interface-secure-password-modern-vector-194944760.jpg"
            alt="none"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-5 col-sm-12">
          <Form noValidate validated={validated}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="ps-2">Enter name</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  required
                  type="text"
                  className="rounded-pill"
                  name="name"
                  placeholder="Enter your name"
                  onBlur={handleOnBlur}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a name.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="ps-2">Email address</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  required
                  className="rounded-pill"
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  onBlur={handleOnBlur}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter an email.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="ps-2">Password</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  required
                  className="rounded-pill"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onBlur={handleOnBlur}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a password.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={handleLoginSubmit}
              className="rounded-pill mb-2"
            >
              Registration
            </Button>
          </Form>
          <p>
            <em>Already have an account?</em>
            <Link
              to="/login"
              style={{ textDecoration: "none" }}
              className="ps-2"
            >
              <em>Login</em>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;