import Body from "../../Components/Body/Body";
import Emailist from "../../Components/Emaillist/Emailist";
import Footer from "../../Components/Footer/Footer";
import HouseList from "../../Components/HouseList/HouseList";
import Navbar from "../../Components/Navbar/Navbar";
import Special from "../../Components/special/Special";
import Specialhotel from "../../Components/SpecialHo/Specialhotel";
import "./home.css";
import React from "react";

const Home = () => {
  return (
    <>
      <Navbar />
      <Body />
      <div className="containerhome">
        <Special />
        <h1 className="titlehome">Browse by property type</h1>
        <HouseList />
        <h1 className="titlehome">Homes guests love</h1>
        <Specialhotel />
        <Emailist />
        <Footer />
      </div>
    </>
  );
};

export default Home;
