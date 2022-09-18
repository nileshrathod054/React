import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElement";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact
          </NavLink>

          <NavLink to="/shop" activeStyle>
            Shop
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
