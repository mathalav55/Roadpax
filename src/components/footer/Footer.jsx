import Logo from "../../assets/img/length-logo.svg";
import { Link } from "react-router-dom";
import yt from "../../assets/img/yt.svg";
import ig from "../../assets/img/ig.svg";
import fb from "../../assets/img/fb.svg";
import twit from "../../assets/img/twit.svg";
import mailIcon from "../../assets/img/mailIcon.svg";
import userIcon from "../../assets/img/userIcon.svg";
import "./footer.scss";
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Morbi
                lorem tellus, dignissim at dui sit amet, sagittis mattis elit
                pellentesque convallis.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="links">
              <ul>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
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
                <input type="email" name="" id="" placeholder="enter your email..." />
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
