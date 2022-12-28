import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51KbTVTI4UIxXqGmF0PaxFbllANd7sQwJQyR7x2cZ1tU7wq5rULFAQJ3JOoGDwDOCvuIP3I21vkFnSGBSJh5BVnoc00K1nQVEVv"
);

const Payment = () => {
  const { paymentId } = useParams();

  const [service, setService] = useState([]);
  const [single, setSingle] = useState([]);

  useEffect(() => {
    fetch("https://watch-commerce.vercel.app/order")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [paymentId]);

  useEffect(() => {
    const values = service.filter((s) => s._id === paymentId);
    setSingle(values);
  }, [service]);
  console.log(single);

  return (
    <div className="container text-center fw-bold mt-5 ">
      {single.length === 0 ? (
        <>
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
          <Spinner animation="grow" variant="dark" />
        </>
      ) : (
        single.map((s) => (
          <div key={s._id} className="text-dark">
            <h3>Please pay for {s.productname}</h3>
            <h6>Email : {s.email} </h6>
            <h6>Product Name : {s.productname} </h6>
            <p className="mt-2">Price : ${s.price}</p>
            {s?.price && (
              <Elements stripe={stripePromise} className="rounded-pill">
                <CheckoutForm s={s} />
              </Elements>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Payment;
