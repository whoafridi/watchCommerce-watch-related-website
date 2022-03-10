import axios from "axios";
import { useForm } from "react-hook-form";
import "./AddProduct.css";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    axios
      .post("https://watchcom-server.herokuapp.com/products", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Added successfully");
          reset();
        }
      });
  };

  return (
    <div className="add-service mt-3 container">
      <h2 className="text-center mt-3">Please Add a Product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="rounded"
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Product Name"
        />
        <textarea
          className="rounded"
          {...register("description")}
          placeholder="Description"
        />
        <input
          className="rounded"
          type="number"
          {...register("price")}
          placeholder="price"
        />
        <input
          className="rounded"
          {...register("img")}
          placeholder="image url"
        />
        <input className="rounded" type="submit" />
      </form>
    </div>
  );
};

export default AddProduct;
