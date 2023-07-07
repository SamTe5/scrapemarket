import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Sliders from './Sliders';

function HomeSlider() {
  return (
    <Col sm={10}>
      <Row className='justify-content-end'>
        <Sliders 
          name="Fruits"
        />
        <Sliders
          name="Vegetables"
        />
        <Sliders
          name="Basic Foods"
        />
        <Sliders
          name="Untitled"
        />
        <Sliders
          name="Untitled"
        />
        
      </Row>
    </Col>
  )
}

export default HomeSlider