import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  const handleNavbar = () => setToggleMenu(!toggleMenu);
  return (
    <div>
      {/* <h1>Navbar</h1> */}
      <nav className=" navbar" id="navbar">
        <div className=" px-[32px] w-full flex items-center justify-center">
          <div className="flex w-full justify-between ">
            <Link className="flex w-[90px]">
              <img src={Logo} alt="site logo" />
              <span className=" ml-2 uppercase font-bold text-[32px]">
                Bookhub
              </span>
            </Link>
            <button
              type="button"
              className="z-10 transition-all"
              onClick={handleNavbar}
            >
              {" "}
              <HiOutlineMenuAlt3
                size={35}
                style={{
                  color: `${toggleMenu ? "#fff" : "#010101"}`,
                }}
              />
            </button>
          </div>
          <div
            className={
              toggleMenu
                ? "navbar-collapse show-navbar-collapse"
                : "navbar-collapse"
            }
          >
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link
                  to="book"
                  className=" nav-link transition-all uppercase text-white text-[2.2rem] font-medium tracking-widest"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="about"
                  className=" nav-link transition-all uppercase text-white text-[2.2rem] font-medium tracking-widest"
                >
                  about
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="login"
                  className=" nav-link transition-all uppercase text-white text-[2.2rem] font-medium tracking-widest"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
