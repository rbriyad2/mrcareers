import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../../../public/mrlogo.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footerinfo">
          <div className="logoinfo">
            <img src={logo} alt="" />
            <p>
              There are many variations of passages of Lorem Ipsum , but the
              majority have suffered alteration in some form.
            </p>
            <div className="socialLink">
              <Link to="">Facebook</Link>
              <Link to="">Twitter</Link>
              <Link to="">Instagram</Link>
            </div>
          </div>
          <div className="companyMenu">
            <h4 className="footerh4">Company</h4>
            <ul>
              <li>
                <Link>About Us</Link>
              </li>
              <li>
                <Link>Work</Link>
              </li>
              <li>
                <Link>Latest News</Link>
              </li>
              <li>
                <Link>Careers</Link>
              </li>
            </ul>
          </div>
          <div className="productMenu">
            <h4 className="footerh4">Product</h4>
            <ul>
              <li>
                <Link>Prototype</Link>
              </li>
              <li>
                <Link>Plans & Pricing</Link>
              </li>
              <li>
                <Link>Customers</Link>
              </li>
              <li>
                <Link>Integrations</Link>
              </li>
            </ul>
          </div>
          <div className="supportMenu">
            <h4 className="footerh4">Support</h4>
            <ul>
              <li>
                <Link>Help Desk</Link>
              </li>
              <li>
                <Link>Sales</Link>
              </li>
              <li>
                <Link>Become a Partner</Link>
              </li>
              <li>
                <Link>Developers</Link>
              </li>
            </ul>
          </div>
          <div className="contactInfo">
            <h4 className="footerh4">Contact</h4>
            <p>524 Broadway , NYC</p>
            <p>+1 777 - 978 - 5570</p>
          </div>
        </div>
        <div className="hr"></div>
        <div className="copyrightfooter">
          <div className="copyright">
            <p>@2023 Mr.Career All Rights Reserved</p>
          </div>
          <div className="poweredby">
            <p>Powered by 
            <span>
              <Link to="/">Powered by Mr.Career</Link>
            </span></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
