import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import VegetableCards from '../../Component/VegetableCards';



function Vegetable() {
  
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
        <Row className='justify-content-between px-5'>
          {
            data.length>0 ? (
              Object.keys(data[0][1]).map(value=>{

                console.log(value)
                
                return <Col sm={5} className='text-center fruitsRow my-4'>
                  <VegetableCards
                  productValue={value}
                  datam={data[0]}
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

export default Vegetable