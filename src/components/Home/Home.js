import { useEffect, useState } from "react";
import { Row, Button, Spinner } from 'react-bootstrap';
import Details from "../Details/Details";

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/products")
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
    return (
        <div>
            <div className="container">
                    <Row xs={1} md={3} className="g-4">
             {
                        products.slice(0,6).map(service => <Details key={service._id} service={service}></Details>)
            }
            </Row>
            </div>
        </div>
    )
}

export default Home;
