import React, { useContext, useState } from "react";
import olx from "../assets/olx.png";
import lens from "../assets/lens.png";
import arrow from "../assets/arrow.png";
import Login from "./Login";
import Signup from "./Signup";
import { IoSearch } from "react-icons/io5";
import Sell from "./Sell";
import {AuthContext, FirebaseContext} from '../../src/store/Context'
import { toast } from "react-toastify";
import './Navbar.css'

const Navbar = () => {
  const {user} = useContext(AuthContext)
  const {auth} = useContext(FirebaseContext)
  const [loginPop, setLoginPop] = useState(false);
  const [registerPop, setregisterPop] = useState(false);
  const [sell, setSell] = useState(false);
  return (
    <>
      <div className="flex py-4 px-2 justify-center bg-gray-100 shadow-md mb-1">
        <img
          src={olx}
          alt="olx-logo"
          className="w-11 h-9 object-contain my-auto"
        />
        <div className="flex border-2 rounded-md border-spacing-1 p-2 w-64  border-black ml-5">
          <img src={lens} alt="lens-logo" className="w-6 h-5 mt-1" />
          <input
            placeholder="Location"
            className="ml-2 w-full outline-none bg-gray-100"
          />
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
          <h1 className="font-bold text-lg">{user ? user.displayName : 'Login'}</h1>

        </div>

        <div
          className="flex h-12 p-3  cursor-pointer "
        >
          {user && <h1 onClick={() => {
            auth.signOut()
            toast.success("User Loggout")
          }} className="font-bold text-md">Logout</h1>}

        </div>
          

        {/* <div className=' flex   cursor-pointer ml-5 w-auto rounded-full border border-yellow-500'> */}
        <div
          onClick={() => setSell(!sell)}
          className="sell-button right-0 font-bold text-sm rounded-full px-4 py-3 border flex cursor-pointer border-yellow-500 my-auto"
        >
          +SELL
        </div>
        {/* </div> */}
      </div>
      {/* second nav */}
      <div className="bg-white shadow-md w-full text-sm">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-center h-16">
            <ul className="flex items-center space-x-5">
              <li>
                <a href="#" className="text-gray-700 hover:text-black">
                  Cars
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-black">
                  Motorcycles
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-black">
                  Mobile Phones
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-black">
                  For Sale: Houses & Apartments
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-black">
                  Scooters
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-black">
                  Commercial & Other Vehicles
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-black">
                  For Rent: Houses & Apartments
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {loginPop && (
        <Login setregisterPop={setregisterPop} setLoginPop={setLoginPop} />
      )}
      {registerPop && (
        <Signup setregisterPop={setregisterPop} setLoginPop={setLoginPop} />
      )}
      {sell && <Sell setSell={setSell} />}
    </>
  );
};

export default Navbar;
