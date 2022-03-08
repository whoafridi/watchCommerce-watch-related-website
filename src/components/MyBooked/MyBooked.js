import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Button } from "react-bootstrap";

const MyBooked = () => {
  const { user } = useAuth();
  const [book, setBook] = useState([]);
  const [single, setSingle] = useState([]);

  useEffect(() => {
    fetch(`https://arcane-spire-40682.herokuapp.com/order/${user.email}`)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, [user]);

  useEffect(() => {
    const values = book.filter((s) => s.email === user.email);
    setSingle(values);
  }, [book]);

  // DELETE AN USER
  const handleDeleteUser = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `https://arcane-spire-40682.herokuapp.com/order/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingBooks = book.filter((b) => b._id !== id);
            setBook(remainingBooks);
          }
        });
    }
  };

  return (
    <div className="container-fluid table-responsive">
      <h1 className="h2 text-center fw-bold"> My orders</h1>
      {/* <div className="d-flex mt-3 justify-content-center"> */}
        <table className="table w-100">
          <thead>
            <tr>
              <th scope="col">Email</th>
              <th scope="col">Product Name</th>
              <th scope="col">Address</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          {single.map((s) => (
            <tbody>
              <tr>
                <th scope="row">{s.email}</th>
                <td>{s.productname}</td>
                <td>{s.shipping_address}</td>
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
          ))}
        </table>
      </div>
    // </div>
  );
};

export default MyBooked;
