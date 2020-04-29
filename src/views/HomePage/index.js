import React
// , { useState }
from 'react'
import './HomePage.css'



export default function HomePage () {

  return (
    <main className="home-page component">
      <div className="e-card-container">
        <div className="e-card">
          <div className="cover">
            <div className="front-side">
              {/* <h2>COVER-SIDE</h2> */}
              <img
                src="./assets/images/e-card-img/card-front-side.jpg"
                alt="e-card-front"
                className="e-card-front"
              />
            </div>
            <div className="back-side">
              {/* <h2>BACK-SIDE</h2> */}
              <img
                src="./assets/images/e-card-img/card-left-side.jpg"
                alt="e-card-front"
                className="e-card-front"
              />
            </div>
          </div>
          <div className="greeting">
            {/* <h2>GREETING SIDE</h2> */}
            <img
              src="./assets/images/e-card-img/card-right-side.jpg"
              alt="e-card-front"
              className="e-card-front"
            />
          </div>
        </div>

        <div className="easter-egg-t">
          <img
            src="./assets/images/profile-pic/mr-t-profile.png"
            alt="mr-t-profile"
            className="mr-t-profile"
          />
        </div>

        <div className="welcome-text">
          <h2>From all of us, to you.</h2>
          <h2>Keep flexin that code.</h2>
        </div>
      </div>
    </main>
  );

}