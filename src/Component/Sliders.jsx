import React from 'react'
import { Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function Sliders(propsum) {
    return (
        <Col sm={2}>
            <div className='text-center'>
                <h3>{propsum.name}</h3>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={propsum.url}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h5>{propsum.market}</h5>
                            <h6>{propsum.food}</h6>
                            <p>{propsum.price}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src={propsum.url}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h5>{propsum.market2}</h5>
                            <h6>{propsum.food2}</h6>
                            <p>{propsum.price2}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={propsum.url}
                            alt="Third slide"
                        />
                        <Carousel.Caption className='pt-1'>
                            <h5>{propsum.market3}</h5>
                            <h6>{propsum.food3}</h6>
                            <p>
                                {propsum.price3}
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </Col>
    )
}

export default Sliders