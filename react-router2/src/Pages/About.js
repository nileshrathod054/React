import React from "react";
import "./About.css";
//import nileshrathod from "./Pages/Images/nileshrathod.jpg";

const About = () => {
  return (
    <div>
      <div className="intro1"></div>
      <div className="intro2">
        <h2>Meet Our Team</h2>
        <h2>We are a Team of Devloper</h2>
      </div>
      <div className="intro3"></div>
      <div className="mid">
        <h1 style={{ color: "blue" }}>OUR PEOPLE</h1>
      </div>
      <div className="mid-1"></div>
      <div className="pic1">
        <img src={nileshrathod} height={200} width={200} alt="hand" />
        <h3 className="nilesh">Nilesh Rathod</h3>
      </div>
      <div className="mid-1"></div>
    </div>
  );
};

export default About;
