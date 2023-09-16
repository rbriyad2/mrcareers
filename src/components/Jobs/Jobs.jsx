import React from 'react';
import './Jobs.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faLocationDot, faSackDollar } from '@fortawesome/free-solid-svg-icons'

const Jobs = ({job}) => {
    const {jobcategoryicon, categorytitle, companyName, location,salary,remote, id}=job
    return (
        <div className='fecturedJobInfo'>
            <img src={jobcategoryicon} alt="" />
            <h3>{categorytitle}</h3>
            <p>{companyName}</p>
            <div className="remoteBtn">
                <button>{remote[0]}</button>
                <button>{remote[1]}</button>
            </div>
            <div className="locationSalary">
                <p> <FontAwesomeIcon className='locationicon' icon={faLocationDot} /> {location}</p>
                <p><FontAwesomeIcon className='salaryUSD' icon={faSackDollar} /> {salary}</p>
            </div>
            <Link className='getstarted' to={`/jobdetails/${id}`}>View Details</Link>
        </div>
    );
};

export default Jobs;