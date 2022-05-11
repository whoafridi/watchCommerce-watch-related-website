import "./Banner.css";

const Banner = () => {
  return (
    <div className="container mt-3" id="home">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <img
            className="img-fluid"
            loading="lazy"
            src="https://technoor.me/wp-content/uploads/2020/11/oppowatch.png"
            alt="product-icon"
          />
        </div>
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
            Keep an eye
          </h2>
          <h2
            className="header h1 fw-bold"
            style={{ textTransform: "uppercase" }}
          >
            Of our Good Products.
          </h2>
          <p className="header-p">
            You'll find good products from our e-cmmerce. So, don't forget to
            check out our store. Thank you.
          </p>
          <button
            type="button"
            className="btn header-btn rounded-pill text-white"
          >
            Explore more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
