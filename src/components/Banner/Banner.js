import { Carousel} from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                    className="d-block w-50"
                    src="https://www.benbridge.com/on/demandware.static/-/Sites-bbj-master-catalog/default/dw8ad8b37f/images/11628963_07.jpg"
                    alt="P2P"
                    />
                    <Carousel.Caption>
                    <h5>watch 3</h5>
                    <p>-------</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block justify-content-center w-50"
                    src="https://i.pinimg.com/originals/2d/c8/d4/2dc8d484c9ed392e92b66625c73cdcb0.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h5>watch</h5>
                    <p>-----</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Banner;