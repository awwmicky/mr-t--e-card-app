import React from "react";

import "./MichaelAlvarez.css";

export default function MichaelAlvarez() {
  return (
    <main className="component mfa-page">
      <div className="mfa-card">
        <div className="flex-profile">
          <img
            src="./assets/images/profile-pic/michael-alvarez.jpg"
            alt="mfa-profile-pic"
            className="mfa-profile-pic"
          />
        </div>
        <div className="mfa-content flex-content">
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
          <blockquote className="mfa-personal-message">
            <p>
              Just seeing the cohort, the TAs, & you having fun made coding such
              an adventurous experience! No joke, the thing that made programming
              more invested was talking to you: learning more and more insights
              about how code works, challenges to break & break down code,
              & knowing that "when in doubt, Mr. T can get you out."
            </p>

            <p>
              Thank you Thomas for starting up our journey into the inter-webs!
              <br/>
              P.S. - Have you ever tried a shrimp burrito?!
            </p>
          </blockquote>
          <div className="mfa-social-links">
            <a
              href="mailto:michael.fred.alvarez@gmail.com"
              title="Direct Email"
              className="email"
            >
              <i className="fas fa-envelope-square"></i>
            </a>
            <a
              href="https://www.github.com/awwmicky"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Account"
              className="github"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/awwmicky/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Account"
              className="linkedin"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://awwmicky.github.io/basic-portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              title="Portfolio Page"
              className="portfolio"
            >
              <i class="fas fa-id-card"></i>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
