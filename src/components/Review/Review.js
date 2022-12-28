import axios from "axios";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const Review = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    axios
      .post("https://watch-commerce.vercel.app/review", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("added successfully");
          reset();
        }
      });
  };
  return (
    <div className="add-service container ">
      <h2 className="text-center">Please Add a review</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="rounded-pill"
          {...register("name", { required: true, maxLength: 200 })}
          placeholder="Youre review"
          value={user.displayName}
        />

        <input
          className="rounded-pill"
          {...register("review", { required: true, maxLength: 200 })}
          placeholder="Youre review"
        />
        <input
          className="rounded-pill"
          type="number"
          {...register("rating")}
          placeholder="rating"
        />
        <input type="submit" 
          className="rounded-pill"
        />
      </form>
    </div>
  );
};

export default Review;
