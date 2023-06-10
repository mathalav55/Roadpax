import logo from "../../assets/img/length-logo.svg";
import callIcon from "../../assets/img/call-icon.svg";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="nav-links">
          <ul>
            <div className="left">
              <li className="nav-link">
                <Link to="/">
                    Get a ride
                </Link>
              </li>
              <li className="nav-link">
                <HashLink to="#services">Services</HashLink>
              </li>
            </div>
            <div className="middle">
              <li className="nav-link">
                <div className="logo">
                  <Link to="/">
                  <img src={logo} alt="" />
                  </Link>
                </div>
              </li>
            </div>
            <div className="right">
              <li className="nav-link">
                <Link to="/gallery">The happy faces</Link>
              </li>
              <li className="nav-link">
                <button className="call">
                  <img src={callIcon} alt="" />
                </button>
              </li>
              <li className="nav-link">
                <button className="login">Login</button>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
