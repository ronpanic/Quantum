import React, {useEffect} from 'react';
import './HomeProfile.css';
import Navbar from '../../Navbar/Navbar';
import LastMovies from '../LastMovies/LastMovies';
import FilterMovies from '../FilterMovies/FilterMovies';
import QuantumBenefits from '../QuantumBenefits/QuantumBenefits'; 
import spiderman2 from '../../../assets/spiderman2.jpg'       
import AOS from 'aos'
import  'aos/dist/aos.css'

const HomeProfile = () => {
  
  useEffect(()=> {
    AOS.init({duration: 1000})
  } , [])

  return (
    <div>
      <Navbar/>
      <div className='tophome'>
        <div className='text-container' data-aos="zoom-out" >
          <h1>Spider Man: Far From Home</h1>
          <div className='date'>  
            <p>2019 </p>
            <ion-icon name="ellipsis-vertical"></ion-icon>
            <p>Action/Science Fiction</p>
            <ion-icon name="ellipsis-vertical"></ion-icon>
            <p>2h 10m</p>
          </div>
          <div className="buttons-container">
            <div>
              <button> <ion-icon name="play"></ion-icon> Watch now</button>
            </div>
            <button> <ion-icon name="add-circle"></ion-icon> Add list</button>
          </div>
        </div>
        <img src={spiderman2} alt="presentation" />
      </div>      
      <LastMovies/>
      <FilterMovies/>
      <QuantumBenefits/>
    </div>
  );
}

export default HomeProfile;
