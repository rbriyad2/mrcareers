import React from 'react';
import './Alljob.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faLocationDot, faSackDollar } from '@fortawesome/free-solid-svg-icons'

const Alljob = ({job}) => {
    const {jobcategoryicon, categorytitle, companyName, remote, location, salary, id}=job;
    return (
        <div className='fecturedJobInfo'>
            <img src={jobcategoryicon} alt="" />
            <h3>{categorytitle}</h3>
            <p>{companyName}</p>
            <div className="remoteBtn">
                <button>{remote[0]}</button>
                <button>{remote[1]}</button>
            </div>
            <div className="">
                <p> <FontAwesomeIcon className='locationicon' icon={faLocationDot} /> {location}</p>
                <p><FontAwesomeIcon className='salaryUSD' icon={faSackDollar} /> {salary}</p>
            </div>
            <Link to={`/jobdetails/${id}`}>View Details</Link>
        </div>
    );
};

export default Alljob;