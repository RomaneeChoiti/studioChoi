import { NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

import "../css/Navbar.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>studio choi</NavLink>
        </li>
        <li>
          <NavLink to="/works" className={({ isActive }) => (isActive ? 'active' : '')}>work</NavLink>
        </li>
        <li>
          <NavLink to="/artist-statement" className={({ isActive }) => (isActive ? 'active' : '')}>artist statement</NavLink>
        </li>
        <li>
          <NavLink to="/bio" className={({ isActive }) => (isActive ? 'active' : '')}>bio</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>contact</NavLink>
        </li>
        <li>
          <DarkModeToggle />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
