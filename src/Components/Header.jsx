import React from "react";
import Navbar from "./Navbar";
import SerchForm from "./SerchForm";

const Header = () => {
  return (
    <div className="">
      <header>
        {/* <h1>Header</h1> */}
        <Navbar />
        <div className="flex  items-center justify-center flex-col text-center min-h-[72vh]  gradient ">
           <h2 className="text-[67px] text-white font-bold">Find Your Book Of Choice</h2>
           <p className="mt-1 mb-2 max-w-[770px] text-center text-2xl text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi exercitationem asperiores facilis, minus quisquam nemo voluptas ipsam accusantium vitae? Minima harum veritatis at ipsa necessitatibus?</p>
      <SerchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
