import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import "./App.scss";
import About from "./pages/about/About";
import Gallery from "./pages/gallery/Gallery";
import Services from "./pages/services/Services";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import scrollToTop from "./assets/img/scroll-to-top.svg";
import { useEffect } from "react";
function App() {
  const location = useLocation();
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    scrollTop();
  }, [location]);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > window.document.scrollingElement.scrollHeight / 10) {
        document.querySelector(".scroll-to-top").classList.remove("hide");
      } else {
        document.querySelector(".scroll-to-top").classList.add("hide");
      }
    });
  });
  return (
    <>
      <Navbar />
      <div className="main">
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/gallery" Component={Gallery} />
          <Route path="/services" Component={Services} />
        </Routes>
      </div>
      <Footer />
      <div className="scroll-to-top hide" onClick={scrollTop}>
        <img src={scrollToTop} alt="" />
      </div>
    </>
  );
}

export default App;
