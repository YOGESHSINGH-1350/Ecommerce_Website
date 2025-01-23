import React from 'react'
import { CgProfile } from "react-icons/cg";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoIosSearch  } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Header() {

  const count=useSelector(store=>store.bag)
  
  
  return (    
       <header>
    <div className="logo_container">
      <Link to="/">
        <img
          className="myntra_home"
          src="../images/myntra_logo.webp"
          alt="Myntra Home"
        />
      </Link>
    </div>
    <nav className="nav_bar">
      <a href="#">Men</a>
      <a href="#">Women</a>
      <a href="#">Kids</a>
      <a href="#">Home &amp; Living</a>
      <a href="#">Beauty</a>
      <a href="#">
        Studio <sup>New</sup>
      </a>
    </nav>
    <div className="search_bar">
      <span className="material-symbols-outlined search_icon"><IoIosSearch /></span>
      <input
        className="search_input"
        placeholder="Search for products, brands and more"
      />
    </div>
    <div className="action_bar">
      <Link className="action_container" to=''>
      <CgProfile />
                <span className="action_name">Profile</span>
      </Link>
      <Link className="action_container" to=''>
      <FaRegHeart />
               <span className="action_name">Wishlist</span>
      </Link>

      <Link className="action_container" to='/bag'>
      <IoBagCheckOutline />
        <span className="action_name">Bag</span>

        <span className="bag-item-count">{count.length}</span>
      </Link>
    </div>
  </header>
  
  )
}

export default Header
