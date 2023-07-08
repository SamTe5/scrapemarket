import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Sliders from './Sliders';

function HomeSlider() {
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

  const fH = data.length > 0 ? (Object.keys(data[0][0]).map((value, index) => {
   data[0][0][value].erenler.map(element=>{
    console.log(element.Price + element.Name)
   })
   

  })) :(console.log("wait"))

  
  


  return (
    <Col sm={10}>
      <Row className='justify-content-end'>

        <Sliders
          name="Fruits"
          url="https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"



        />
        <Sliders
          name="Vegetables"
          url="https://images.unsplash.com/photo-1518390643573-66f352c5492e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        />
        <Sliders
          name="Basic Foods"
          url="https://images.unsplash.com/photo-1484325881845-65073528922e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
        />
        <Sliders
          name="Untitled"
        />
        <Sliders
          name="Untitled"
        />

      </Row>
    </Col>
  )
}

export default HomeSlider