import React from 'react'
import { Row,Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function HomeSlider(props) {
  return (
    <Col sm={10}>
      <Row className='justify-content-end'>
        <Col sm={2}>İlk</Col>
        <Col sm={2}>ikinci</Col>
        <Col sm={2}>Üçüncü</Col>
        <Col sm={2}>Dördüncü</Col>
        <Col sm={2}>Beşinci</Col>
      </Row>    
    </Col>
  )
}

export default HomeSlider