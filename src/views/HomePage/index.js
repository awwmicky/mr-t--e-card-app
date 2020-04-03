import React
// , { useState }
from 'react'
import './HomePage.css'



export default function HomePage () {

  return (
    <main className="component">
      <h2>Home Page</h2>
      <img
        src="./assets/images/other/mr-t-profile.png" 
        alt="mr-t-profile"
        className="mr-t-profile"
      />
      <h2>Thank You</h2>
      <span>— edit —</span>
    </main>
  );

}