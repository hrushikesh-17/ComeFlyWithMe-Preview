import "./userNavbar.scss";

// Routing
import { Link } from "react-router-dom";

// Assets
import logo from "@/assets/logo.webp";

const UserNavbar = () => {
  return (
    <nav>
      <div className="navbar">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Come Fly With Me" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;