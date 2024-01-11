import Body from "../../Components/Body/Body";
import Navbar from "../../Components/Navbar/Navbar";
import Special from "../../Components/special/Special";
import "./home.css";
import React from "react";

const Home = () => {
  return (
    <>
      <Navbar />
      <Body />
      <div className="containerhome">
        <Special />
      </div>
    </>
  );
};

export default Home;
