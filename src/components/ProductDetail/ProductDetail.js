import { Button, Modal, Tab, Tabs, Card, Placeholder } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import ReactStars from "react-rating-stars-component";
import { useForm } from "react-hook-form";
import "./ProductDetail.css";
import swal from "sweetalert";

const ProductDetail = ({ s }) => {
  const { user } = useAuth();
  const [show, setShow] = useState(false);
  const [key, setKey] = useState("home");
  const [star, setStar] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const ratingChanged = (newRating) => {
    setStar(newRating);
    console.log(newRating);
  };
  const onSubmit = (data) => {
    data.rating = star;
    setStar(0);
    let today = new Date();
    let date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    let time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + " " + time;
    data.time = dateTime;
    console.log(data);

    // fetch("https://watch-commerce.vercel.app/review", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.insertedId) {
    //       swal("Reviewed successfully!", "success", {
    //         icon: "success",
    //         button: false,
    //         timer: 1300,
    //       });
    //     }
    //   });
    reset();
  };
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
                <div className="review">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="mb-2">Email</label>
                    <input
                      className="rounded"
                      {...register("email", { required: true })}
                      placeholder="Email"
                      value={user.email}
                    />
                    <label className="mb-2">User Name</label>
                    <input
                      className="rounded"
                      {...register("name")}
                      placeholder="User name"
                      value={user.displayName}
                    />
                    <label className="mb-2">Product Name</label>
                    <input
                      className="rounded"
                      {...register("productname", { required: true })}
                      placeholder="Product Name"
                      value={s.name}
                    />
                    <label className="mb-2">Review us</label>
                    <input
                      className="rounded"
                      {...register("review_us", { required: true })}
                      placeholder="review_us"
                    />
                    {errors.review_us && (
                      <p className="text-danger">Please fill up review</p>
                    )}
                    <label className="mb-2">Rate us</label>
                    <ReactStars
                      count={5}
                      required
                      className="mt-3 mb-2"
                      onChange={ratingChanged}
                      size={24}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700"
                    />
                    <input
                      className="rounded-pill"
                      type="submit"
                      onClick={handleClose}
                    />
                  </form>
                </div>
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
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                  </Placeholder>
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                    <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                    <Placeholder xs={8} />
                  </Placeholder>
                  <Placeholder.Button variant="primary" xs={6} />
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                  </Placeholder>
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                    <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                    <Placeholder xs={8} />
                  </Placeholder>
                  <Placeholder.Button variant="primary" xs={6} />
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                  </Placeholder>
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                    <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                    <Placeholder xs={8} />
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
