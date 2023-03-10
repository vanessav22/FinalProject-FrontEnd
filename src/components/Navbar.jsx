import React, { useContext } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to={"/signup"}> Signup Volunteer | </Link>

      <Link to={"/signupcharity"}> Signup Charity | </Link>

      <Link to={"/login"}>| Login </Link>
    </nav>
  );
}

export default NavBar;
