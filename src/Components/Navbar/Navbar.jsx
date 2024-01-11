import "./navbar.css";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <span className="logo">Online Booking</span>
          <div className="headeritems">
            <button className="btn-signin">Sign in</button>
            <button className="btn-login">Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
