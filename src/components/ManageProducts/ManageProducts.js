import React, { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://watchcom-server.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // DELETE product
  const handleDeleteUser = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `https://watchcom-server.herokuapp.com/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingProducts = products.filter((b) => b._id !== id);
            setProducts(remainingProducts);
          }
        });
    }
  };

  return (
    <div className="container-fluid table-responsive">
      {/* <h1 className="text-center">All products details</h1> */}
      <table class="table w-100">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        {products.length === 0 ? (
          <div className="text-center">
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="dark" />
          </div>
        ) : (
          products.map((s) => (
            <tbody>
              <tr>
                <th scope="row">{s.name}</th>
                <td>{s.price}</td>
                <td>
                  <Button
                    variant="dark"
                    onClick={() => handleDeleteUser(s._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            </tbody>
          ))
        )}
      </table>
    </div>
  );
};

export default ManageProducts;
