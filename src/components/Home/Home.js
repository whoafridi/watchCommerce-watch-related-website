import { useEffect, useState } from "react";
import { Row, Button, Spinner } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import CustomerReview from "../CustomerReview/CustomerReview";
import Details from "../Details/Details";
import Faq from "../Faq/Faq";
import Interest from "../Interest/Interest";

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch("https://arcane-spire-40682.herokuapp.com/products")
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
    return (
        <div >
            <Banner/>
            <div className="container mt-4">
                    <Row xs={1} md={3} className="g-4">
             {
                        products.slice(0,6).map(service => <Details key={service._id} service={service}></Details>)
            }
            </Row>
            <div className="row">
                <div className="col-md-12 text-center">
                    
                    <Link to="/products"> <Button variant="primary">   Explore more products   </Button></Link>
                  
                </div>
            </div>
            </div>
            <Interest/>
            <CustomerReview/>
            <Faq/>
        </div>
    )
}

export default Home;
