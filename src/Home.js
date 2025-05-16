import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import { Buttontwo } from './Buttontwo'
import heroone from './images/Heroone.png'
import herotwo from './images/Herotwo.png'
import { Footer } from './Footer'
import { Heroabout } from './Heroabout'
import { Herocard } from './Herocard'
import { Herokardtwo } from './Herokardtwo'


export const Home = ({carting,setcarting,whishing,setwhishing}) => {
  return (
    <>
    <div className='hero'>
    <div className='hero-img'>
        <img src={herotwo} alt='HEROimage'></img>
    </div>
    <div className='hero-words'>
        <h1>
        Ignite Your Boldness with Every Puff
        </h1>
        <p>Step into a world where courage meets flavor. At BravePuff, we craft premium cigarettes for the daring, the fearless, and the unstoppable. Smoke with pride, live with valor </p>
        
        <Link to={"/product"}>
        <Button></Button>
        </Link>
        
    </div>
    <div className='hero-img'>
        <img src={heroone} alt='HEROimage'></img>
    </div>
    </div>
    <Heroabout/>
    <Herocard  carting={carting} setcarting={setcarting} whishing={whishing} setwhishing={setwhishing}/>
    <Footer/>
    </>
  )
}
