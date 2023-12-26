import React from 'react';
import './HomeProfile.css';
import Navbar from '../../Navbar/Navbar';
import LastMovies from '../LastMovies/LastMovies';

const HomeProfile = () => {
  return (
    <div>
      <Navbar/>
      <div className='tophome'>
        <div className='text-container'>
          <h1>Spider Man: Far From Home</h1>
          <div className="buttons-container">
            <div>
              <button> <ion-icon name="play"></ion-icon> Watch now</button>
            </div>
            <button> <ion-icon name="add-circle"></ion-icon> Add list</button>
          </div>
        </div>
        <img src="/public/image/spiderman2.png" alt="presentation" />
      </div>
      <LastMovies/>
    </div>
  );
}

export default HomeProfile;
