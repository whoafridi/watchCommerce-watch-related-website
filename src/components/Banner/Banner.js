import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="container mt-3" id="home">
      <div className="row d-flex align-items-center justify-content-center">
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
          <Link to="/products">
            <button
              type="button"
              className="btn header-btn rounded-pill text-white"
            >
              Explore more
            </button>
          </Link>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 hidden">
          <img
            className="img-fluid"
            loading="lazy"
            src="https://gadget.co.za/wp-content/uploads/2021/12/huawei-watch-3-pro-kv.png"
            alt="hero-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
