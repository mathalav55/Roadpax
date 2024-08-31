import "./home.scss";
import carMap from "../../assets/img/car-map.png";
import carBlue from "../../assets/img/car-blue.png";
import airIcon from "../../assets/img/air-icon.svg";
import carIcon from "../../assets/img/car-icon.svg";
import hydIcon from "../../assets/img/hyd-icon.svg";
import eventIcon from "../../assets/img/events-icon.svg";
import carYellow from "../../assets/img/car-yellow.png";
import featureLines from "../../assets/img/feature-lines.svg";
import comfortIocn from "../../assets/img/comfort-icon.svg";
import familyIocn from "../../assets/img/family-icon.svg";
import luxuryIocn from "../../assets/img/lucky-icon.svg";
import profIocn from "../../assets/img/prof-icon.svg";
import affordIocn from "../../assets/img/adorable-icon.svg";
import hygineIocn from "../../assets/img/hygine-icon.svg";
import galleryLines from "../../assets/img/gallery-lines.svg";
import headVideo from "../../assets/videos/head-video.mp4";
import { galleryImages } from "../../assets/gallery";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const gallery = galleryImages.slice(0, 3);

  const openModel = () => {
    document.querySelector(".model").classList.add("active");
  };
  const closeModel = () => {
    document.querySelector(".model").classList.remove("active");
  };

  const navigate = useNavigate();
  const featureIcons = [
    {
      title: "Comfort",
      icon: comfortIocn,
      name: "comfort",
    },
    {
      title: "Family Centric",
      icon: familyIocn,
      name: "family",
    },
    {
      title: "Affordable",
      icon: affordIocn,
      name: "afford",
    },
    {
      title: "Hygine",
      icon: hygineIocn,
      name: "clean",
    },
    {
      title: "Luxury",
      icon: luxuryIocn,
      name: "lux",
    },
    {
      title: "Professional Drivers",
      icon: profIocn,
      name: "prof",
    },
  ];
  const services = [
    {
      icon: airIcon,
      title: "Airport Pickup",
      desc: `Efficient and reliable airport pickup service, ensuring a seamless transition from landing to your destination.`,
    },
    {
      icon: carIcon,
      title: "Vacations",
      desc: `Reliable and hassle-free vacation car service, making your travel experience comfortable and convenient.`,
    },
    {
      icon: hydIcon,
      title: "Local Vacations",
      desc: `Convenient and flexible local vacation car service, enhancing your exploration and enjoyment of the area.`,
    },
    {
      icon: eventIcon,
      title: "Events",
      desc: `Convenient and punctual local events car service, ensuring a stress-free transportation experience for your special occasions.`,
    },
  ];
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
                    Roadpax India - Private car rentals Park K P H B Phase 9,
                    Kukatpally, Hyderabad, Telangana 500085
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
      <div className="home">
        <div className="header">
          <div className="head-main">
            <div className="head-video">
              <video src={headVideo} autoPlay muted loop></video>
              {/* <img src={homePlaceHolder} alt="" /> */}
            </div>
            <div className="head-text">
              <div className="title">
                <h1>
                  Experience a <br /> New level
                </h1>
              </div>
              <div className="tagline"></div>
            </div>
          </div>
          <div className="head-form">
            <div className="body">
              <div className="col">
                <div className="date-container">
                  <input
                    type="date"
                    name=""
                    id=""
                    value={new Date().toISOString().slice(0, 10)}
                  />
                  <img src="" alt="" />
                </div>
              </div>
              <div className="col">
                <div className="type-container">
                  <div className="location-container">
                    <select name="" id="">
                      <option value="" disabled selected>
                        Car type
                      </option>
                      <option value="">option1</option>
                      <option value="">option2</option>
                      <option value="">option3</option>
                    </select>
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
              <div className="col">
                <select name="" id="">
                  <option value="" disabled selected>
                    Location
                  </option>
                  <option value="">Gachibowli</option>
                  <option value="">Kukatpally</option>
                  <option value="">Jubilie Hills</option>
                </select>
                <img src="" alt="" />
              </div>
              <div className="col submit-container">
                <button onClick={openModel}>Book Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="about" id="about">
          <div className="body">
            <div className="col">
              <img src={carMap} alt="" />
            </div>
            <div className="col">
              <div className="desc">
                <p>
                  Welcome to our car travel service! We are your trusted partner
                  for all your transportation needs. With a focus on
                  convenience, reliability, and customer satisfaction, we
                  provide top-notch car travel services tailored to your
                  requirements.
                </p>
              </div>
              <div className="book-btn">
                <button onClick={openModel}>Book now</button>
              </div>
              <div className="stats">
                <div className="col">
                  <h1 className="stat">300+</h1>
                  <p className="stat-name">Satisfied customers</p>
                </div>
                <div className="col">
                  <h1 className="stat">10+</h1>
                  <p className="stat-name">Destinations</p>
                </div>
                <div className="col">
                  <h1 className="stat">100+</h1>
                  <p className="stat-name">Rides</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="services" id="services">
          <div className="title">
            <h1>Services</h1>
          </div>
          <div className="body">
            <div className="col">
              {services.map((rec, i) => {
                return (
                  <div
                    className={`service ${i % 2 !== 0 ? "reverse" : ""}`}
                    key={`service-${i}`}
                  >
                    <div className="icon">
                      <img src={rec.icon} alt="" />
                    </div>
                    <div className="title">
                      <h3>{rec.title}</h3>
                    </div>
                    <div className="desc">
                      <p>{rec.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="col service-img">
              <img src={carBlue} alt="" />
            </div>
          </div>
        </div>
        <div className="features">
          <div className="title">
            <h1>
              Our acclaimed <span>features</span>
            </h1>
          </div>
          <div className="body">
            <div className="car-yellow">
              <img src={carYellow} alt="" />
            </div>
            <div className="icons">
              <div className="icon-lines">
                <img src={featureLines} alt="" />
              </div>
              <div className="icon-cards">
                <div className="col">
                  {featureIcons.slice(0, 3).map((rec, i) => {
                    return (
                      <div
                        className="icon-card"
                        onMouseOver={() => {
                          document
                            .querySelector(".car-yellow")
                            .classList.add(rec.name);
                        }}
                        onMouseLeave={() => {
                          document
                            .querySelector(".car-yellow")
                            .classList.remove(rec.name);
                        }}
                        key={`icon-${i}`}
                      >
                        <div className="icon-image">
                          <img src={rec.icon} alt="" />
                        </div>
                        <div className="icon-title">{rec.title}</div>
                      </div>
                    );
                  })}
                </div>
                <div className="col">
                  {featureIcons.slice(3).map((rec, i) => {
                    return (
                      <div
                        key={`feature-${i}`}
                        className="icon-card"
                        onMouseOver={() => {
                          document
                            .querySelector(".car-yellow")
                            .classList.add(rec.name);
                        }}
                        onMouseLeave={() => {
                          document
                            .querySelector(".car-yellow")
                            .classList.remove(rec.name);
                        }}
                      >
                        <div className="icon-image">
                          <img src={rec.icon} alt="" />
                        </div>
                        <div className="icon-title">{rec.title}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery">
          <div className="title">
            <h1>
              The <span>Happy</span> Faces
            </h1>
          </div>
          <div className="body">
            <div className="gallery-lines">
              <img src={galleryLines} alt="" />
            </div>
            <div className="photo-cards">
              {gallery.map((rec, i) => {
                return (
                  <div className="photo-card" key={`photo-card-${i}`}>
                    <div className="photo">
                      <img src={rec.img} alt="" />
                    </div>
                    <div className="location">
                      <p>{rec.location}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="more-btn">
            <button
              onClick={() => {
                navigate("/gallery");
              }}
            >
              and many more...
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
