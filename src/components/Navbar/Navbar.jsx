import React from 'react';
import { Link } from 'react-router-dom';  
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="#">
        <div className="navbar-left">
          <img src="/public/image/image.webp" alt="" />
          <h1>Quantum</h1>
        </div>
      </Link>
      <ul className="navbar-center">    
        <li><span>Home</span></li>
        <li><span>Movies</span></li>
        <li><span>News</span></li>
        <li><span>My List</span></li>
        <li><span>About</span></li>
        <li><span>Contact</span></li>
      </ul>
      <div className="navbar-right">
        <div className='search'>
          <input type="text" placeholder="Search For Movies..." />
          <ion-icon name="search-outline"></ion-icon>
        </div>
        <div className='profile-icon'>
            <img src="/public/image/panda-icon.jpeg" alt="" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
