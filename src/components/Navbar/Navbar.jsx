import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';  
import './Navbar.css';
import pandaicon from '../../assets/pandaicon.jpeg'  
import image from '../../assets/image.webp'  
import AOS from 'aos'
import  'aos/dist/aos.css'

const Navbar = () => {

  useEffect(()=> {
    AOS.init({duration: 1000})
  } , [])

  return (
    <nav className="navbar">
      <Link to="#">
        <div className="navbar-left" data-aos="fade-right">
          <img src={image}alt="logoicon" />
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
            <img src={pandaicon} alt="" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
