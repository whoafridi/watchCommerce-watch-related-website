import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import "./DashBoardHome.css";
import watch from "../../images/shopping-bag.png";
import watch1 from "../../images/order.png";
import watch2 from "../../images/inventory.png";
import watch3 from '../../images/watch2.svg';

const DashBoardHome = () => {
  const { user, admin } = useAuth();
  const [products, setProducts] = useState([]);
  const [books, setBooks] = useState([]);
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

  useEffect(() => {
    fetch("https://arcane-spire-40682.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  useEffect(() => {
    fetch(`https://arcane-spire-40682.herokuapp.com/order`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="container mb-4">
      <div className="row ">
        <div className="col-md-4 col-sm-6 py-3">
          <div class="card border border-left-dark border-gray text-secondary border-left-primary shadow h-100 py-2">
            <div class="card-body">
              <h5 class="card-title border-left-dark text-center fw-bold">
                <i class="fas fa-cog fa-spin"></i> My orders
              </h5>
              <div className="row">
                <div className="d-flex justify-content-evenly">
                  <img src={watch} className="img-fluid w-25" />
                  <p class="card-text text-center fw-bold pt-3 mt-3">
                    {book.length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {admin && (
          <>
            <div className="col-md-4 col-sm-6 py-3">
              <div class="card text-secondary border-left-primary shadow h-100 py-2">
                <div class="card-body">
                  <h5 class="card-title text-center fw-bold">
                    <i class="fas fa-circle-notch fa-spin"></i> All orders
                  </h5>
                  <div className="row">
                    <div className="d-flex justify-content-evenly">
                      <img src={watch2} className="img-fluid w-25" />
                      <p class="card-text text-center fw-bold pt-3 mt-3">
                        {books.length}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 py-3">
              <div class="card text-secondary border-left-primary shadow h-100 py-2">
                <div class="card-body">
                  <h5 class="card-title  text-center  fw-bold">
                    <i class="fas fa-circle-notch fa-spin"></i> Total items
                  </h5>
                  <div className="row">
                    <div className="d-flex justify-content-evenly">
                      <img src={watch1} className="img-fluid w-25" />
                      <p class="card-text text-center fw-bold pt-3 mt-3">
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
      <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Dummy 0</h5>
        <img class="img-fluid" src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg" alt="..."/>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Dummy 1</h5>
        <img class="img-fluid"  src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg" alt="..."/>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        
      </div>
    </div>
  </div>
  
</div>
<div class="card mb-3 mt-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={watch3} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
</div>
  );
};

export default DashBoardHome;
