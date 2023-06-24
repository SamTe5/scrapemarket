import React from 'react'
import { Col } from 'react-bootstrap'

function Erenler({ name, price }) {
  return (
    <Col sm={4} className='detailLogo'>
      <img src="images/e.png" alt="" />
      <h4>{price}</h4>
      <h5>{name}</h5>
    </Col>
  )
}

export default Erenler