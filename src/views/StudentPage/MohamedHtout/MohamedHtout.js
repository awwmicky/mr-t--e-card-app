/* EDIT THIS COMPONENT */
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
