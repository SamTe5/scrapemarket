import React from 'react'

function Migros({ price, name }) {
  return (

    <div className='detailLogo'>
      <img src="images/m.png" alt="" />
      <h4>{price}</h4>
      <h5>{name}</h5>
    </div>

  )
}

export default Migros