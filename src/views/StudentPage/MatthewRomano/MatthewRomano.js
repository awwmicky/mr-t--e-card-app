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
        Your are my Hacker-Man <span aria-label="emoji" role="img">👨‍💻</span>
        <br/>
        I am your ABG-Man <span aria-label="emoji" role="img">🐱‍👤</span>
        <br/>
        Together we become Hacker Unite <span aria-label="emoji" role="img">🐱‍🐉</span>
        <br/>
        Do you want to develop an app?
      </p>
      <div>
        <a
          href="mailto:coldest2everdoit@gmail.com"
          title="Direct Email"
          className="email btn btn-danger"
        >
          <i className="fas fa-envelope-square"></i>
        </a>
        <a
          href="https://www.github.com/BackpackBoy27"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub Account"
          className="github btn btn-danger"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/matthew-romano-37560a196/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn Account"
          className="linkedin btn btn-danger"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </main>
  );

}