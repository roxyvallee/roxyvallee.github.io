import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/data.json'; // Adjust the path as necessary

const Animation = () => {
    return (
        <div style={{ width: '100%', height: '100vh' }}> 
          <Lottie animationData={animationData} loop={true} autoplay={true} />
        </div>
      );
};

export default Animation;