import React from "react";
import "./Hreo.css";
import heroimage from "../../assets/images/heroimage.png";

const Hreo = () => {
  return (
    <div className="heropartfull">
        <div className="container">
      <div className="heropart">
        <div className="heroleft">
          <h1>
            One Step Closer To Your <span>Dream Job</span>
          </h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="getstarted">Get Started</button>
        </div>
        <div className="heroright">
          <img src={heroimage} alt="" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hreo;
