import React from 'react'
import { Col } from 'react-bootstrap'

function Migros({ price, name }) {
  return (

    <Col sm={4} className='detailLogo'>      
        <img src="images/m.png" alt="" />
        <h4>{price}</h4>
        <h5>{name}</h5>      
    </Col>

  )
}

export default Migros