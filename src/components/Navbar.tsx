import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  return (
    <nav>
      <NavLink to="/" style={{ color: "blue", backgroundColor: "yellow" }}>
        Home
      </NavLink>
      <NavLink to="/products" className="nav-item">
        Products
      </NavLink>
      <NavLink to="/users" className="nav-item">
        Users
      </NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/register2">Register2</NavLink>
    </nav>
  );
};

export default Navbar;
