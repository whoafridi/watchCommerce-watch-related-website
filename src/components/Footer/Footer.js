import "./Footer.css";
import payment from "../../images/payment.jpg";

const Footer = () => {
  return (
    <div className="container footer">
      <div className="row">
        <div className="col-md-3 mt-5 col-sm-12">
          <h3 className="title">watchCommerce</h3>
          <p className="title">12/2, Dhanmondi 3-A, Dhaka-1209</p>
          <p className="title">info@r.com</p>
          <p className="title">Hotline: 0980987665</p>
        </div>
        <div className="col-md-3 mt-5 col-sm-12">
          <h2 className="title">About company</h2>
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <p className="title">Home</p>
              <p className="title">About</p>
              <p className="title">Contact</p>
            </div>
            <div className="col-md-6 col-sm-6">
              <p className="title">Blog</p>
              <p className="title">Services</p>
              <p className="title">FAQs</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-5 col-sm-12">
          <h2 className="title">Our services</h2>
          <div className="row">
            <div className="col-md-6 col-sm-6">
            <p className="title">Regsitration</p>
          <p className="title">Order a watch</p>
          <p className="title">Buy a watch</p>
            </div>
            <div className="col-md-6 col-sm-6">
            <p className="title">Login</p>
          <p className="title">Review</p>
          <p className="title">Payment</p>
            </div>
        </div>
        </div>
        <div className="col-md-3 mt-5 col-sm-12">
          <h2 className="title">Payment</h2>
          <img src={payment} className="img-fluid h-50 w-100" />
        </div>
        <div>
          <h2 className="text-center title">Follow social network</h2>
          <div className="icons">
            <h1>
              <i className="bx bxl-facebook-circle"></i>
            </h1>
            <h1>
              <i className="bx bxl-twitter"></i>
            </h1>
            <h1>
              <i className="bx bxl-linkedin"></i>
            </h1>
          </div>
        </div>
        <p className="text-center title mt-3">
          Copyright © 2021 watchCommerce - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
