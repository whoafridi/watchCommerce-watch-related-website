import { Button, InputGroup, FormControl } from 'react-bootstrap'
import './Footer.css'

const Footer = () => {
    return (
        <div className="container mt-5 footer">
        <div className="row">
            <div className="col-md-4 mt-5 col-sm-12">
                <h3 className="title">ProCourier</h3>
                <p  className="title">12/2, Dhanmondi 3-A, Dhaka-1209</p>
                <p  className="title">info@procourier.com</p>
                <p  className="title">Hotline: 0980987665</p>
            </div>
            <div className="col-md-4 mt-5 col-sm-12">
            <h2 className="text-center fw-bold title">Subscribe to our newsletter</h2>
        <InputGroup >
            <FormControl className="rounded"
                placeholder="Your email address"
                aria-label="Your email"
                aria-describedby="basic-addon2"
            />
            <Button variant="secondary" id="button-addon2" className="rounded ms-2">
                Subscribe
            </Button>
        </InputGroup>
            </div>
            <div className="col-md-4 mt-5 col-sm-12">
            <h2 className="text-center fw-bold title">Follow social network</h2>
                <div className="icons">
                    <h1><i className='bx bxl-facebook-circle'></i></h1>
                    <h1><i className='bx bxl-twitter'></i></h1>
                    <h1><i className='bx bxl-linkedin' ></i></h1>
                </div>
            </div>
        </div>
        <h5 className="text-center title">Copyright © 2021 ProCourier - All Rights Reserved.</h5>
    </div>
    )
}

export default Footer;
