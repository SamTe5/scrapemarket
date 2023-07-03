import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'
import VegetableCards from '../../Component/VegetableCards';
import LeftItem from '../../Component/LeftItem';


function Vegetable() {

  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');

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

  const gelenItem = (itemName) => {
    setSelectedItem(itemName);
  };

  console.log(selectedItem)



  return (
    <div>
      <Container>
        <Row>
          <Col sm={2}>
            <Row>
              <Col sm={12} className='text-center'>
                <Button className='w-100 mt-4'>ALL</Button>
              </Col>
              {
                data.length > 0 ? (
                  Object.keys(data[0][1]).map(value => {
                    return <Col sm={12} className='mt-1'>
                      <LeftItem
                        itemName={value}
                        onItemClick={gelenItem}
                      />

                    </Col>
                  })
                ) : (<h2>Loading</h2>)

              }
            </Row>
          </Col>
          <Col sm={10}>
            <Row className='justify-content-center px-5'>
              {
                data.length > 0 ? (

                  Object.keys(data[0][1]).map(value => {
                  
                  return(  
                      value === selectedItem ? (
                        <Col sm={5} className='text-center fruitsRow my-4 mx-4'>
                          <VegetableCards
                            productValue={value}
                            datam={data[0]}
                          />

                        </Col>
                      ) : (
                        <Col sm={5} className='text-center fruitsRow my-4 mx-4'>
                          <VegetableCards
                            productValue={value}
                            datam={data[0]}
                          />

                        </Col>
                      )


                    )

                  
                  })
                ) : (<h2>LOADİNG</h2>)
              }
            </Row>
          </Col>
        </Row>

      </Container>
    </div>
  )
}

export default Vegetable