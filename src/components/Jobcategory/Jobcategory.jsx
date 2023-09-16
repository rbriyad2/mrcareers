import React from "react";
import "./Jobcategory.css";
import Category from "../Category/Category";


const Jobcategory = ({jobcategorys}) => {
  return (
    <div className="jobcategorys">
      <div className="container">
        <div className="jobcategoryHeader">
          <h2>Job Category List</h2>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="jobcategoyslist">
        {jobcategorys.map(jobcategory => <Category key={jobcategory.id} jobcategory={jobcategory}></Category>)}
        </div>
      </div>
    </div>
  );
};

export default Jobcategory;
