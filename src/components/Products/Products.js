import { useEffect, useState } from "react";
import { Row, Button, Spinner } from "react-bootstrap";
import Detail from "../Detail/Detail";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://arcane-spire-40682.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container">
      <h2 className="mt-3 fw-bold text-center mb-3">Our All Products</h2>
      {products.length == 0 ? (
        <div className="row mt-5 mb-5">
          <div className="col text-center">
            <Button variant="primary" disabled>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              <span className="visually-hidden ">Loading...from api</span>
            </Button>{" "}
            <Button variant="primary" disabled>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Loading...from api
            </Button>
          </div>
        </div>
      ) : (
        <Row xs={1} md={3} className="g-4">
          {products.map((service) => (
            <Detail key={service.id} service={service}></Detail>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Products;
