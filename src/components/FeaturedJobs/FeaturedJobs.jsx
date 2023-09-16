import React, { createContext, useEffect, useState } from "react";
import Jobs from "../Jobs/Jobs";
import './FeaturedJobs.css';

export const jobContext = createContext;
const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const jobsData = async () => {
    const loadedJobs = await fetch("jobs.json");
    const jobs = await loadedJobs.json();
    const seeallbtn= document.getElementById('sellallbtn')
    if(jobs.length >4){
      const somejobs =jobs.slice(0, 4);
     seeallbtn.classList.remove('hidebtn')
     setJobs(somejobs)
    }
    else{
      seeallbtn.classList.add('hidebtn')
    }
  };
  const showallHanler =()=>{
    setJobs(jobs)
    console.log('clicked')
   }

  useEffect(() => {
    jobsData();
  }, []);
  return (
    <div>
      <div className="jobcategorys">
        <div className="container">
          <div className="jobcategoryHeader">
            <h2>Featured Jobs</h2>
            <p>
              Explore thousands of job opportunities with all the information
              you need. Its your future
            </p>
          </div>
          <div className="feturedJobs">
            {jobs.map((job) => (
              <Jobs key={job.id} job={job}></Jobs>
            ))}
          </div>
          <div className="viewall">
          <button onClick={showallHanler} id="sellallbtn" className="seeAllJobsBtn hidebtn">See All Jobs</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
