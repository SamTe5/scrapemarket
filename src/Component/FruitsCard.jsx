import React from 'react'
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap'

function FruitsCard({productValue}) {
  console.log(productValue)
  return (
    <div>
        <h2>{productValue}</h2>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
    </div>
  )
}

export default FruitsCard