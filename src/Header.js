import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './overallcss.css';
import logo from './images/logoog.png'
import { Searchbar } from './Searchbar';

export const Header = () => {

  return (
    <>
      <div className="head">
        
          <Link to="/Logo">
          
            <h3>
              BRAVE <span>PUFF</span>
            </h3>
        
          </Link>
        
        <div className='head-nav'>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/product">Product</Link>
          <Link to="/addcart">Cart</Link>
        </div>
      </div>
        {/* <div className='head-search'>
          <Link to={"/product"}><Searchbar/></Link>

        </div> */}
      <Outlet />
    </>
  );
};

