import React from "react";

export default function MarioAlvarez() {
  return (
    <main>
      <div className="jumbotron">
        <h1 className="display-4">Mario Alvarez</h1>

        <p className="lead">
          Thanks for being an incredible mentor thoughout the beginning of my
          coding journey. We learned so much and now I know we just barely
          scratched the surface. I'm excited to keep practicing and learning to
          master my craft. Cheers!
        </p>

        <img src="./assets/images/profile-pic/mario.jpg" alt="mario-profile" />

        <p className="lead">
          <a
            href="mailto:mariofalvarezjr@gmail.com"
            title="Direct Email"
            className="btn btn-primary btn-lg"
          >
            <i className="fas fa-envelope-square"></i>
          </a>
          <a
            href="https://www.github.com/mariofalvarez"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="btn btn-primary btn-lg"
          >
            <i className="fab fa-github-square"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/mariofalvarez/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="btn btn-primary btn-lg"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </p>
      </div>
    </main>
  );
}
