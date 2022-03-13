import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const MyBooked = () => {
  const { user } = useAuth();
  const [book, setBook] = useState([]);

  useEffect(() => {
    fetch(`https://watchcom-server.herokuapp.com/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, []);

  // DELETE AN USER
  const handleDeleteOrder = (id) => {
    console.log(id);
    swal({
      title: "Do you want to delete a product?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const url = `https://watchcom-server.herokuapp.com/order/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              swal("You have deleted an order", "Well Done!", {
                icon: "success",
                timer: 1300,
              });
              const remainingBooks = book.filter((b) => b._id !== id);
              setBook(remainingBooks);
            }
          });
      }
    });
  };

  return (
    <div className="container-fluid table-responsive">
      <h1 className="h2 text-center fw-bold"> My orders</h1>
      <table className="table w-100">
        <thead>
          <tr>
            <th scope="col">Email</th>
            <th scope="col">Product Name</th>
            <th scope="col">Address</th>
            <th scope="col">Price</th>
            <th scope="col">X</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {book.length === 0 ? (
          <div className="text-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          book.map((s) => (
            <tbody>
              <tr>
                <th scope="row">{s.email}</th>
                <td>{s.productname}</td>
                <td>{s.shipping_address}</td>
                <td>{s.price}</td>
                <td>
                  {s.payment ? (
                    <p className="badge rounded-pill bg-dark">
                      Purchased!
                    </p>
                  ) : (
                    <Button
                      variant="danger"
                      className="rounded-pill"
                      onClick={() => handleDeleteOrder(s._id)}
                    >
                      Delete
                    </Button>
                  )}
                </td>
                <td>
                  {s.payment ? (
                    <p className="badge rounded-pill bg-dark">Paid</p>
                  ) : (
                    <Link to={`/dashboard/payment/${s._id}`}>
                      <Button variant="dark" className="rounded-pill">
                        Purchase
                      </Button>
                    </Link>
                  )}
                </td>
              </tr>
            </tbody>
          ))
        )}
      </table>
    </div>
  );
};

export default MyBooked;
