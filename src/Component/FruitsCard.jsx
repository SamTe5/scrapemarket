import React from 'react'
import { Link } from "react-router-dom";

function FruitsCard({productValue}) {
  return (
    <div>
        <h2>{productValue.Name}</h2>
    </div>
  )
}

export default FruitsCard