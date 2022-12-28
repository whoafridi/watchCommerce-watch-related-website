import { Spinner } from "react-bootstrap";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ s }) => {
  const { price, email, _id } = s;

  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState("");

  useEffect(() => {
    fetch("https://watch-commerce.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
    } else {
      setError("");
      setSuccess("");
      console.log("[PaymentMethod]", paymentMethod);
    }
    // payment intent
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: email,
          },
        },
      });
    if (intentError) {
      setError(intentError.message);
      setSuccess("");
    } else {
      setError("");
      setSuccess("Your payment processed successfully.");
      console.log(paymentIntent);
      setProcessing(false);
      // save to database
      const payment = {
        amount: paymentIntent.amount,
        created: paymentIntent.created,
        last4: paymentMethod.card.last4,
        transaction: paymentIntent.client_secret,
      };
      const url = `https://watch-commerce.vercel.app/order/${_id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };
  return (
    <div className="mt-3 mb-3">
      <form onSubmit={handleSubmit} className="mt-3 mb-3">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />{" "}
        {processing ? (
          <Spinner animation="grow" variant="success" />
        ) : (
          <button
            type="submit"
            disabled={!stripe || success}
            className="mt-2 mb-2 rounded-pill text-dark"
          >
            Pay ${price}
          </button>
        )}
      </form>
      {error && <p className="text-muted mt-2">{error}</p>}
      {success && <p className="text-muted mt-2">{success}</p>}
    </div>
  );
};

export default CheckoutForm;
