import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Detail.css';

const Detail = ({ service }) => {
  const { _id, img, name, description, price } = service;
  return (
    <Col className="h-80">
      <Card className="border rounded-3 shadow p-3 mb-5 bg-body rounded h-100">
        <Link to={`/product/${_id}`}>
          <Card.Img variant="top" src={img} rounded className="img" />
        </Link>
        <Card.Body>
          <Link
            to={`/product/${_id}`}
            className="text-decoration-none text-dark"
          >
            <Card.Title className="fw-bold">{name}</Card.Title>
            <Card.Text>{description.slice(0, 50)}</Card.Text>
          </Link>
          <Card.Text className="fw-bold">Price: {price}</Card.Text>
          <Link to={`/product/${_id}`}>
            <Button variant="warning" className="rounded-pill header-btn text-white">
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
