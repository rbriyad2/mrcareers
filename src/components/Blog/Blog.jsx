import React from 'react';
import './Blog.css';
import Footer from '../Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import Blogcontent from '../Blogcontent/Blogcontent';

const Blog = () => {
    const blogs = useLoaderData()
    return (
        <div>
            <h2 className='blog'>Blog</h2>
            <div className="container">
        <div className="blogs">
        {blogs.map(blogtext=> <Blogcontent key ={blogtext.id} blogtext={blogtext}></Blogcontent>)}
        </div>
            </div>
        
            
            <Footer></Footer>
        </div>
    );
};

export default Blog;