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
      const wrappedJsonData = [jsonData];
      setData(wrappedJsonData);
    } catch (error) {
      console.error('Veri çekme hatası:', error);
    }
  };

  console.log(data)


  return (
    <div>
      <Container>
        <Row className='justify-content-between'>
          {
            data.length>0 ? (
              Object.keys(data[0]).map(value=>{
                console.log(data[0][value].niktas)
                
                return <Col sm={5} className='text-center'>
                  <FruitsCard
                  productValue={value}
                  datam={data}
                  />                    
                  
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