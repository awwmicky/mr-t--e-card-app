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
import './HermanLiu.css'

export default function HermanLiu() {

  return (
    <main className="d-flex align-items-center justify-content-center herman-page">
      <div className="card">
        <img
          className="card-img"
          src="./assets/images/profile-pic/herman.JPG"
          alt="student-profile-pic"
        />
        <div className="card-body">
          <h3 className="card-title font-weight-bold text-center">
            Herman Liu
          </h3>
          <blockquote className="card-text text-left">
            Thank you Thomas,
            <br />
            I really didn't know what I was getting myself into enrolling in this bootcamp. I didn't think I could had finished. Thanks to your teachings it motivated me to continue learning and striving for more. Keep on rocking dude! You're an inspiration.
          </blockquote>
          <div className="icon-block text-center">
            <a
              href="mailto:hermanliu95@gmail.com"
              title="Direct Email"
            ><i className="fas fa-envelope-square"></i>
            </a>
            <a
              href="https://github.com/hermsicle"
              target="https://github.com/hermsicle"
              rel="noopener noreferrer"
              title="GitHub"
            ><i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/hermanliu95/"
              target="https://www.linkedin.com/in/hermanliu95/"
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