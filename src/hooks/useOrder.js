import React, { useEffect, useState } from "react";

const useOrders = () => {
  const [order, setOrder] = useState([]);
  useEffect(() => {
    fetch("https://watchcom-server.herokuapp.com/order")
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);
  return [order, setOrder];
};

export default useOrders;
