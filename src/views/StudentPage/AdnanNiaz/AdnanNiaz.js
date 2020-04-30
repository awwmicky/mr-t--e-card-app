/* EDIT THIS COMPONENT */
import React from "react";
import "./AdnanNiaz.css";

export default function AdnanNiaz() {
  return (
    <main
      id="container"
      style={{
        textAlign: "center",
        border: "solid 1px #000",
        padding: "20px",
        backgroundColor: "#242424",
        color: "#ddd",
      }}
    >
      <div className="view-first pt-3">
        <img
          src="./assets/images/profile-pic/adi.jpg"
          alt="student-portfolio"
          style={{ width: "200px", borderRadius: "50%", position: "relative" }}
        />
        <h2 className="py-5">Adnan Niaz</h2>
        <section className="head"></section>

        <p
          style={{
            width: "300px",
            margin: "0 auto",
            padding: "40px 0",
            lineHeight: "22px",
            letterSpacing: ".5px",
          }}
        >
         From knowledge to challenge, thank you Thomas for keeping my mind on a goal to reach towards.
        </p>
      </div>

      <div>
        <a href="/" target="_blank" rel="noopener noreferrer" title="">
          <i
            className="fab mr-5 fa-github"
            style={{ fontSize: "3rem", color: "royalblue" }}
          ></i>
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer" title="">
          <i
            className="fab mr-5 fa-linkedin"
            style={{ fontSize: "3rem", color: "royalblue" }}
          ></i>
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer" title="">
          <i
            className="fas fa-envelope-square"
            style={{ fontSize: "3rem", color: "royalblue" }}
          ></i>
        </a>
      </div>
    </main>
  );
}
