import React, { useState, useContext } from "react";
import olx from "../assets/olx.png";
import { FirebaseError } from "firebase/app";
import { FirebaseContext } from '../store/Context.jsx';
import { auth, db } from '/src/firebase/config.js';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";


const Signup = ({ setregisterPop, setLoginPop }) => {
  const history = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");

  const { app } = useContext(FirebaseContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(username.trim()!='' && email.trim()!='' && password.trim()!='' && number.trim()!='' && number.length == 10 && username.length > 3 && password.length > 5){
      createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        return updateProfile(result.user, { displayName: username }).then(() => {
          const firestore = getFirestore(app); // Get Firestore instance
          addDoc(collection(firestore, 'users'), { // Add user data to 'users' collection
            id: result.user.uid,
            username: username,
            number: number
          }).then(() => {
            toast.success('user registered successfully')
            setregisterPop(false)
            setLoginPop(true)
          })
        });
      })
      .then(() => {
        console.log('User profile updated');
      })
      .catch((error) => {
        console.error('Error creating user:', error);
      });
    }else{
      toast.error('Check your given credentials')
    }
  }

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm">
            <div className="absolute top-0 right-0 p-2">
              <button
                onClick={() => {
                  setregisterPop(false);
                }}
                className="text-black text-[250x] py-1 px-3"
              >
                X
              </button>
            </div>
            <div className="bg-white px-4 pb-4 pt-5 sm:p-11 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <div className="mt-2">
                    <div className="flex justify-center items-center">
                      <img src={olx} alt="olx" className="h-8 w-15" />
                    </div>
                    <h1 className="text-center font-bold text-lg mt-5 text-black-500">
                      Enter your details here
                    </h1>
                    <div className="flex flex-col items-center justify-center">
                      <form onSubmit={handleSubmit} className="bg-white p-6 w-full max-w-sm">
                        <div className="mb-4">
                          <label
                            htmlFor="username"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Username
                          </label>
                          <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Enter your username"
                          />
                        </div>

                        <div className="mb-4">
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Enter your email"
                          />
                        </div>

                        <div className="mb-4">
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Phone
                          </label>
                          <input
                            type="tel"
                            id="tel"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Enter your phone"
                          />
                        </div>

                        <div className="mb-4">
                          <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Password
                          </label>
                          <input
                            type="text"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Enter your password"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-black border-4 text-white hover:text-black py-2 px-4 rounded-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                        >
                          Signup
                        </button>

                        <p className="text-center text-sm mt-4 text-gray-600">
                          Do you have account?
                          <span
                            onClick={() => {
                              setLoginPop(true);
                              setregisterPop(false);
                            }}
                            className="text-blue-500 hover:underline ml-1 cursor-pointer"
                          >
                            Sign In
                          </span>
                        </p>

                        <p className="text-center text-[10px] mt-4 text-gray-500">
                          Your email is never shared with external parties nor
                          do we use it to spam you in any way.
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
