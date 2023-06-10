import "./home.scss";
import homePlaceHolder from "../../assets/img/video-place-holder.png";
import carMap from "../../assets/img/car-map.png";
import carBlue from "../../assets/img/car-blue.png";
import airIcon from "../../assets/img/air-icon.svg";
import carIcon from "../../assets/img/car-icon.svg";
import hydIcon from "../../assets/img/hyd-icon.svg";
import carYellow from "../../assets/img/car-yellow.png";
import featureLines from "../../assets/img/feature-lines.svg";
import comfortIocn from "../../assets/img/comfort-icon.svg";
import familyIocn from "../../assets/img/family-icon.svg";
import luxuryIocn from "../../assets/img/lucky-icon.svg";
import profIocn from "../../assets/img/prof-icon.svg";
import affordIocn from "../../assets/img/adorable-icon.svg";
import hygineIocn from "../../assets/img/hygine-icon.svg";
import galleryLines from "../../assets/img/gallery-lines.svg";
import gallery1 from "../../assets/img/gallery-1.png";
import gallery2 from "../../assets/img/gallery-2.png";
import gallery3 from "../../assets/img/gallery-3.png";

export default function Home() {
  const galleryImages = [
    {
      location: "Rio de Janero",
      img: gallery1,
    },
    {
      location: "Tirupati",
      img: gallery2,
    },
    {
      location: "Beunos Aeries",
      img: gallery3,
    },
  ];
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
      desc: `Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s.`,
    },
    {
      icon: carIcon,
      title: "Vacations",
      desc: `Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s.`,
    },
    {
      icon: hydIcon,
      title: "Locations Vacations",
      desc: `Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s.`,
    },
    {
      icon: airIcon,
      title: "Airport Pickup",
      desc: `Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s.`,
    },
  ];
  return (
    <>
      <div className="home">
        <div className="header">
          <div className="head-main">
            <div className="head-video">
              {/* <video src=""></video> */}
              <img src={homePlaceHolder} alt="" />
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
                  <input type="date" name="" id="" />
                  <img src="" alt="" />
                </div>
              </div>
              <div className="col">
                <div className="type-container">
                  <div className="location-container">
                    <select name="" id="">
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
                  <option value="">option1</option>
                  <option value="">option2</option>
                  <option value="">option3</option>
                </select>
                <img src="" alt="" />
              </div>
              <div className="col submit-container">
                <button>Book Now</button>
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
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </div>
              <div className="book-btn">
                <button>Book now</button>
              </div>
              <div className="stats">
                <div className="col">
                  <h1 className="stat">100+</h1>
                  <p className="stat-name">Satisfied customers</p>
                </div>
                <div className="col">
                  <h1 className="stat">100+</h1>
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
                  <div className="service">
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
              <div className="icon-image">
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
              {galleryImages.map((rec, i) => {
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
            <button>and many more...</button>
          </div>
        </div>
      </div>
    </>
  );
}
