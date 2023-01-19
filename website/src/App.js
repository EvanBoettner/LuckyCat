import "./App.css";
import backdrop from "./assets/Lucky Cat Curry House.png";
import Navbar from "./components/Navbar";
import curry from "./assets/curry.png";
import gyoza from "./assets/gyoza.png";
import logo from "./assets/LOGO3.png";
import { useNavigate } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

function App() {
  const navigate = useNavigate();

  return (
    <div className="body">
      <Navbar />
      <div className="home">
        <img className="backdrop" src={backdrop} alt="backdrop" />
      </div>
      <div className="mission">
        <div className="form">
          <h1 className="name">Lucky Cat Curry House</h1>
          <p className="statement">
            Our goal at Lucky Cat Curry House is to provide our customers the
            best Japanese comfort food in a relaxed, fun atmosphere. <br />{" "}
            <button onClick={() => navigate("/menu")} className="butt">
              See Menu
            </button>
          </p>
        </div>
        <div className="mission-img">
          <img src={curry} alt="curry" />
        </div>
        <div className="mission-img2">
          <img src={gyoza} alt="gyoza" />
        </div>
      </div>
      <div className="footer">
        <img className="logo" src={logo} alt="logo" />
        <h1>Lucky Cat Japanese Restaurant</h1>
        <p>100 W. MAPLE ST. - WALKER'S POINT - PHONE 123 456 7891</p>
        <p>OPEN 11AM TO 9PM TUESDAY WEDNESDAY THURSDAY</p>
        <p>OPEN 11AM TO 10PM FRIDAY AND SATURDAY</p>
        <p>CLOSED ON SUNDAY AND MONDAY</p>
        <p className="medias">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com"
          >
            <BsFacebook />
          </a>{" "}
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com">
            <BsInstagram />
          </a>{" "}
          <a target="_blank" rel="noreferrer" href="https://www.twitter.com">
            <BsTwitter />
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
