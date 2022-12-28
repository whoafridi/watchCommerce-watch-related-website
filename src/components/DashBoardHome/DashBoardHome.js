import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import "./DashBoardHome.css";
import watch from "../../images/shopping-bag.png";
import watch1 from "../../images/order.png";
import watch2 from "../../images/inventory.png";
import watch3 from "../../images/watch2.svg";
import useProducts from "../../hooks/useProducts";
import useOrders from "../../hooks/useOrder";

const DashBoardHome = () => {
  const { user, admin } = useAuth();
  const [products] = useProducts();
  const [order, setOrder] = useOrders();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`https://watch-commerce.vercel.app/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="container mb-4">
      <div className="row ">
        <div className="col-md-4 col-sm-6 py-3">
          <div className="card border border-left-dark border-gray text-secondary border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <h5 className="card-title border-left-dark text-center fw-bold">
                <i className="fas fa-cog fa-spin"></i> My orders
              </h5>
              <div className="row">
                <div className="d-flex justify-content-evenly">
                  <img src={watch} className="img-fluid w-25" />
                  <p className="card-text text-center fw-bold pt-3 mt-3">
                    {books.length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {admin && (
          <>
            <div className="col-md-4 col-sm-6 py-3">
              <div className="card text-secondary border-left-primary shadow h-100 py-2">
                <div className="card-body">
                  <h5 className="card-title text-center fw-bold">
                    <i className="fas fa-circle-notch fa-spin"></i> All orders
                  </h5>
                  <div className="row">
                    <div className="d-flex justify-content-evenly">
                      <img src={watch2} className="img-fluid w-25" />
                      <p className="card-text text-center fw-bold pt-3 mt-3">
                        {order.length}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 py-3">
              <div className="card text-secondary border-left-primary shadow h-100 py-2">
                <div className="card-body">
                  <h5 className="card-title  text-center  fw-bold">
                    <i className="fas fa-circle-notch fa-spin"></i> Total items
                  </h5>
                  <div className="row">
                    <div className="d-flex justify-content-evenly">
                      <img src={watch1} className="img-fluid w-25" />
                      <p className="card-text text-center fw-bold pt-3 mt-3">
                        {products.length}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      {/* <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Dummy 0</h5>
              <img
                className="img-fluid"
                src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg"
                alt="..."
              />
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Dummy 1</h5>
              <img
                className="img-fluid"
                src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg"
                alt="..."
              />
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default DashBoardHome;
