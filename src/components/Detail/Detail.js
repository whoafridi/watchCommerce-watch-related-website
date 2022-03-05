import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Detail = ({ service }) => {
  const { _id, img, name, description, price } = service;
  return (
    <Col>
      <Card className="border rounded-3 shadow p-3 mb-5 bg-body rounded h-80">
        <Link to={`/product/${_id}`}>
          <Card.Img variant="top" src={img} rounded />
        </Link>
        <Card.Body>
          <Link
            to={`/service/${_id}`}
            className="text-decoration-none text-dark"
          >
            <Card.Title className="fw-bold">{name}</Card.Title>
            <Card.Text>{description.slice(0, 100)}</Card.Text>
          </Link>
          <Card.Text>Price: {price}</Card.Text>
          <Link to={`/product/${_id}`}>
            <Button variant="warning" className="rounded-pill">
              More info
              <span>
                <i className="bx bx-right-arrow-alt"></i>
              </span>
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Detail;
