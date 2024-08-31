import Logo from "../../assets/img/length-logo.svg";
import { Link } from "react-router-dom";
import yt from "../../assets/img/yt.svg";
import ig from "../../assets/img/ig.svg";
import fb from "../../assets/img/fb.svg";
import twit from "../../assets/img/twit.svg";
import mailIcon from "../../assets/img/mailIcon.svg";
import userIcon from "../../assets/img/userIcon.svg";
import "./footer.scss";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
export default function Footer() {
  const socialLinks = [
    {
      img: yt,
      link: "",
    },
    {
      img: fb,
      link: "",
    },
    {
      img: ig,
      link: "",
    },
    {
      img: twit,
      link: "",
    },
  ];
  const location = useLocation();
  return (
    <>
      <div className="footer">
        <div className="body">
          <div className="col ">
            <div className="logo">
              <img src={Logo} alt="" />
            </div>
            <div className="desc">
              <p>
                At Roadpax, we provide exceptional transportation services,
                offering comfort, reliability, and a seamless travel experience
                for our valued customers.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="links">
              <ul>
                <li>
                  {location.pathname === "/" ? (
                    <HashLink to="#about">About Us</HashLink>
                  ) : (
                    <Link to="/">About Us</Link>
                  )}
                </li>
                <li>
                  {location.pathname === "/" ? (
                    <HashLink to="#services">Services</HashLink>
                  ) : (
                    <Link to="/">Services</Link>
                  )}
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
              </ul>
            </div>
            <div className="social-icons">
              {socialLinks.map((rec, i) => {
                return (
                  <div className="social-icon" key={`social-link-${i}`}>
                    <a href={rec.link}>
                      <img src={rec.img} alt="" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col">
            <div className="form">
              <div className="input-field-container input">
                <input type="text" placeholder="enter your name..." />
                <img src={userIcon} alt="" />
              </div>
              <div className="input-field-container input">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="enter your email..."
                />
                <img src={mailIcon} alt="" />
              </div>
              <div className="input-field-container submit">
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
