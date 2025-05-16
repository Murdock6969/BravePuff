import React from 'react'
import organdetails from './Productdet'
import './overallcss.css';
import { Searchbar } from './Searchbar';
import { Footer } from './Footer';
import { Heartphoto } from './Heartphoto'
import { Link } from 'react-router-dom';

export const Herokardtwo = ({carting,setcarting,whishing,setwhishing}) => {
    const particulardata = (params)=>{
        setcarting([...carting,params])
        
    }
        const whishingdata = (params)=>{
            setwhishing([...whishing,params])
            
        }
  return (
    <>
     <div className='kard-back-card'>
    

    <Searchbar carting={carting} setcarting={setcarting}/>
<div className='kard-container-card'>
 {organdetails.map((arraydata,index)=>
<div key={index}>
    <div className='kard-card'>
            <img src={arraydata.organimage}></img>
            <div className='kard-whish-card'>
            
            <Heartphoto onClick={()=>whishingdata(arraydata)}></Heartphoto>
            
        </div>
            <div className='kard-words'>
                <h2>
                    {arraydata.organame}
                </h2>
                <div className='kard-words-two'>
                <p>
                    {arraydata.organrate}
                </p>
                <span></span>
                <p>
                    {arraydata.organcondition}
                </p>
                </div>
                <p className='kard-p'>{arraydata.organdescription}</p>
                {/* <button className='card-button-one'onClick={()=>whishingdata(arraydata)}>Whishlist</button> */}
                <button className='kard-p-button' onClick={()=>particulardata(arraydata)}>Add to Cart</button>

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
