/* EDIT THIS COMPONENT */
import React from 'react'
import './FirstNameLastName.css'

export default function FirstNameLastName () {

  return (
    <main>
      <h2>First & Last Name</h2>
      <img 
        src="./assets/images/other/< your-profile.img >"
        alt="student-portfolio"
      />
      <p>
        - a memorable/funny moment with Thomas & the class
        - additional message for Thomas (feedback/question)
      </p>
      <div>
        <a 
          href="/"
          target="_blank" 
          rel="noopener noreferrer"
          title=""
        >
          links to your GitHub, LinkedIn, etc.
          <i className="fab fa-font-awesome"></i>
        </a>
      </div>
    </main>
  );

}