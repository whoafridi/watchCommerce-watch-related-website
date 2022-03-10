import { Card } from "react-bootstrap";

const CReview = ({ r }) => {
  const { rating, review } = r;
  return (
    <div className="container">
      <Card
        border="light"
        className="shadow p-3 mb-5 bg-body rounded"
        key={r._id}
      >
        <Card.Header>{r.displayName}</Card.Header>
        <Card.Body>
          <Card.Text>
            {r.review}
            <p>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              {r.rating}
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CReview;
