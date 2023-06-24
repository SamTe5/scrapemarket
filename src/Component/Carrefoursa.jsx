import React from 'react'

function Carrefoursa({ name, price }) {
  return (
    <div>
      <div className='detailLogo'>
        <img src="images/c.png" alt="" />
        <h4>{price}</h4>
        <h5>{name}</h5>
      </div>
    </div>
  )
}

export default Carrefoursa