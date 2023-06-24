import React from 'react'

function Niktas({price,name}) {
  return (
    <div>
      <div className='detailLogo'>
          <img src="images/n.png" alt="" />
          <h4>{price}</h4>
          <h5>{name}</h5>
      </div>
      
    </div>
  )
}

export default Niktas