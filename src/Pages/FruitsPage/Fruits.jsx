import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import FruitsCard from '../../Component/FruitsCard';

function Fruits() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/data', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      });
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Veri çekme hatası:', error);
    }
  };


  return (
    <div>
      <Container>
        <Row>
          {
            data.length>0 ? (
              data.map(value=>{
                return <Col>
                  <FruitsCard>
                    
                  </FruitsCard>
                </Col>
              })
            ) : (<h2>LOADİNG</h2>)
          }
        </Row>
      </Container>
    </div>
  )
}

export default Fruits