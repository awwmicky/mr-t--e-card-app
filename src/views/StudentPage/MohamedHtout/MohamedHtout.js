import React from "react";

import "./MohamedHtout.css";

export default function MohamedHtout() {
  return (
    <main className="component mfa-page">
      <div className="container-wrapper">
        <h2>Mohamed Htout</h2>
        <img
          src="./assets/images/other/med.jpeg"
          alt="mfa-profile"
          className="mfa-profile"
        />

        <div className="mfa-personal-message">
          <blockquote>
            There were plenty of memorable moments during the cohort! Thank you
            for everything you have taught us. Please say hi the cow! I have a
            feeling that it calls your name only if you don't know the answer
            lol...  
          </blockquote>
          <blockquote>Thank you again and again and again!</blockquote>
        </div>

        <div className="mfa-social-links">
          <a
            href="mailto:hatout1@gmail.com"
            title="Direct Email"
            className="email"
          >
            <i className="fas fa-envelope-square"></i>
          </a>
          <a
            href="https://github.com/hatout1"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Account"
            className="github"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-htout-5a8416120"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Account"
            className="linkedin"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://hatout1.github.io/mohamedhtout/"
            target="_blank"
            rel="noopener noreferrer"
            title="Portfolio Page"
            className="portfolio"
          >
            <i class="fas fa-id-card"></i>
          </a>
        </div>
      </div>
    </main>
  );
}

/* ——— YOU EDIT THIS PAGE ——— */
/*
=== FOLLOW THESE INSTRUCTIONS ===
1 - add your full name to the <h2> tag

2 - add you image in the `profile-pic` folder
  - open root > public/assets/images/profile-pic/ & paste your image there
  - on the <img> tag, replace `< your-profile.img >` with your image file

3 - add your a nice message to Thomas in the <p> tag
  - it can be a thank you, a fun memory, and or a useful tip
*/
/*
import React from 'react'
import './MohamedHtout.css'

export default function MohamedHtout () {

  return (
    <main className="d-flex align-items-center justify-content-center">
      <div className="card">
        <img
          className="card-img card-img"
          src="./assets/images/profile-pic/< your-profile-pic.img >"
          alt="student-profile-pic"
        />
        <div className="card-body">
          <h3 className="card-title font-weight-bold">
            Your First & Last Name
          </h3>
          <blockquote className="card-text text-left">
            Thank you Thomas.
            <br/>
            [ add your message here ]
          </blockquote>
          <div className="icon-block text-center">
            <a
              href="mailto:..."
              title="Direct Email"
            ><i className="fas fa-envelope-square"></i>
            </a>
            <a
              href="https://github.com/..."
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            ><i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/.../"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            ><i className="fab fa-linkedin"></i>
            </a>
          </div>
      </div>
    </div>
  </main>
  );

}
*/