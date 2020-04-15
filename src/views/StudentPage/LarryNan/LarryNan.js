/* EDIT THIS COMPONENT */
import React from 'react'
import './LarryNan.css'

export default function LarryNan () {

  return (
    <main className="d-flex align-items-center justify-content-center">
      <div className="card">
        <img
          className="card-img card-img"
          src="./assets/images/profile-pic/< your-profile-pic.img >"
          alt="student-profile-pic"
        />
        <div className="card-body">
          <h3 className="card-title font-weight-bold">
            Larry Nan
          </h3>
          <blockquote className="card-text text-left">
            Thank you Thomas.
            <br/>
            [ add your message here ]
          </blockquote>
          <div className="icon-block text-center">
            <a
              href="mailto:..."
              title="Direct Email"
            ><i className="fas fa-envelope-square"></i>
            </a>
            <a
              href="https://github.com/..."
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            ><i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/.../"
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