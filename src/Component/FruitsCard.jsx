import React from 'react'
import { Link } from "react-router-dom";

function FruitsCard({productValue}) {
  console.log(productValue)
  return (
    <div>
        <h2>{productValue}</h2>
    </div>
  )
}

export default FruitsCard