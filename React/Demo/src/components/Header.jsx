import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center p-2 bg-info text-light text-black ">
        <h3>My Website</h3>
        <div className="d-flex gap-3">
          <Link to={"/"} className="text-decoration-none text-black fs-4 ">
            Home
          </Link>
          
          <Link to={"/about"} className="text-decoration-none text-black fs-4 ">
            About
          </Link>
          <Link to={"/product"} className="text-decoration-none text-black fs-4">
            Product
          </Link>
          <Link to={"/contact"} className="text-decoration-none text-black fs-4">
            Contact
          </Link>
          <Link to={"/login"} className="text-decoration-none text-black fs-4 ">
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
