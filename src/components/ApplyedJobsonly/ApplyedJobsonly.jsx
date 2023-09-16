import React from "react";
import "./ApplyedJobsonly.css";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faSackDollar } from "@fortawesome/free-solid-svg-icons";

const ApplyedJobsonly = ({ matchedJobs }) => {
  console.log(matchedJobs);
  return (
    <div className="ApplyedJobsonly">
      <h2>Applied Jobs </h2>
      <div>
        {matchedJobs.map((job) => (
          <div key={job.id}>
            <div className="container">
              <div className="appliedjobonly">
                <div className="jobinfoView">
                  <div className="jobinfocontent">
                    <div className="companylogo">
                      <img src={job.jobcategoryicon} alt="" />
                    </div>
                    <div className="contents">
                      <h3>{job.categorytitle}</h3>
                      <h5>{job.companyName}</h5>
                      <div className="remotebtn">
                        <button>{job.remote[0]}</button>
                        <button>{job.remote[1]}</button>
                      </div>
                      <div className="locationSalary">
                        <p>
                          {" "}
                          <FontAwesomeIcon
                            className="locationicon"
                            icon={faLocationDot}
                          />{" "}
                          {job.location}
                        </p>
                        <p>
                          <FontAwesomeIcon
                            className="salaryUSD"
                            icon={faSackDollar}
                          />{" "}
                          {job.salary}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="viewdetailbtn">
                    <Link className="getstarted" to={`/jobdetails/${job.id}`}>
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          // Render other job details as needed
        ))}
      </div>
    </div>
  );
};

export default ApplyedJobsonly;

// <div className="container">
//                 <div className="appliedJobsonly">
//                     <div className="img">
//                         <img src={jobcategoryicon} alt="" />
//                     </div>
//                     <div className="appliedjobcontent">
//                         <h3 className="h">{categorytitle}</h3>
//                         <h4>{companyName}</h4>
//                         <div className="remotebtn">
//                             <button>{remote[0]}</button>
//                             <button>{remote[1]}</button>
//                         </div>
//                         <div className="locationSalary">
//                             <p>{location}</p>
//                             <p>{salary}</p>
//                         </div>
//                     </div>
//                     <div className="viewdetailbtn">
//                     <Link className='getstarted' to={`/jobdetails/${id}`}>View Details</Link>
//                     </div>

//                 </div>
//             </div>
