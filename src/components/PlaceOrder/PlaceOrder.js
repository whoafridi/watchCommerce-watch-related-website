import { useEffect, useState } from "react";
import "./PlaceOrder.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PlaceOrder = () => {
  const { user } = useAuth();
  console.log(user.displayname);
  const { id } = useParams();

  const [service, setService] = useState([]);
  const [single, setSingle] = useState([]);

  useEffect(() => {
    fetch("https://watchcom-server.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [id]);

  useEffect(() => {
    const values = service.filter((s) => s._id === id);
    setSingle(values);
  }, [service]);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    axios
      .post("https://watchcom-server.herokuapp.com/order", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("added successfully");
          reset();
        }
      });
  };
  return (
    <div className="container">
      <h2 className="text-center mt-3">Place Order page</h2>
      <div className="row">
        <div className="col-md-6 mt-5 col-sm-12">
          {single.map((s) => (
            <div key={s._id}>
              <h4>{s.name} </h4>
              <img style={{ width: "70%" }} src={s.img} alt={s.name} />
              <p className="mt-5">{s.description}</p>
            </div>
          ))}
        </div>
        <div className="col-md-6 mt-5 col-sm-12">
          {single.map((si) => (
            <>
              <div className="book-service">
                <h2 className="text-center">Please order</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    {...register("email", { required: true })}
                    placeholder="Email"
                    value={user.email}
                  />
                  <input
                    {...register("productname", { required: true })}
                    placeholder="Product Name"
                    value={si.name}
                  />
                  <input
                    type="number"
                    {...register("price")}
                    placeholder="price"
                    value={si.price}
                  />
                  <input
                    {...register("shipping_address")}
                    placeholder="shipping address"
                  />
                  <input type="submit" />
                </form>
              </div>
              <Link to="/products">
                <Button variant="dark" type="submit" className="ms-2">
                  Back to products
                </Button>
              </Link>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
