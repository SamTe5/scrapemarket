import React from 'react'

function A101({price,name}) {
  return (
    <div>
      <div className='detailLogo'>
          <img src="images/a.png" alt="" />
          <h4>{price}</h4>
          <h5>{name}</h5>
      </div>
    </div>
  )
}

export default A101