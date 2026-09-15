import React from 'react';
import logo from '../assets/logos.png';
import './spinner.css';

 const Spinner = () => {
    return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-blue-700 bg-blue-800 bg-gradient-to-t from-blue-600 via-blue-700 to-blue-800"  style={{
            backgroundImage: `linear-gradient(95deg, #001e8a 0%, #00287e 100%)`}}>
             <img src={logo} alt="logo" className="relative top-[-60px]" style={{width: '200px'}}/>
             <div className="spinner relative top-[-70px]" aria-label="Loading"></div>
          

        </div>
    )
}

export default Spinner;