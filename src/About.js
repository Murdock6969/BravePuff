import React from 'react'
import Marlabout from "./images/aboutimagemarl.webp";

import { Footer } from './Footer'



export const About = () => {
  return (
    <>
    <div className='descri'>
      <h3>
        Product
      </h3>
      <p className='descri-two'>
        Home / Product

      </p>

    </div>
    <div className='about-container'>
      <div className='about-words'>
        <h2>
          About our Organ-ization.
        </h2>
        <p>
        organ trafficking, a lucrative global illicit trade, is often a lesser discussed form of human trafficking among anti-human trafficking stakeholders due to its intricate and often stealth nature. Trafficking sex and/or labor are the more commonly thought of forms of human trafficking among public policy leaders and general awareness campaigns. However, organ trafficking holds a critical place with transnational organized crime groups due to high demand and relatively low rates of law.
        </p>
        <button className='about-words-one'>
          Buy Organs
        </button>

      </div>
      <div className='about-images'>
        <img src={Marlabout}></img>


      </div>

    </div>
    <div className='about-container-two'>
      <div className='about-images'>
        <img src={Marlabout}></img>


      </div>
      <div className='about-words'>
        <h2>
          About our Organ-ization.
        </h2>
        <p>
        organ trafficking, a lucrative global illicit trade, is often a lesser discussed form of human trafficking among anti-human trafficking stakeholders due to its intricate and often stealth nature. Trafficking sex and/or labor are the more commonly thought of forms of human trafficking among public policy leaders and general awareness campaigns. However, organ trafficking holds a critical place with transnational organized crime groups due to high demand and relatively low rates of law.
        </p>
        <button className='about-words-two'>
          Buy Organs
        </button>

      </div>

    </div>
    {/* <div className='about-images-two'>

      <img src={abimgfour}></img>
      <img src={abimgfive}></img>
    </div> */}
    <div className='about-back'>

    <div className='about-sub'>
      <div>

     <h3>
        Our Success Sory
      </h3>
      <p>
      Organ donation is the process of removing healthy organs and tissues from one person and transplanting them into another. Donated organs can save or help up to 50 people. 
      </p>
      </div>
      <div className='about-sub-two'>
        <h5>
          100
        </h5>
        <h5>
          Organ Transfers
        </h5>
      </div>
      <div className='about-sub-three'>
        <h5>
        1000+
        </h5>
        <h5>
          surgeries
        </h5>
      </div>

    </div>
    </div>
    <Footer/>
    </>
  )
}
