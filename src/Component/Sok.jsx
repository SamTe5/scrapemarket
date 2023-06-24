import React from 'react'

function Sok({ price, name }) {
  return (

    <div className='detailLogo'>
      <img src="images/s.png" alt="" />
      <h4>{price}</h4>
      <h5>{name}</h5>
    </div>

  )
}

export default Sok