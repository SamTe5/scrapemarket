import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route } from "react-router-dom";
import Navbarim from './Component/Navbar';
import Fruits from './Pages/FruitsPage/Fruits.jsx';
import Home from './Pages/HomePage/Home';
import Vegetable from './Pages/VegetablePage/Vegetable';
import Basic from './Pages/BasicPage/Basic';
import React, { useEffect, useState } from 'react';


function App() {
  const [dataGeneral, setDatam] = useState([]);

  useEffect(() => {
    fetchDatam();
  }, []);

  const fetchDatam = async () => {
    try {
      const response = await fetch('/api/data', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      });
      const jsonDatas = await response.json();
      const wrappedJsonDatas = [jsonDatas];
      setDatam(wrappedJsonDatas);
    } catch (error) {
      console.error('Veri çekme hatası:', error);
    }
  };



  return (
    <div className="App vh-100">
      <Navbarim/>      
      
      <Routes>
        <Route path='/Fruits' element={<Fruits
          data={dataGeneral}
        />}/>
        <Route path='/Home' element={<Home
          data={dataGeneral}
        />}/>
        <Route path='/Vegetable' element={<Vegetable
          data={dataGeneral}
        />} />
        <Route path='/Basic' element={<Basic/>} />
      </Routes>

    </div>
  );
}

export default App;
