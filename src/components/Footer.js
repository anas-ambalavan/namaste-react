import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useLocation } from "react-router-dom";

import Logo from "../../assets/logo-white.png";
import { RoutesWithFooter } from "../utils/constants";

const Footer = () => {
  const { pathname } = useLocation();

  if (!RoutesWithFooter.includes(pathname)) return null;

  return (
    <div className="footer-container">
      <div className="footer-logo-container">
        <div className="footer-logo">
          <img src={Logo} alt="logo" height="31px" />
          <h1>Swiggy</h1>
        </div>
        <p>© 2023</p>
      </div>
      <div className="footer-item footer-links">
        <h3>Company</h3>
        <ul>
          <li>About</li>
          <li>Careers</li>
          <li>Team</li>
          <li>Swiggy One</li>
          <li>SWiggy Instamart</li>
          <li>Swiggy Genie</li>
        </ul>
      </div>
      <div className="footer-item">
        <div className="footer-links">
          <h3>Contact us</h3>
          <ul>
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
          </ul>
        </div>
        <div className="footer-links legal">
          <h3>Legal</h3>
          <ul>
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <div className="footer-item footer-links deliver">
        <h3>We deliver to:</h3>
        <ul>
          <li>Bangalore</li>
          <li>Gurgaon</li>
          <li>Hyderabad</li>
          <li>Delhi</li>
          <li>Mumbai</li>
          <li>Pune</li>
        </ul>
        <button className="btn-footer-cities">
          588 cities
          <ChevronDownIcon style={{ height: "20px", marginLeft: 2 }} />
        </button>
      </div>
    </div>
  );
};

export default Footer;
