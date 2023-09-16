import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faBriefcase,
  faDollarSign,
  faChevronCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./JobDetail.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Footer/Footer";

const JobDetail = () => {
  const jobsdetails = useLoaderData();
  const {
    categorytitle,
    description,
    educationalRequirements,
    email,
    responsibility,
    exprience,
    phone,
    address,
    salary,
    id,
  } = jobsdetails;

  const applyNowBtn = (id) => {
    // Check if the post ID is already in local storage
    const storedIds = localStorage.getItem("applyedjobid");
    const applyedjobid = storedIds ? JSON.parse(storedIds) : [];

    if (applyedjobid.includes(id)) {
      // Post ID has already been added, show an alert
      toast.warn("Already Applyed", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      // Post ID hasn't been added, add it to local storage
      applyedjobid.push(id);
      localStorage.setItem("applyedjobid", JSON.stringify(applyedjobid));

      // You can add additional logic here, like making an API request to apply
      // for the post or updating the UI to indicate that the post has been applied for.
      toast.success("Apply Successfully", {
        position: "bottom-center",
        autoClose: 1000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  // back b
  const back1step = useNavigate();
  const goback = () => {
    back1step(-1);
  };

  return (
    <div className="jobDetails">
      <h2>Job Details</h2>
      <div className="container">
        <div className="viewjobDetails">
          <div className="jobdetailleft">
            <p className="jobdetailsInfo">
              <span className="jobdetailsInfoBold">Job Description:</span>{" "}
              {description}
            </p>
            <p className="jobdetailsInfo">
              <span className="jobdetailsInfoBold">Job Responsibility:</span>{" "}
              {responsibility}
            </p>
            <p className="jobdetailsInfo">
              <span className="jobdetailsInfoBold">
                Educational Requirements:
              </span>{" "}
              <br />
              {educationalRequirements}
            </p>
            <p className="jobdetailsInfo">
              <span className="jobdetailsInfoBold">Experiences:</span> <br />
              {exprience}
            </p>

            <div className="gobackbtns">
              <button className="gobackbtn" onClick={goback}>
                {" "}
                <FontAwesomeIcon
                  className="gobackicon"
                  icon={faChevronCircleLeft}
                />{" "}
                Back
              </button>
            </div>
          </div>
          <div className="jobshortinforight">
            <div className="jobdetailRight">
              <h6>Job Details</h6>
              <hr />
              <p className="salaryinfo">
                <FontAwesomeIcon
                  className="Jobdetailsicon"
                  icon={faDollarSign}
                />
                <span className="boldspan"> salary: </span>
                {salary}
              </p>
              <p className="jobtitledetails">
                {" "}
                <FontAwesomeIcon
                  className="Jobdetailsicon"
                  icon={faBriefcase}
                />{" "}
                <span className="boldspan">Job Title</span>
                {categorytitle}
              </p>

              <h6 className="contactinformation">Contact Information</h6>
              <hr />
              <p className="jobPhonedetails">
                <FontAwesomeIcon className="Jobdetailsicon" icon={faPhone} />{" "}
                <span className="boldspan"> Phone:</span> {phone}
              </p>
              <p className="jobemailDetails">
                <FontAwesomeIcon className="Jobdetailsicon" icon={faEnvelope} />{" "}
                <span className="boldspan"> Email:</span> {email}
              </p>
              <p className="jobLocation">
                {" "}
                <FontAwesomeIcon
                  className="Jobdetailsicon"
                  icon={faLocationDot}
                />
                <span className="boldspan"> Addess: </span> {address}
              </p>
            </div>
            <div className="applynowBtn">
              <button onClick={() => applyNowBtn(id)} className="getstarted">
                Apply Now
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default JobDetail;
