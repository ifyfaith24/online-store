import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Check from "../assets/Icons/check.png";

const Confirm = () => {
  return (
    <div className="max-w-screen-lg w-full mx-auto box-border border-2 border-gray-200 font-manrope">
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
        <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-3/6 border-2 p-8 border-gray-200 shadow-md
         rounded-md flex flex-col justify-center items-center text-center">
          <img src={Check} alt="Check icon" className="w-40 h-40 mb-6" />
          <h2 className="text-2xl font-bold mb-4">Payment successful!</h2>
          <p className="mb-4">You have successfully placed your order</p>
          <p className="mb-6 text-gray-300">View tracking details</p>
          <Link to={"/home"}>
            <button className="mt-4 w-56 sm:w-96 h-[50px] text-nowrap bg-[#1C1D1E] 
            hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 rounded-md text-white text-center">
              Back to shop
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Confirm;
