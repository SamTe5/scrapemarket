import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Sliders from './Sliders';

function HomeSlider({datam}) {
  

  console.log("datam:",datam)
  

  const dataAll = []
  
  datam.length > 0 ? (Object.keys(datam[0][0]).map((value, index) => {
    
      datam[0][0][value].erenler.map(element => {
        dataAll.push({ Market:"Erenler",Name: element.Name, Price: element.Price })
      })
      datam[0][0][value].niktas.map(element => {
        dataAll.push({ Market:"Niktaş",Name: element.Name, Price: element.Price })
      })
      datam[0][0][value].a101.map(element => {
        dataAll.push({ Market:"A101",Name: element.Name, Price: element.Price })
      })
      datam[0][0][value].sok.map(element => {
        dataAll.push({ Market:"Şok",Name: element.Name, Price: element.Price })
      })
      datam[0][0][value].migros.map(element => {
        dataAll.push({ Market:"Migros",Name: element.Name, Price: element.Price })
      })
      datam[0][0][value].carreforsa.map(element => {
        dataAll.push({ Market:"Carrefoursa",Name: element.Name, Price: element.Price })
      })


  })) : (console.log("wait"))

  console.log(dataAll)
  console.log("datam:",datam)

  const numbers = [];
  let i = 0; 
  while (i < 3) {
    const number = Math.floor(Math.random() * dataAll.length);
    numbers.push(number);
    i++;
  }
  
  const lastData=[]
  for(let i=0;i<3;i++){
    if(dataAll[i].Market.length>0){
      lastData.push([dataAll[i].Market,dataAll[i].Name,dataAll[i].Price])
    }else{
      i=i-1
    }
    
  }

  console.log(lastData)





  return (
    <Col sm={10}>
      <Row className='justify-content-end'>

        <Sliders
          name="Fruits"
          url="https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          market={lastData[0][0]}
          market2={lastData[1][0]}
          market3={lastData[2][0]}
          food={lastData[0][1]}
          food2={lastData[1][1]}
          food3={lastData[2][1]}
          price={lastData[0][2]}
          price2={lastData[1][2]}
          price3={lastData[2][2]}

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