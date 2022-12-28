import React, { useEffect, useState } from "react";

export const useReview = () => {
    const [review, setReviews] = useState([]);

    useEffect(() => {
      fetch("https://watch-commerce.vercel.app/review")
        .then((res) => res.json())
        .then((data) => setReviews(data));
    }, []);
    return [review, setReviews];
}
