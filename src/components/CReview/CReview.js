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
        <Card.Body>
        <h1 className="h1 w-100 text-center"><i className='bx bxs-user-circle'></i></h1>
          <Card.Text>
          <h3 className="text-center">{r.displayName}</h3>
            <p className="text-center">{r.review}</p>
            <p className="text-center">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              {r.rating}
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CReview;
