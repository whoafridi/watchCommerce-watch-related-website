import MyBooked from "../MyBooked/MyBooked"
import { Button } from "react-bootstrap";
import {Switch,Route,Link,useRouteMatch} from "react-router-dom";
import Payment from "../Payment/Payment";
import Review from "../Review/Review";
import DashBoardHome from "../DashBoardHome/DashBoardHome";
import ManageBooked from "../ManageBooked/ManageBooked";
import AddProduct from "../AddProduct/AddProduct";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import useAuth from '../../hooks/useAuth';
import AdminRoute from "../AdminRoute/AdminRoute";
import ManageProducts from "../ManageProducts/ManageProducts";

const DashBoard = () => {
    let { path, url } = useRouteMatch();
    const {admin} = useAuth();

    return (
        <div className="container mt-3">
            <Link to={`${url}`}><Button variant="dark" className="me-2">Dashboard</Button></Link>
            <Link to={`${url}/myorder`}><Button variant="dark" className="me-2">My orders</Button></Link>
            <Link to={`${url}/review`}><Button variant="dark" className="me-2">Review</Button></Link>
            <Link to={`${url}/payment`}><Button variant="dark" className="me-2">Payment</Button></Link>
        { admin && 
        <>
            <Link to={`${url}/manageproducts`}><Button variant="dark" className="me-2">Manage all products</Button></Link>
            <Link to={`${url}/manageorder`}><Button variant="dark" className="me-2">Manage Order</Button></Link>
            <Link to={`${url}/makeadmin`}><Button variant="dark" className="me-2">Make Admin</Button></Link>
            <Link to={`${url}/addproduct`}><Button variant="dark" className="me-2">Add Product</Button></Link>
        </>
        }
      
            <Switch>
                    <Route exact path={path}>
                        <DashBoardHome/>
                    </Route>
                    <Route path={`${path}/myorder`}>
                        <MyBooked/>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review/>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment/>
                    </Route>
                    <AdminRoute path={`${path}/manageproducts`}>
                        <ManageProducts/>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageorder`}>
                        <ManageBooked/>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addproduct`}>
                        <AddProduct/>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                </Switch>
        </div>
    )
}

export default DashBoard
