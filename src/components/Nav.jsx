import React from "react";
import img1 from "../assets/united-states.png";
import img from "../assets/online-chat.png";
import img2 from "../assets/power-off.png";
import logo from "../assets/logo.jpeg";

function Nav() {
  return (
    <>
      <div className="bg-[#eef1f8] p-2 mx-6 flex justify-end font-semibold text-xl rounded-sm relative">
        <div className="absolute left-0 top-0">
          <div className="flex flex-col">
            <img src={logo} alt="" className="w-40 h-30" />
            <div
              className="text-center w-40 h-10 text-white text-2xl bg-[#2b4a9a] mb-1"
            >
              <h2>Search</h2>
            </div>
            <div
              className="text-center w-40 h-10 text-white text-xl bg-[#2b4a9a] mb-1"
            >
              <h2>Manage Order</h2>
            </div>
            <div
              className="text-center w-40 h-10 text-white text-xl bg-[#2b4a9a] mb-1"
            >
              <h2>Reporting</h2>
            </div>
            <div
              className="text-center w-40 h-10 text-white text-xl bg-[#2b4a9a] mb-1"
            >
              <h2>Agent Profile</h2>
            </div>
            
          </div>
        </div>
        <nav className="flex justify-around items-center">
          <div className="flex justify-around items-center mx-4">
            <img src={img1} alt="flag" className="w-10 h-10" />
            <span>English</span>
          </div>
          <div className="flex justify-around items-center mx-4">
            <span>USD</span>
          </div>
          <div className="flex justify-around items-center mx-4">
            <img src={img} alt="flag" className="w-10 h-10 mx-1" />
            <span>support</span>
          </div>
          <div className="flex justify-around items-center mx-4">
            <img src={img2} alt="flag" className="w-6 h-6 mx-2" />
            <span> log out</span>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Nav;
