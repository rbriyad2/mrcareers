import React from "react";
import "./Category.css";

const Category = ({ jobcategory }) => {
  const { avilablejob, jobcategoryicon, categorytitle } = jobcategory;
  return (
    <div className="jobcategory">
      <img src={jobcategoryicon} alt="" />
      <h4>{categorytitle}</h4>
      <p>{avilablejob} Jobs Available</p>
    </div>
  );
};

export default Category;
