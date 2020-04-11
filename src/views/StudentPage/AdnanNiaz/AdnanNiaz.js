/* EDIT THIS COMPONENT */
import React from "react";
import "./AdnanNiaz.css";

export default function AdnanNiaz() {
  return (
    <main
      style={{
        textAlign: "center",
        border: "solid 1px #000",
        padding: "20px",
      }}
    >
      <h2>Adnan Niaz</h2>
      <img
        src="./assets/images/other/adi.png"
        alt="student-portfolio"
        style={{ width: "300px", borderRadius: "50%" }}
      />
      <p
        style={{
          width: "50%",
          margin: "0 auto",
          padding: "40px 0",
          lineHeight: "22px",
          letterSpacing: ".5px",
        }}
      >
        - A memorable/funny moment with Thomas &amp; the class - additional
        message for Thomas (feedback/question)
      </p>
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
