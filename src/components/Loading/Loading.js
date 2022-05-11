import { Card, Col, Button } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
  return (
    <>
      <Col>
        <Card className="border rounded-3 shadow p-3 mb-5 bg-body rounded">
          <Skeleton circle={true} height={250} />
          <Skeleton />
          <Skeleton />
          <Card.Body>
            <Skeleton />
            <Skeleton count={5} />
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Loading;
