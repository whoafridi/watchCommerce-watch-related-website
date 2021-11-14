import {useEffect, useState} from 'react'
import {Card, Row} from 'react-bootstrap'
import CReview from '../CReview/CReview';

const CustomerReview = () => {
    const [review, setReviews] = useState([]);
    useEffect(()=>{
        fetch("https://arcane-spire-40682.herokuapp.com/review")
        .then(res => res.json())
        .then(data => setReviews(data));
    },[])
    return (
        <div className="container">
            <h2 className="text-center fw-bold mt-5">Our Clients say</h2>
            <h4 className="text-center fw-bold mb-2">Testimonials</h4>
            <Row xs={1} md={3} className="g-4">
                {
                    review.map(r => <CReview r={r} key={r._id}></CReview>)
                }
              
  </Row>
        </div>
    )
}

export default CustomerReview;