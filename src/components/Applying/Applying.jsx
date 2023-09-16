import React from 'react';
import './Applying.css';
import { useLoaderData } from 'react-router-dom';
import Alljob from '../Alljob/Alljob';
import shape from '../../../public/images/icons/shape.png';
import Footer from '../Footer/Footer';

const Applying = () => {
    const alljobs = useLoaderData()
    
    return (
        <div>
            <h2 className='hedding'>Applying Jobs </h2>
            <img className='heddingshape' src={shape} alt="" />
            <img className='heddingshaperight' src={shape} alt="" />
            <div className="container">
            <div className="applyingalljobs">
            {alljobs.map( job => <Alljob key={job.id} job={job}></Alljob>)}
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Applying;