import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductDetail = ({s}) => {
    const { _id ,img, description, name, price} = s;
    return (
        <>
        <div className="row mt-3 align-items-center">
            <div className="col-lg-5 col-sm-12">
                <h2 className="text-center fe-bold">{name}</h2>
                <img style={{width:"90%"}} src={img} alt={name}/>
            </div>
            <div className="col-lg-7 col-sm-12">
                <p className="mt-5">{description}</p>
                <h6>Price : {price}</h6>
            </div>
        </div>
            <Link to="/products">
                <Button variant="warning" type="submit" className="mt-2">
                    Back to products
                </Button>
            </Link>
            <Link to={`/placeorder/${_id}`}>
                <Button variant="primary" type="submit" className="mt-2 ms-2">Place order</Button>
            </Link>
            
    </>
    )
}

export default ProductDetail;
