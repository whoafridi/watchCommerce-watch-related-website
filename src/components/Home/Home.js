import { useEffect, useState } from "react";
import { Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import Banner from "../Banner/Banner";
import CustomerReview from "../CustomerReview/CustomerReview";
import Details from "../Details/Details";
import Faq from "../Faq/Faq";
import Interest from "../Interest/Interest";
import "react-loading-skeleton/dist/skeleton.css";
import Loading from "../Loading/Loading";

const Home = () => {
  const [products] = useProducts([]);

  let productSlice = products.slice(0, 6);

  return (
    <div>
      <Banner />
      <div className="container mt-4">
        <h1 className="text-center mb-3">Featured products</h1>
        {products.length === 0 ? (
          <Row xs={1} md={3} className="g-4">
            {Array.from({ length: 6 }).map((_, idx) => (
              <>
                <Loading />
              </>
            ))}
          </Row>
        ) : (
          <Row xs={1} md={3} className="g-4">
            {productSlice.slice(0, 6).map((service) => (
              <Details key={service._id} service={service}></Details>
            ))}
          </Row>
        )}
        <div className="row mt-3">
          <div className="col-md-12 text-center mt-2">
            <Link to="/products">
              <Button variant="btn rounded-pill header-btn text-white">
                Explore more products <i className="bx bx-right-arrow-alt"></i>
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Interest />
      <CustomerReview />
      <Faq />
    </div>
  );
};

export default Home;
