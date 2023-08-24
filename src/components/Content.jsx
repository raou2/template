import React from "react";

import imger from '../assets/search.png'

function Content() {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <div>
        <h1 className="text-[70px] font-bold text-[#2945a7] my-1">
          <span className="text-[#cebd6b] font-bold">HELLO</span>, fatima travel
        </h1>
        <h2 className="text-[30px] font-bold text-[#2945a7] ml-12"><span className="text-[#cebd6b] font-bold">Let's</span> serch for the best prices and much more!</h2>
      </div>
      <div className="bg-[rgba(238,241,248,0.6)] w-[850px] my-4 p-4 rounded-md">
        <div className="flex m-1">
          <div className="flex-1 bg-[#dce7ed] p-8 mx-1"></div>
          <div className="flex-1 bg-[#dce7ed] p-8 mx-1 "></div>
        </div>
        <div className="flex m-1">
          <div className="flex-1 bg-[#dce7ed] p-8 mx-1"></div>
          <div className="flex-1 bg-[#dce7ed] p-8 mx-1 "></div>
        </div>
        <div className="flex m-1">
          <div className="flex-1 bg-[#dce7ed] p-8 mx-1"></div>
          <div className="flex-1 bg-[#dce7ed] p-8 mx-1 flex items-center justify-center">
      <img src={imger} alt="" className="w-10 h-10" />
      <h2 className="mx-2 text-3xl font-bold">Search</h2>
          </div>
        </div>
      </div>
      <div className="flex my-8 w-[850px] p-2">
          <div className="flex-1 bg-[#dce7ed] p-4 mx-1">
            <h2 className=" text-2xl text-[#2945a7] font-bold">Account details</h2>
            <p className="font-bold text-xl">balance available:1000 USD</p>
          </div>
          <div className="flex-1 bg-[#dce7ed] p-4 mx-1">
            <h2 className=" text-2xl text-[#2945a7] font-bold">Orders</h2>
            <p className="font-bold text-xl">Complete booking</p>
          </div>
        </div>
    </div>
  );
}

export default Content;
