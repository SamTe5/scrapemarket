import React from 'react'
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap'
import Erenler from './Erenler';
import Niktas from './Niktas';
import Migros from './Migros';
import Carrefoursa from './Carrefoursa';
import A101 from './A101'
import Sok from './Sok';


function FruitsCard({productValue}) {
  console.log(productValue)
  return (
    <div>
        <h2>{productValue}</h2>
        <Row>
          <Col>
            <Erenler></Erenler>
          </Col>
          <Col>
            <Niktas></Niktas>
          </Col>
          <Col>
            <A101></A101>
          </Col>
          <Col>
            <Sok></Sok>
          </Col>
          <Col>
            <Migros></Migros>
          </Col>
          <Col>
            <Carrefoursa></Carrefoursa>
          </Col>
        </Row>
    </div>
  )
}

export default FruitsCard