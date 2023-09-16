import './Homepage.css';
import Hreo from '../Hreo/Hreo';
import Jobcategory from '../Jobcategory/Jobcategory';
import { useLoaderData } from 'react-router-dom';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import Footer from '../Footer/Footer';



const Homepage = () => {

    const jobcategorys = useLoaderData();
    return (
        <div>
            <Hreo></Hreo>
            <Jobcategory jobcategorys={jobcategorys}></Jobcategory>
           <FeaturedJobs></FeaturedJobs>
            <Footer></Footer>
        </div>
    );
};

export default Homepage;