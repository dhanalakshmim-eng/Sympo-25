import React from 'react';
import './animation.css';

const BoxAnimation = () => {
    return (
        <div>
            {/* Animation Section */}
          <div className="md:w-1/2 w-full flex justify-center mt-8 md:mt-0">
            <div className="relative loop cubes">
              <div className="item cubes"></div>
              <div className="item cubes"></div>
              <div className="item cubes"></div>
              <div className="item cubes"></div>
              <div className="item cubes"></div>
              <div className="item cubes"></div>
            </div>
          </div>
        </div>
    );
};

export default BoxAnimation;