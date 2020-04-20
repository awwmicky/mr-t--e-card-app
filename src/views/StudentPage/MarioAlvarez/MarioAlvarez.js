import React from "react";

export default function MarioAlvarez() {
  return (
    <main className="d-flex justify-content-center flex-column border border-primary align-items-center">
      <div className="card d-flex justify-content-center flex-column text-center col-md-4">
        <div className="card-body pt-5">
          <h2 className="display-4 card-title text-center">Mario Alvarez</h2>

          <img
            src="./assets/images/profile-pic/mario.jpg"
            alt="mario-profile"
            className="img-fluid"
          />

          <p className="lead">
            Thanks for being an incredible mentor thoughout the beginning of my
            coding journey. We learned so much and now I know we just barely
            scratched the surface. I'm excited to keep practicing and learning
            to master my craft. Cheers!
          </p>

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
      </div>
    </main>
  );
}
