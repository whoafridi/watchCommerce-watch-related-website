import axios from 'axios';
import { useForm } from "react-hook-form";

const Review = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {

        axios.post('https://arcane-spire-40682.herokuapp.com/review', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div className="add-service container mt-5">
        <h2 className="text-center">Please Add a review</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("review", { required: true, maxLength: 200 })} placeholder="Youre review" />
            <input type="number" {...register("rating")} placeholder="rating" />
            <input type="submit" />
        </form>
    </div>
    )
}

export default Review;
