/* EDIT THIS COMPONENT */
import React from 'react'
import './MatthewRomano.css'

export default function MatthewRomano () {

  return (
    <main className="component matt-page">
      <h2>Matthew (Big Willy) Romano</h2>
      <img
        className="matt-image"
        src="./assets/images/profile-pic/mathew-romano.jpg"
        alt="student-portfolio"
      />
      <p>
        - a memorable/funny moment with Thomas & the class
        - additional message for Thomas (feedback/question)
      </p>
      <div>
        <a
          href="mailto:..."
          title="Direct Email"
          className="email btn btn-danger"
        >
          <i className="fas fa-envelope-square"> </i>
        </a>
        <a
          href="https://www.github.com/BackpackBoy27"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub Account"
          className="github btn btn-danger"
        >
          <i className="fab fa-github"> </i>
        </a>
        <a
          href="https://www.linkedin.com/in/.../"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn Account"
          className="linkedin btn btn-danger"
        >
          <i className="fab fa-linkedin"> </i>
        </a>
      </div>
    </main>
  );

}