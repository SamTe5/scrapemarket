import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route } from "react-router-dom";
import Navbarim from './Component/Navbar';
import Fruits from './Pages/FruitsPage/Fruits.jsx';
import Home from './Pages/HomePage/Home';
import Vegetable from './Pages/VegetablePage/Vegetable';
import Data from './Component/Data';

function App() {
  return (
    <div className="App vh-100">
      <Navbarim/>
      <Data/>      
      
      <Routes>
        <Route path='/Fruits' element={<Fruits/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/Vegetable' element={<Vegetable/>} />
      </Routes>

    </div>
  );
}

export default App;
