import React from 'react'
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap'
import Erenler from './Erenler';
import Niktas from './Niktas';
import Migros from './Migros';
import Carrefoursa from './Carrefoursa';
import A101 from './A101'
import Sok from './Sok';


function FruitsCard({ productValue, datam }) {

  return (
    <div>
      <h2>{productValue.toUpperCase()}</h2>
      <Row>
        <Col>
          <Erenler>

          </Erenler>
        </Col>
        <Col>
          
            {
              datam[0][productValue].niktas.map(element => {
                
                return <Niktas
                name={element.Name}
                price={element.Price}
                />
                  
                
              })
            }

          
        </Col>
        <Col>
          
          {
              datam[0][productValue].a101.map(element => {
                
                return <A101
                name={element.Name}
                price={element.Price}
                />
                  
                
              })
            }
          
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