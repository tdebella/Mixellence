import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from '../redux/slices/auth-slice'

const Navbar = (props) => {
  const navigate = useNavigate();
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const dispatch = useDispatch();
  const location = useLocation();
  let path =
    location.pathname === "/login" || location.pathname === "/passwordReset";
  let home = "/";

  const logout = () => {
    dispatch(authActions.logOut());
    localStorage.removeItem('token')
    navigate('/')
  }

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
          {loggedIn &&
            <li onClick={logout}>
              <span>exit</span>
            </li>
          }
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
