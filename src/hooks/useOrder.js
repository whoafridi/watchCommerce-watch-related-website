import React, { useEffect, useState } from "react";

const useOrders = () => {
  const [order, setOrder] = useState([]);
  useEffect(() => {
    fetch("https://watch-commerce.vercel.app/order")
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);
  return [order, setOrder];
};

export default useOrders;
