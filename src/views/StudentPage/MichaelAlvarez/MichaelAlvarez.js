import React from "react";

import "./MichaelAlvarez.css";

export default function MichaelAlvarez() {
  return (
    <main className="component mfa-page">
      <div className="container-wrapper">
        <h2 className="mfa-full-name">
          <span> Micky </span>
          <a
            href="https://www.youtube.com/watch?v=4pkhEyRoidk"
            target="_blank"
            rel="noopener noreferrer"
            title="Hidden Egg"
          >
            F.
          </a>
          <span> Alvarez </span>
          <a
            href="https://www.omfgdogs.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Easter Egg"
          >
            (Michael)
          </a>
        </h2>
        <img
          src="./assets/images/other/michael-alvarez.jpg"
          alt="mfa-profile"
          className="mfa-profile"
        />
        <div className="mfa-personal-message">
          <blockquote>
            A memorable moment in class was when the "S" key on your keyboard
            just didn 't work midway through the class.That was the key most
            used for that day.We all laughed!Still, you found a work around and
            made a bit about that key.Will never forget!
          </blockquote>
          {/* <p>Have you ever tried a shrimp burrito???</p> */}
        </div>
        <div className="mfa-social-links">
          <a
            href="mailto:michael.fred.alvarez@gmail.com"
            title="Direct Email"
            className="email"
          >
            <i className="fas fa-envelope-square"> </i>
          </a>
          <a
            href="https://www.github.com/awwmicky"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Account"
            className="github"
          >
            <i className="fab fa-github"> </i>
          </a>
          <a
            href="https://www.linkedin.com/in/awwmicky/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Account"
            className="linkedin"
          >
            <i className="fab fa-linkedin"> </i>
          </a>
          <a
            href="https://awwmicky.github.io/basic-portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            title="Portfolio Page"
            className="portfolio"
          >
            <i class="fas fa-id-card"> </i>
          </a>
        </div>
      </div>
    </main>
  );
}
