import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://watch-commerce.vercel.app/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          alert("admin added");
          setEmail("");
        }
      });

    e.preventDefault();
  };
  return (
    <div className="container mt-5 w-50">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col mt-5 w-50">
          <h2 className="text-center">Make an Admin</h2>
          <Form onSubmit={handleAdminSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                className="rounded-pill"
                type="email"
                name="email"
                placeholder="Enter email"
                onBlur={handleOnBlur}
              />
            </Form.Group>
            <Button type="submit" variant="dark" className="rounded-pill">
              Make Admin
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
