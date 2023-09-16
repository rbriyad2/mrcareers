import React from 'react';
import './Blogcontent.css';

const Blogcontent = ({blogtext}) => {
    const {categorytitle, jobcategoryicon, description}=blogtext;
    return (
        <div>
           
                <div className="blogcontent">
                    <div className="img">
                    <img src={jobcategoryicon} alt="" />
                    </div>
                    <h3>{categorytitle}</h3>
                    <p>{description}</p>
                </div>
         
        </div>
    );
};

export default Blogcontent;