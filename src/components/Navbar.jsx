import React, { useState } from "react";
import olx from "../assets/olx.png";
import lens from "../assets/lens.png";
import arrow from "../assets/arrow.png";
import Login from "./Login";
import Signup from "./Signup";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  const [loginPop, setLoginPop] = useState(false);
  const [registerPop, setregisterPop] = useState(false);
  return (
    <>
      <div className="flex py-4 px-2 justify-center bg-gray-100">
        <img
          src={olx}
          alt="olx-logo"
          className="w-11 h-9 object-contain my-auto"
        />
        <div className="flex border-2 rounded-md border-spacing-1 p-2 w-64  border-black ml-5">
          <img src={lens} alt="lens-logo" className="w-6 h-5 mt-1" />
          <input placeholder="Location" className="ml-2 w-full outline-none bg-gray-100" />
          <img src={arrow} alt="arrow-logo" className=" h-7" />
        </div>
        <div className="flex rounded-md h-12 ml-4 border-2 xl:w-[900px] border-black">
          <input
            placeholder="Find Cars, Mobile phones and more"
            className="m-2 w-full outline-none bg-gray-100"
          />
          <IoSearch size={45} className="p-3 bg-black text-white" />
        </div>
        <div className="flex h-12  p-3 ml-6 cursor-pointer">
          <h1 className="font-semibold">ENGLISH</h1>
          <img src={arrow} className=" " />
        </div>
        <div
          onClick={() => setLoginPop(!loginPop)}
          className="flex h-12 p-3  cursor-pointer underline hover:no-underline"
        >
          <h1 className="font-bold text-lg">Login</h1>
        </div>

        {/* <div className=' flex   cursor-pointer ml-5 w-auto rounded-full border border-yellow-500'> */}
        <div className="  right-0 font-bold text-sm rounded-full px-4 py-3 border flex  border-yellow-500 my-auto">
          +SELL
        </div>
        {/* </div> */}
      </div>
      {loginPop && (
        <Login setregisterPop={setregisterPop} setLoginPop={setLoginPop} />
      )}
      {registerPop && <Signup setregisterPop={setregisterPop} setLoginPop={setLoginPop}/>}
    </>
  );
};

export default Navbar;
