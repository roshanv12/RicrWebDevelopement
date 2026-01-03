import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
     <div className=" w-full  top-0 fixed-top z-100 sticky ">
       <div className="flex justify-around  px-2 py-4 bg-sky-300 text-light  ">
        <h3 className=" text-indigo-600 text-3xl font-bold ">My Website</h3>
        <div className="flex gap-7 text-xl">
          <Link to={"/"} className="text-decoration-none text-light">
            Home
          </Link>
          <Link to={"/form"} className="text-decoration-none text-light">
            Form
          </Link>
          <Link to={"/product"} className="text-decoration-none text-light">
            Product
          </Link>
                
        </div>
        <div className="flex gap-7 text-xl">
          <Link to={"/product"} className="text-decoration-none text-light">
            Product
          </Link>
          <Link to={"/register"} className="text-decoration-none text-light">
            Register
          </Link> 

        </div>
      </div>
     </div>
    </>
  );
};

export default Header;
