import { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const location = useLocation();
  const history = useHistory();
  const [validated, setValidated] = useState(false);
  const redirect_uri = location.state?.from || "/home";

  const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInUsingGoogle } = useAuth();

  const handleOnChange = (e) => {
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

    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  const handleGooglelogin = () => {
    signInUsingGoogle(location, history);
  };

  return (
    <div className="container">
      <h2 className="fw-bold mt-3 mb-5 text-center">
        <em>Welcome to Login</em>
      </h2>
      <div className="row  d-flex align-items-center justify-content-center">
        <div className="col-md-7 col-sm-12">
          <img
            src="https://www.edustair.com/assets/img/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg"
            style={{ width: "100%" }}
            alt="none"
          />
        </div>
        <div className="col-md-5 col-sm-12">
          <Form noValidate validated={validated}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="ps-2">Email address</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  required
                  className="rounded-pill"
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  onBlur={handleOnChange}
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
                  onBlur={handleOnChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a password.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Button
              variant="primary"
              className="rounded-pill mb-2"
              type="submit"
              onClick={handleLoginSubmit}
            >
              Login
            </Button>
          </Form>
          <button
            onClick={handleGooglelogin}
            className="btn btn-secondary rounded-pill mb-2"
          >
            Google Sign In
          </button>
          <p>
            <em>Don't have an account?</em>
            <Link
              to="/registration"
              style={{ textDecoration: "none" }}
              className="ps-2"
            >
              <em>Registration</em>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;