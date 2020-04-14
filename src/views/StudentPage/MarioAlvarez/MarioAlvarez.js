import React from "react";

import "./MarioAlvarez.css";

export default function MarioAlvarez() {
  return (
    <main>
      <h2> Mario Alvarez </h2>

      <img
        src="./assets/images/other/michael-alvarez.jpg"
        alt="mfa-profile"
        className="mfa-profile"
      />

      <p>
        Thanks for being an incredible mentor thoughout the beginning of my
        coding journey. We learned so much and I know we barely scratched the
        surface. I'm excited to keep practicing and learning to master my craft.
        Cheers!
      </p>

      <div className="mfa-social-links">
        <a
          href="mailto:mariofalvarezjr@gmail.com"
          title="Direct Email"
          className="email"
        >
          <i className="fas fa-envelope-square"></i>
        </a>
        <a
          href="https://www.github.com/mariofalvarez"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub Account"
          className="github"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/mariofalvarez/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn Account"
          className="linkedin"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        {/* <a
          href="https://mariofalvarez.github.io/basic-portfolio/"
          target="_blank"
          rel="noopener noreferrer"
          title="Portfolio Page"
          className="portfolio"
        >
          <i class="fas fa-id-card"></i>
        </a> */}
      </div>
    </main>
  );
}
