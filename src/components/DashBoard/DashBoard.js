import MyBooked from "../MyBooked/MyBooked";
// import { Button } from "react-bootstrap";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Payment from "../Payment/Payment";
import Review from "../Review/Review";
import DashBoardHome from "../DashBoardHome/DashBoardHome";
import ManageBooked from "../ManageBooked/ManageBooked";
import AddProduct from "../AddProduct/AddProduct";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import useAuth from "../../hooks/useAuth";
import AdminRoute from "../AdminRoute/AdminRoute";
import ManageProducts from "../ManageProducts/ManageProducts";
import "./Dashboard.css";

const DashBoard = () => {
  let { path, url } = useRouteMatch();
  const { admin, user } = useAuth();

  return (
    <div className="container-fluid">
      <div className="row mt-2">
        <div className="col-md-2 col-sm-12 border-end border-4  rounded bginfo">
          {user?.photoURL ? (
            <div className="mt-2 d-flex justify-content-center">
              {" "}
              <img
                src={user?.photoURL}
                className="w-25 rounded-circle text-center"
                alt="Not found"
              />{" "}
            </div>
          ) : (
            <h6 className="text-white text-center mt-2">Image not found</h6>
          )}

          <h6 className="text-white fw-bold text-center mt-2">
            {user?.displayName}
          </h6>

          <div className="d-flex flex-col">
            <div className="input-group mt-2">
              <input
                type="text"
                className="form-control rounded-pill"
                placeholder="search"
              />
            </div>
          </div>
          <div className="list-group list-group-flush my-3 ">
            <Link
              to={`${url}`}
              className="me-2 text-decoration-none text-white list-group-item list-group-item-action bg-transparent"
            >
              {" "}
              <i className="fa-solid fa-house"></i> Dashboard
            </Link>
            <Link
              to={`${url}/myorder`}
              className="me-2 text-decoration-none text-white list-group-item list-group-item-action bg-transparent"
            >
              <i className="fas fa-project-diagram me-2"></i>
              My orders
            </Link>
            <Link
              to={`${url}/review`}
              className="me-2 text-decoration-none text-white list-group-item list-group-item-action bg-transparent"
            >
              <i className="fas fa-chart-line me-2"></i>
              Review
            </Link>
            {/* <Link
              to={`${url}/payment`}
              className="me-2 text-decoration-none text-white list-group-item list-group-item-action bg-transparent"
            >
              <i className="fas fa-chart-line me-2"></i>
              Payment
            </Link> */}
            {admin && (
              <>
                <Link
                  to={`${url}/manageproducts`}
                  className="me-2 text-decoration-none text-white list-group-item list-group-item-action bg-transparent"
                >
                  <i className="fas fa-chart-line me-2"></i>
                  Manage all products
                </Link>
                <Link
                  to={`${url}/manageorder`}
                  className="me-2 text-decoration-none text-white list-group-item list-group-item-action bg-transparent"
                >
                  <i className="fas fa-shopping-cart me-2"></i>
                  Manage Order
                </Link>
                <Link
                  to={`${url}/makeadmin`}
                  className="me-2 text-decoration-none text-white list-group-item list-group-item-action bg-transparent"
                >
                  <i className="fas fa-chart-line me-2"></i>
                  Make Admin
                </Link>
                <Link
                  to={`${url}/addproduct`}
                  className="me-2 text-decoration-none text-white list-group-item list-group-item-action bg-transparent"
                >
                  <i className="fas fa-gift me-2"></i>
                  Add Product
                </Link>
              </>
            )}
          </div>
        </div>
        <div className="col-md-10 col-sm-12">
          <div className="d-flex mt-4 justify-content-between">
            <h3 className="ms-4 text-muted">
              {" "}
              <i className="fa-solid fa-house"></i> Dashboard
            </h3>
            <div className="input-group  w-25">
              <input
                type="text"
                className="form-control rounded-pill"
                placeholder="Search"
              />
            </div>
          </div>
          <hr className="solid"></hr>
          <Switch>
            <Route exact path={path}>
              <DashBoardHome />
            </Route>
            <Route path={`${path}/myorder`}>
              <MyBooked />
            </Route>
            <Route path={`${path}/review`}>
              <Review />
            </Route>
            <Route path={`${path}/payment/:paymentId`}>
              <Payment />
            </Route>
            <AdminRoute path={`${path}/manageproducts`}>
              <ManageProducts />
            </AdminRoute>
            <AdminRoute path={`${path}/manageorder`}>
              <ManageBooked />
            </AdminRoute>
            <AdminRoute path={`${path}/addproduct`}>
              <AddProduct />
            </AdminRoute>
            <AdminRoute path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
