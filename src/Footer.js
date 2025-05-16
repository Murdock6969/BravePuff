import React from 'react'
import insta from "./images/instagram.png";
import tweet from "./images/twitter.png";
import whasupp from "./images/whatsapp.png";


export const Footer = () => {
  return (
    <>
    {/* <div className='footer-contain'>
        <div className='footer-words'>
            <p>
                Home
            </p>
            <p>
                About
            </p>
            <p>
                Product
            </p>
            <p>
                whishlist
            </p>
            <p>
                cart
            </p>

        </div>
        <div className='footer-socials'>
            <p>
                murdock@gmail.com
            </p>
            <p>
                Linkedin/MDhassan6969
            </p>

        </div>

    </div>
    <div className='footer-copy'>
        <p>
            copyright:murdock@daredevil
        </p>
    </div> */}

    <div className='footer-contain'>
        <div className='footer-content-one'>
            <h3>BRAVEPUFF</h3>
            <div className='footer-socials'>
                <img src= {insta}></img>
                <img src={tweet}></img>
                <img src={whasupp}></img>

            </div>

        </div>
        <div className='footer-content-two'>
            <h5>
                Home
            </h5>
            <h5>
                Product
            </h5>
            <h5>
                About
            </h5>
            <h5>
                Cart
            </h5>

        </div>

    </div>
    <p className='copyfoot'>copyright:MDhassan6969</p>
    </>
  )
}
