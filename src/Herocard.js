import React from 'react'
import kardimage from "./images/kardimg.png";
import kardimagetwo from "./images/kardimgtwo.png";
import kardimagethree from "./images/kardimgthree.png";
import { Link } from 'react-router-dom';
import { Heartphoto } from './Heartphoto'
import { Kartbutton } from './Kartbutton';
import { Morekard } from './Morekard';
import organdetails from './Productdet'
import organdetailstwo from './Productdettwo';


export const Herocard = ({carting,setcarting,whishing,setwhishing}) => {
    const particulardata = (params)=>{
        setcarting([...carting,params])
        
    }
    const whishingdata = (params)=>{
        setwhishing([...whishing,params])
        
    }
  return (
    <>
    <div className='kard-back-card'>
    <div className='kard-container'>
    {organdetailstwo.map((arraydata,index)=>
    <div key={index}>
    <div className='kard'>
        <div className='kard-img'>
            <img src={arraydata.organimage}></img>
            <div className='kard-whish'>
            <Heartphoto onClick={()=>whishingdata(arraydata)}></Heartphoto>
            </div>
        </div>
        <div className='kard-words'>
            <h2>{arraydata.organame}</h2>
            <div className='kard-words-two'>
            <p>{arraydata.organrate}</p>
            <span></span>
            <p>{arraydata.organcondition}</p>
            </div>
            <p className='kard-p'>{arraydata.organdescription}</p>
            <button className='kard-p-button' onClick={()=>particulardata(arraydata)}>Add to Cart</button>

        </div>

    </div>


    </div>
    )}
    </div>
    <Link to={"/product"}>
    <Morekard></Morekard>
    </Link>
    </div>
    </>
  )
}

