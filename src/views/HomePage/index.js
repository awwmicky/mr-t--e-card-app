import React
// , { useState }
from 'react'
import './HomePage.css'



export default function HomePage () {

  return (
    <main className="home-page component">
      {/* <h2>Home Page</h2> */}
      <div className="e-card-app">
        <img
          src="./assets/images/profile-pic/mr-t-profile.png"
          alt="mr-t-profile"
          className="mr-t-profile"
          hidden
        />

        <img
          src="./assets/images/other/Scan_20200412--1.jpg"
          alt="e-card-front"
          className="e-card-front"
          // hidden
        />

        <img
          src="./assets/images/other/Scan_20200412--3.jpg"
          alt="e-card-inside"
          className="e-card-inside"
          hidden
        />
      </div>
      {/* <h2>Thank You</h2> */}
      {/* <span>— edit —</span> */}
    </main>
  );

}