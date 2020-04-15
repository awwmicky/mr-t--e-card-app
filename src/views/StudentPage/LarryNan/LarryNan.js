/* EDIT THIS COMPONENT */
import React from 'react'
import './LarryNan.css'

export default function LarryNan () {

  return (
    <main className="d-flex align-items-center justify-content-center">
      <div className="card">
        <img
          className="card-img card-img"
          src="./assets/images/profile-pic/larrynan.JPG"
          alt="student-profile-pic"
        />
        <div className="card-body">
          <h3 className="card-title font-weight-bold text-center">
            Larry Nan
          </h3>
          <blockquote className="card-text text-left">
            Still remember your face when you first called Laura's name, but looking at me because you thought you were calling me. 
            Bootcamp went first with you and I have learned a lot. Thank you for all your laughs and knowledge.
            <br/>
            Thank you Thomas for   
          </blockquote>
          <div className="icon-block text-center">
            <a
              href="mailto:lawrence.yinan@gmail.com"
              title="Direct Email"
            ><i className="fas fa-envelope-square"></i>
            </a>
            <a
              href="https://github.com/LarryYuki"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            ><i className="fab fa-github"></i>
            </a>
            <a
              href="linkedin.com/in/lawrence-nan"
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
