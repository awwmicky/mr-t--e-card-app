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

import React from 'react'
import './LauraBao.css'

export default function LauraBao() {

  return (
    <main className="d-flex align-items-center justify-content-center">
      <div className="card lb-card">
        <img
          className="card-img"
          src="./assets/images/profile-pic/laura.JPG"
          alt="student-profile-pic"
        />
        <div className="card-body">
          <h3 className="card-title font-weight-bold text-center">
            Laura Bao
          </h3>
          <blockquote className="card-text text-left">
            Thank you Thomas.
            <br />
            I have learned a lot in this class. I really appreciate your effort to keep me in the class instead of giving up on the second week. I do not know how far I can go with coding as a career change, but it definitely helps me in the long term.
          </blockquote>
          <div className="icon-block text-center">
            <a
              href="mailto: laurabaoye@gmail.com"
              title="Direct Email"
            ><i className="fas fa-envelope-square"></i>
            </a>
            <a
              href="https://github.com/laurabaoye"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            ><i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/laura-bao-designer/"
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