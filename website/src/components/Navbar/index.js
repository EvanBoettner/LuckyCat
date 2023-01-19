import "./index.css";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { MdRestaurantMenu } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { React } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="nav">
      <ul className="navitems">
        <li className="items">
        
        </li>
        <li className="items" onClick={() => navigate("/")}>
          <SiHomeassistantcommunitystore /> Home
        </li>
        <li className="items" onClick={() => navigate("/story")}>
          <BsFillInfoSquareFill /> Our Story
        </li>
        <li className="items" onClick={() => navigate("/menu")}>
          <MdRestaurantMenu /> Menu
        </li>
        <li className="items" onClick={() => navigate("/checkout")}>
          <FaShoppingCart /> Order Online
        </li>
      </ul>
    </div>
  );
}
