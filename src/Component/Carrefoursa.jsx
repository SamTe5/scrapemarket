import React from 'react'
import { Col } from 'react-bootstrap'

function Carrefoursa({ name, price }) {
  return (

    <Col sm={4} className='detailLogo'>
      <img src="images/c.png" alt="" />
      <h4>{price}</h4>
      <h5>{name}</h5>
    </Col>

  )
}

export default Carrefoursa