import logo from "../../assets/img/length-logo.svg";
import callIcon from "../../assets/img/call-icon.svg";
import "./navbar.scss";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
export default function Navbar() {
  const location = useLocation();
  const openModel = () => {
    document.querySelector(".model").classList.add("active");
  };
  const closeModel = () => {
    document.querySelector(".model").classList.remove("active");
  };
  const openMenu = (e) => {
    document.querySelector(".ham-menu").classList.toggle("active");
    document.querySelector(".mobile .nav-links").classList.toggle("active");
  };
  return (
    <>
      <div className="model">
        <div className="container">
          <div className="close-icon">
            <h1 onClick={closeModel}>+</h1>
          </div>
          <h1>Coming Soon...</h1>
          <div className="contact">
            <p>
              We are under construction. <br /> Meanwhile contact us on below
              details
            </p>
            <div className="body">
              <div className="contact-details">
                <div className="detail location">
                  <a
                    href="https://goo.gl/maps/7kFv4eVLjakz28YY7"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Roadpax India - Private car rentals Park
                    K P H B Phase 9, Kukatpally,
                    Hyderabad, Telangana 500085
                  </a>
                </div>
                <div className="detail phone">
                  <a href="tel:918074338043">+91 80743 38043</a>
                </div>
                <div className="detail mail">
                  <a href="mailto:info.roadpax@gmail.com">
                    info.roadpax@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar desktop">
        <div className="nav-links">
          <ul>
            <div className="left">
              <li className="nav-link">
                <Link onClick={openModel}>Get a ride</Link>
              </li>
              <li className="nav-link">
                {location.pathname === "/" ? (
                  <HashLink to="#services">Services</HashLink>
                ) : (
                  <Link to="/">Services</Link>
                )}
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
                <button
                  className="call"
                  onClick={() => {
                    window.location = "tel:918074338043";
                  }}
                >
                  <img src={callIcon} alt="" />
                </button>
              </li>
              <li className="nav-link">
                <button className="login" onClick={openModel}>
                  Login
                </button>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="navbar mobile">
        <div className="nav-links">
          <div className="side-menu">
            <ul>
              <li className="nav-link">
                <Link to="/" onClick={openMenu}>
                  Get a ride
                </Link>
              </li>
              <li className="nav-link">
                {location.pathname === "" ? (
                  <HashLink to="#services" onClick={openMenu}>
                    Services
                  </HashLink>
                ) : (
                  <Link to="/" onClick={openMenu}>
                    Services
                  </Link>
                )}
              </li>
              <li className="nav-link">
                <Link to="/gallery" onClick={openMenu}>
                  The happy faces
                </Link>
              </li>
              <li className="nav-link">
                <button className="login" onClick={openModel}>
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-menu">
          <div className="col">
            <div className="ham-menu" onClick={openMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="col">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="call">
              <button
                onClick={() => {
                  window.location = "tel:918074338043";
                }}
              >
                <img src={callIcon} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
