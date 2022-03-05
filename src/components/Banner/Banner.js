import "./Banner.css";
import { Button } from "react-bootstrap";

const Banner = () => {
  return (
    <div className="container mt-3" id="home">
      <div className="row text-start align-items-center">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <h1
            className="header-text h1 mt-10 fw-bold"
            style={{ textTransform: "uppercase" }}
          >
            Hi there,
          </h1>
          <h2
            className="header-text h1 fw-bold"
            style={{ textTransform: "uppercase" }}
          >
            The New Standard
          </h2>
          <h2
            className="header h1 fw-bold"
            style={{ textTransform: "uppercase" }}
          >
            Just Buy Good Products with Us.
          </h2>
          <p className="header-p">
            Image you don't need have because we provide you good products. We
            give you the best products to you
          </p>
          <Button
            type="button"
            variant="success"
            className="header-btn rounded-pill"
          >
            <a className="header-btn" target="_blank">
              Buy now
            </a>
          </Button>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <img
            className="img-fluid"
            src="https://www.benbridge.com/on/demandware.static/-/Sites-bbj-master-catalog/default/dw8ad8b37f/images/11628963_07.jpg"
            alt="hero-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
