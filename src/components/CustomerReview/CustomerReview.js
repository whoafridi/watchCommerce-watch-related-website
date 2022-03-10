import { useEffect, useState } from "react";
import { Row, Button, Spinner } from "react-bootstrap";
import CReview from "../CReview/CReview";

const CustomerReview = () => {
  const [review, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://watchcom-server.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="container">
      <h2 className="text-center fw-bold mt-5">Our Clients say</h2>
      <h4 className="text-center fw-bold mb-2">Testimonials</h4>
      {review.length === 0 ? (
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
          {review.map((r) => (
            <CReview r={r} key={r._id}></CReview>
          ))}
        </Row>
      )}
    </div>
  );
};

export default CustomerReview;
