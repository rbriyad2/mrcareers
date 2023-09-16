import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import './Index.css';

const Index = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Index;