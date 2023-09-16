import React from 'react';
import './Header.css';
import logo from '../../../public/mrlogo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbarfull">
            <div className="container">
            <nav className='navbar'>
            <Link to='/'><img src={logo} alt="" /></Link>
            <div className="menu">
                <ul>
                    <li><Link to='/statistics'>Statistics</Link></li>
                    <li><Link to='/appliedjobs'>Applied Jobs</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                </ul>
            </div>
            <button className='startapplyingBtn'><Link to='/applying'>Star Applying</Link></button>
        </nav>
        </div>
        </div>
    );
};

export default Header;