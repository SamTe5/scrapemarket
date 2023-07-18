import React from 'react'
import { Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function Sliders(props) {
    return (
        <Col sm={2}>
            <div className='text-center'>
                <h3>{props.name}</h3>
                <Carousel nextIcon={null} prevIcon={null} indicators={false}>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={props.url}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h5>{props.market}</h5>
                            <h6>{props.food}</h6>
                            <p>{props.price}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src={props.url}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h5>{props.market2}</h5>
                            <h6>{props.food2}</h6>
                            <p>{props.price2}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={props.url}
                            alt="Third slide"
                        />
                        <Carousel.Caption className='pt-1'>
                            <h5>{props.market3}</h5>
                            <h6>{props.food3}</h6>
                            <p>
                                {props.price3}
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </Col>
    )
}

export default Sliders