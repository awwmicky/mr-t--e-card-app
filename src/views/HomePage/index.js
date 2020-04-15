import React
// , { useState }
from 'react'
import './HomePage.css'



export default function HomePage () {

  return (
    <main className="home-page component">
      <span>— edit —</span>
      <div className="e-card-app">
        <img
          src="./assets/images/profile-pic/mr-t-profile.png"
          alt="mr-t-profile"
          className="mr-t-profile"
          // hidden
        />

        <img
          src="./assets/images/other/Scan_20200412--1.jpg"
          alt="e-card-front"
          className="e-card-front"
          hidden
        />

        <img
          src="./assets/images/other/Scan_20200412--3.jpg"
          alt="e-card-inside"
          className="e-card-inside"
          hidden
        />
      </div>
    </main>
  );

}