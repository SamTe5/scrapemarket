import React from 'react'

function Erenler({ name, price }) {
  return (


    <div className='detailLogo'>
      <img src="images/e.png" alt="" />
      <h4>{price}</h4>
      <h5>{name}</h5>
    </div>

  )
}

export default Erenler