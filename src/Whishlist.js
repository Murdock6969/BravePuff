import React from 'react'
import { Footer } from './Footer'


export const Whishlist = ({whishing,setwhishing,carting,setcarting}) => {
 
  const particulardata = (params)=>{
    setcarting([...carting,params])
    
}
const removewhishingdata =(params)=>
  {
    let removewhishing = whishing.filter((remove)=>remove.organid !== params.organid)
    setwhishing(removewhishing)
  }
  return (
    <>
      <div className='card-back'>
      <div className='kard-container'>
    {whishing.map((arraydata)=>
     <div key={arraydata.organid}>
     <div className='card'>
             <img src={arraydata.organimage}></img>
             <div className='card-words'>
                 <p>
                     {arraydata.organame}
                 </p>
                 <p>
                     {arraydata.organcondition}
                 </p>
                 <p>
                     {arraydata.organrate}
                 </p>
                 <button className='card-button-one'onClick={()=>removewhishingdata(arraydata)}>Whishlist</button>
                 <button className='card-button-two' onClick={()=>particulardata(arraydata)}>Add to Cart</button>

             </div>


     </div>

 </div>
      

    )}
    </div>
    </div>
    <Footer/>
    </>
  )
}
