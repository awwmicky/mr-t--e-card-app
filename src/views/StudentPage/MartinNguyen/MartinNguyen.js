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

import React from 'react'

import './MartinNguyen.css'

export default function MartinNguyen() {

  return (
    <main className="mainPage">
      <div className="card">
        <img
          className="card-img card-img"
          src="./assets/images/profile-pic/martinnguyen.jpeg"
          alt="student-profile-pic"
        />
        <div className="card-body">
          <h3 className="card-title font-weight-bold text-center">
            Martin Nguyen
          </h3>
          <blockquote className="card-text text-left">
            Thank you Thomas.
            <br />
            <br />
            I would have to say the whole Coding Bootcamp experience was the best memory. I couldn't have asked for a better teacher, TA's, and classmates, I really feel that we all lucked out. I appreciate every part of it, the stressfull days and sleepless nights. Also the sense of accomplishment and defeat all in one. I cherished the lunch breaks and talks with everyone. During project weeks was where you get to see everyone in their natural habitat haha. I'm far from the best student but I sure had the best time! And to see how far everyone has come was the best! And we have YOU to thank for that! Thank you for the knowledge and a great start to our coding career!
            <br />
            <br />
            Your Jedi Apprentice,
            <br />
            Martin Nguyen
            <br />
            <br />
            To Be Continued...

          </blockquote>
          <div className="socialLinks">
            <a
              href="mailto: ngumartin@gmail.com"
              title="Direct Email"
            ><i className="fas fa-envelope-square"></i>
            </a>
            <a
              href="https://github.com/Martinn80"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            ><i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/mvbqnguyen123/"
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