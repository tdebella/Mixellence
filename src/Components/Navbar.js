import { useLocation } from "react-router-dom";
import "./Navbar.css";


const Navbar = (props) => {
  const location = useLocation()
  let path = location.pathname === '/login' || location.pathname === '/passwordReset'
  let home = '/'
  return (
    <div className="navbar">
      <div className="logo" alt="logo-title">
        <a href={path ? home : "#top"}>MIXELLENCE</a>
      </div>

      <nav className="nav">
        <ul>
          <li>
            <a href={path ? home : "#about"}>About</a>
          </li>
          <li>
            <a href={path ? home : "#drinks"}>Drinks</a>
          </li>
          <li>
            <a href={path ? home : "#bartenders"}>Bartenders</a>
          </li>
          <li>
            <a href={path ? home : "#testimonials"}>Testimonials</a>
          </li>
          <li>
            <a href={path ? home : "#contact"}>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
