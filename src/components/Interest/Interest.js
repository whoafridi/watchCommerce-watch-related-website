import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Interest.css";

const Interest = () => {
  return (
    <div className="container mt-4 mb-4">
      <h4 className="h1 text-center text-color">Interested to know more?</h4>
      <p className="h5 mt-3 text-color text-center">
        If you are looking for a complete logistics solution for your brand
        don’t hesitate to get in touch with us. We are looking forward to
        answering any queries that you have regarding our services.
      </p>
      <div className="row">
        <div className="col text-center">
          <Button className="text-color mt-4 rounded-pill" variant="warning">
            Contact us <i className="bx bx-right-arrow-alt"></i>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Interest;
