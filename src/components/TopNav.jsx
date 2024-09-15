import React, { useState } from "react";

const TopNav = () => {
  const [sidenav, setSideNav] = useState(false);
  return (
    <div className="max-w-[1520] mx-auto flex justify-between items-center p-4 bg-red-400">
      <div className="flex items-center">
        <div
          onClick={() => setSideNav(!sidenav)}
          className="cursor-pointer text-2xl"
        >
          <i class="bi bi-list"></i>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:4xl px-2">
          Food <span>Bite</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] ">
          <p className="bg-orange-700 text-white rounded-full p-2 font-bold">
            Free
          </p>
          <p className="p-2 font-bold">Delivery</p>
        </div>
      </div>
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <i class="bi bi-search"></i>
        <input
          type="text"
          className="bg-transparent p-2 w-full outline-none"
          placeholder="Search Meals"
        />
      </div>
      <button className="bg-orange-700 text-white hidden md:flex items-center py-1 px-3 rounded-full">
        {" "}
        <span>
          <i class="bi bi-cart"></i>
        </span>
        Cart
      </button>
      {sidenav ? (
        <div className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      <div
        className={
          sidenav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-200"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-200 "
        }
      >
        <i onClick={()=> setSideNav(!sidenav)} class="bi bi-x-lg cursor-pointer text-2xl absolute right-4 top-4"></i>
        <h2  className="text-2xl p-4">Food <span className="text-orange-700 font-bold">Bite</span></h2>
        <div className="listt p-8">
          <ul className="text-xl cursor-pointer font-semibold space-y-4">
            <li> <span><i class="bi bi-house"></i></span> Home</li>
            <li> <span><i class="fa-solid fa-bag-shopping"></i></span> Orders</li>
            <li> <span><i class="fa-solid fa-bowl-food"></i></span> Meals</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
