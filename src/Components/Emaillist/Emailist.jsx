import "./emailist.css";
import React from "react";

const Emailist = () => {
  return (
    <>
      <div className="email">
        <h1 className="titleemail">Save Time, save money</h1>
        <span className="descemail">
          Sign up and we'll send the bes deals to you
        </span>
        <div className="emailcontainer">
          <input type="text" placeholder="Email here" />
          <button>Subscribe</button>
        </div>
      </div>
    </>
  );
};

export default Emailist;
