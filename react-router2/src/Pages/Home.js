import React from "react";
import "./Pages/Home.css";
//import Shopping from "./Pages/Images/shopping.jpg";

const Home = () => {
  return (
    <div className="home">
      <h1 className="index">Welcome to our Project</h1>
      <div>
        <img src={Shopping} height={407} width={1228} alt="hand" />
      </div>
    </div>
  );
};

export default Home;
