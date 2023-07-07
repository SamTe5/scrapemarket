import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Sliders from './Sliders';

function HomeSlider(props) {
  return (
    <Col sm={10}>
      <Row className='justify-content-end'>
        <Sliders/>
        <Sliders/>
        <Sliders/>
        <Sliders/>
        <Sliders/>
        
      </Row>
    </Col>
  )
}

export default HomeSlider