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

import React from "react";
import "./SarahNaas.css";

export default function SarahNaas() {
  return (
    <main className="d-flex align-items-center justify-content-center">
      <div className="card">
        <img
          className="card-img"
          src="./assets/images/profile-pic/sarah.jpeg"
          alt="student-profile-pic"
        />
        <div className="card-body">
          <h3 className="card-title font-weight-bold text-center">
            Sarah Naas
          </h3>
          <blockquote className="card-text text-left">
            Thanks for being a great teacher and always encouraging us! Your
            enthusiasm for coding is contagious. I'll never forget all the
            spelling mistakes and I'm pretty sure I'll use "Thomas Smith" as an
            example variable forever now.
          </blockquote>
          <div className="icon-block text-center">
            <a href="mailto:sjnaas@gmail.com" title="Direct Email">
              <i className="fas fa-envelope-square"></i>
            </a>
            <a
              href="https://github.com/SarahJoline"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/sarah-naas-aba8a8192/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
