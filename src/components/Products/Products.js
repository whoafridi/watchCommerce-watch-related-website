import { Row, Button, Spinner } from "react-bootstrap";
import useProducts from "../../hooks/useProducts";
import Banner from "../Banner/Banner_product";
import Detail from "../Detail/Detail";
import Loading from "../Loading/Loading";

const Products = () => {
  const [products] = useProducts();

  return (
    <div className="container mb-5">
      <Banner />
      <h2 className="mt-3 fw-bold text-center mb-3">Our All Products</h2>
      {products.length === 0 ? (
        <Row xs={1} md={3} className="g-4">
          {Array.from({ length: 12 }).map((_, idx) => (
            <>
              <Loading />
            </>
          ))}
        </Row>
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
