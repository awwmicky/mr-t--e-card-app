import React from "react";

export default function MarioAlvarez() {
  return (
    <main>
      <div className="main-container">
        <h2>Mario Alvarez</h2>

        <img
          src="./assets/images/other/mario-alvarez.jpg"
          alt="MarioProfile"
          className=""
        />

        <p>
          Thanks for being an incredible mentor thoughout the beginning of my
          coding journey. We learned so much and I know we barely scratched the
          surface. I'm excited to keep practicing and learning to master my
          craft. Cheers!
        </p>

        <div className="container">
          <a
            href="mailto:mariofalvarezjr@gmail.com"
            title="Direct Email"
            className="email btn-primary"
          >
            <i className="fas fa-envelope-square"></i>
          </a>
          <a
            href="https://www.github.com/mariofalvarez"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="github"
          >
            <i className="fab fa-github-square"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/mariofalvarez/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
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
            <i class=""></i>
          </a> */}
        </div>
      </div>
    </main>
  );
}
