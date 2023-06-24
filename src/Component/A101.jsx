import React from 'react'
import { Col } from 'react-bootstrap'
function A101({ price, name }) {
  return (
    <Col sm={3}>
      <div className='detailLogo'>
        <img src="images/a.png" alt="" />
        <h4>{price}</h4>
        <h5>{name}</h5>
      </div>
    </Col>
  )
}

export default A101