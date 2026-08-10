import { useState } from "react";
import "./userNavbar.scss";

// Routing
import { Link } from "react-router-dom";

// Assets
import logo from "@/assets/logo.webp";

const UserNavbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavClick = () => {
    setNavOpen(!navOpen);
  };

  const navData = [
    {
      name: "Destinations",
      path: "/",
    },
    {
      name: "Bespoke Journeys",
      path: "/booking",
    },
    {
      name: "Contact",
      path: "/",
    },
  ];

  return (
    <nav>
      <div className="nav-container">
        <div className="navbar">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Come Fly With Me" />
            </Link>
          </div>

          <div className="menu-toggle">
            <div
              className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}
              onClick={handleNavClick}
            >
              <span
                className={navOpen ? "lineTop spin" : "lineTop"}
              ></span>

              <span
                className={
                  navOpen ? "lineBottom spin" : "lineBottom"
                }
              ></span>
            </div>
          </div>
        </div>

        <div
          className="nav-overlay"
          style={{
            top: navOpen ? "0" : "100%",
            transitionDelay: "0s",
          }}
        >
          <div className="link">
            <ul className="nav-links">
              {navData.map((item, index) => (
                <li
                  key={index}
                  className="nav-item"
                  onClick={handleNavClick}
                >
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;