import React, { useEffect, useState } from 'react'
import { Footer } from './Footer';

export const Addcart = ({carting,setcarting}) => {
 
  
  const increment = (item) => {
    const updatedCart = carting.map((cartItem) =>
      cartItem.organid === item.organid
        ? { ...cartItem, organcount: cartItem.organcount + 1 }
        : cartItem
    );
    setcarting(updatedCart);
  };
  const decrement = (item) => {
    const updatedCart = carting.map((cartItem) =>
      cartItem.organid === item.organid && cartItem.organcount > 1
        ? { ...cartItem, organcount: cartItem.organcount - 1 }
        : cartItem
    );
    setcarting(updatedCart);
  };
 
  const [rate,setrate] = useState(0);

  useEffect(() => {
    let org = 0 ;
    carting.map((rates)=> org = rates.organrate * rates.organcount + org )
    setrate(org)
  
  },[carting])
  const removeparticulardata =(params)=>
  {
    let removecarting = carting.filter((remove)=>remove.organid !== params.organid)
    setcarting(removecarting)
  }
  return (
    <>
      

<div className='card-cart-back'>

<h3 className='descri-cart'>
            Cart
        </h3>
        <p className='descri-cart-two'>
            Home / Cart
        </p>


 {carting.map((arraydata,index)=>
<div key={index}>
    <div className='card-cart'>
      <div>

            <img src={arraydata.organimage}></img>
      </div>
     
                <p className='card-cart-p'>
                    {arraydata.organame}
                </p>
            <div className='card-words-cart'>

                <div className='card-words-cart-counter'>
                  
                    <button onClick={() => decrement(arraydata)}>-</button>
                    <h4>

                    {arraydata.organcount}
                    </h4>
                    <button onClick={() => increment(arraydata)}>+</button>
                  
                  
                </div>
            </div>
                <div className='card-words-cart-rate'>

                <p className='card-words-cart-rate-p'>
                    {arraydata.organrate}
                </p>
                </div>
                <button className='card-button-two-cart' onClick={()=>removeparticulardata(arraydata)}>Remove</button>
                {/* <button className='card-button-one'>Buy now</button> */}



    </div>

</div>
)}
<div className='price-box'>

<div className='price-container'>
  <h4>
    Order Summary : {rate}
  </h4>
  <span className='price-container-line'></span>
  <button>
    Checkout
  </button>

</div>
</div>

<Footer/>
</div>
    </>
  )
}
