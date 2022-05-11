import React from "react";
import { Button, Spinner } from "react-bootstrap";
import swal from "sweetalert";
import useProducts from "../../hooks/useProducts";

const ManageProducts = () => {
  const [products, setProducts] = useProducts([]);

  // DELETE product
  const handleDeleteUser = (id) => {
    swal({
      title: "Do you want to delete a product?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const url = `https://watchcom-server.herokuapp.com/products/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              swal("You have deleted a product", "Well Done!", {
                icon: "success",
                timer: 1300,
              });
              const remainingProducts = products.filter((b) => b._id !== id);
              setProducts(remainingProducts);
            }
          });
      }
    });
  };

  return (
    <div className="container-fluid table-responsive">
      {/* <h1 className="text-center">All products details</h1> */}
      <table className="table w-100">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
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
                  <Button className="rounded-pill"
                    variant="danger"
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
