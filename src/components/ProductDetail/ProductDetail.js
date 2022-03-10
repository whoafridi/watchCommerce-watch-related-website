import { Button, Modal, Form, FloatingLabel, Tab, Tabs, Card, Placeholder } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import CReview from "../CReview/CReview";

const ProductDetail = ({ s }) => {
  const { user } = useAuth();
  const [show, setShow] = useState(false);
  const [key, setKey] = useState("home");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { _id, img, description, name, price } = s;
  return (
    <>
      <div className="container mb-5">
        <div className="row mt-3 align-items-center">
          <div className="col-lg-5 col-sm-12">
            <h2 className="text-center fe-bold">{name}</h2>
            <img style={{ width: "90%" }} src={img} alt={name} />
          </div>
          <div className="col-lg-7 col-sm-12">
            <p className="mt-5">{description}</p>
            <h6>Price : {price}</h6>
            <Button
              variant="primary"
              className="rounded-pill"
              onClick={handleShow}
            >
              Add a Review
            </Button>
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Add a review</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <FloatingLabel
                    controlId="floatingUserName"
                    label="User name"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Name"
                      value={user?.displayName}
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                  >
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      value={user?.email}
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingProductName"
                    label="Product name"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Product Name"
                      value={name}
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingReview"
                    label="Review"
                    className="mb-3"
                  >
                    <Form.Control type="text" placeholder="Review" />
                  </FloatingLabel>
                  <Button
                    variant="primary"
                    className="rounded-pill"
                    onClick={handleClose}
                  >
                    Submit
                  </Button>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  onClick={handleClose}
                  className="rounded-pill"
                >
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
        <Link to="/products">
          <Button variant="warning" type="submit" className="mt-2 rounded-pill">
            Back to products
          </Button>
        </Link>
        <Link to={`/placeorder/${_id}`}>
          <Button
            variant="primary"
            type="submit"
            className="mt-2 ms-2 rounded-pill"
          >
            Place order
          </Button>
        </Link>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3 mt-3"
        >
          <Tab eventKey="home" title="Deatil information">
            {description}
          </Tab>
          <Tab eventKey="profile" title="Reviews">
          <div className="d-flex justify-content-around">
          <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Placeholder as={Card.Title} animation="glow">
        <Placeholder xs={6} />
      </Placeholder>
      <Placeholder as={Card.Text} animation="glow">
        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
        <Placeholder xs={6} /> <Placeholder xs={8} />
      </Placeholder>
      <Placeholder.Button variant="primary" xs={6} />
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Placeholder as={Card.Title} animation="glow">
        <Placeholder xs={6} />
      </Placeholder>
      <Placeholder as={Card.Text} animation="glow">
        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
        <Placeholder xs={6} /> <Placeholder xs={8} />
      </Placeholder>
      <Placeholder.Button variant="primary" xs={6} />
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Placeholder as={Card.Title} animation="glow">
        <Placeholder xs={6} />
      </Placeholder>
      <Placeholder as={Card.Text} animation="glow">
        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
        <Placeholder xs={6} /> <Placeholder xs={8} />
      </Placeholder>
      <Placeholder.Button variant="primary" xs={6} />
    </Card.Body>
  </Card>
  </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default ProductDetail;
