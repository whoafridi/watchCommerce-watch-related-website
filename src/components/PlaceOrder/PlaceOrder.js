import { useEffect, useState } from "react";
import "./PlaceOrder.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";

const PlaceOrder = () => {
  const { user } = useAuth();
  const history = useHistory();
  const { id } = useParams();

  const [service, setService] = useState([]);
  const [single, setSingle] = useState([]);

  useEffect(() => {
    fetch("https://watch-commerce.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [id]);

  useEffect(() => {
    const values = service.filter((s) => s._id === id);
    setSingle(values);
  }, [service]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    swal({
      title: "Do you want to order a product?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) { 
        axios
          .post("https://watch-commerce.vercel.app/order", data)
          .then((res) => {
            if (res.data.insertedId) {
              console.log(data);
              swal("You have placed an order", "Well Done!", {
                icon: "success",
                timer: 1300,
              });
              reset();
              history.push("/products");
            }
          });
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
                  <label className="mb-1">Email</label>
                  <input
                    className="rounded"
                    {...register("email", { required: true })}
                    placeholder="Email"
                    value={user.email}
                  />
                  <label className="mb-1">Product Name</label>
                  <input
                    className="rounded"
                    {...register("productname", { required: true })}
                    placeholder="Product Name"
                    value={si.name}
                  />
                  <label className="mb-1">Price</label>
                  <input
                    className="rounded"
                    type="number"
                    {...register("price")}
                    placeholder="price"
                    value={si.price}
                  />
                  <label className="mb-1">Shipping address</label>
                  <input
                    className="rounded"
                    {...register("shipping_address", { required: true })}
                    placeholder="shipping address"
                  />
                  {errors.shipping_address && (
                    <p className="text-danger">Please add a shipping address</p>
                  )}
                  <input className="rounded-pill" type="submit" />
                </form>
              </div>
              <div className="d-flex justify-content-center">
                <Link to="/products">
                  <Button
                    variant="dark"
                    type="submit"
                    className="rounded-pill text-center"
                  >
                    Back to products
                  </Button>
                </Link>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
