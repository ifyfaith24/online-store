import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Mug1 from "../assets/Images/Mug1.png";
import paypal from "../assets/Icons/paypal.png";
import master from "../assets/Icons/master.png";
import visa from "../assets/Icons/visa.png";
import nameIcon from "../assets/Icons/name.png";
import cardIcon from "../assets/Icons/card.png";
import back from '../assets/Icons/back.png';
import signIcon from "../assets/Icons/sign.png";

const products = [
  {
    id: 1,
    img: Mug1,
    title: "Classic AB mug",
    price: "N7,499.99",
  },
];

const Checkout = () => {
    const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  }
  return (
    <div className="max-w-screen-lg w-full mx-auto border-2 shadow-md font-manrope">
      <Header />
      <div className='flex items-center mb-8 mt-10'>
          <img src={back} alt="Nav-back"
          onClick={handleBackClick}
           className='mr-3 w-10 h-10' />
          <h1 className='text-xl font-bold'>Checkout</h1>
        </div>
      <div className="grid lg:grid-cols-3 ml-4 gap-2">
        <form className="flex flex-col col-span-3 lg:col-span-1 space-y-4 w-full max-w-sm mx-auto lg:mx-0">
          <h1 className="font-bold mt-6">Payment Method</h1>
          <p>Choose your preferred payment method</p>
          <div className="flex space-x-2">
            <label className="flex items-center space-x-2">
              <input type="radio" name="payment" className="form-radio" />
              <img src={visa} alt="Visa card" className="w-12 h-8" />
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="payment" className="form-radio " />
              <img src={master} alt="Master card" className="w-12 h-8 " />
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="payment" className="form-radio" />
              <img src={paypal} alt="Paypal" className="w-12 h-8" />
            </label>
          </div>
          <div className="flex flex-col space-y-2">
            <h1 className="font-bold mt-6">Payment Details</h1>
            <label>Name on card</label>
            <div className="flex items-center border border-gray-300 p-2 rounded">
              <img src={nameIcon} alt="name" className="mr-2" />
              <input
                type="text"
                placeholder="John Johnson"
                className="flex-grow outline-none"
              />
            </div>
            <label>Card number</label>
            <div className="flex items-center border border-gray-300 p-2 rounded">
              <img src={cardIcon} alt="card" className="mr-2" />
              <input
                type=" cardnumber"
                placeholder="*** *** *** 3434"
                className="flex-grow outline-none"
              />
            </div>
            <div className="flex space-x-3">
              <div className="flex flex-col space-y-2 w-1/2">
                <label>Expiry date</label>
                <div className="flex items-center border border-gray-300 p-2 rounded">
                  <input type="date" className="flex-shrink outline-none" />
                </div>
              </div>
              <div className="flex flex-col space-y-2 w-1/2">
                <label>CVV</label>
                <div className="flex items-center border border-gray-300 p-2 rounded">
                  <img src={signIcon} alt="sign" className="mr-2" />
                  <input
                    type="cvv number"
                    placeholder="***"
                    className="flex-grow outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <h1 className="font-bold mt-6">Shipping Address</h1>
            <label>Name</label>
            <input
              type="text"
              className="border border-gray-300 p-2 rounded outline-none"
            />
            <label>Address</label>
            <input
              type="text"
              className="border border-gray-300 p-2 rounded outline-none"
            />
            <label>Phone number</label>
            <input
              type="phone num"
              className="border border-gray-300 p-2 rounded outline-none"
            />
            <div className="flex space-x-4 max-w-sm gap-10">
              <div className="flex flex-col space-y-2 w-2/5">
                <label>City</label>
                <input
                  type="text"
                  className="border border-gray-300 p-2 rounded outline-none"
                />
              </div>
              <div className="flex flex-col space-y-2 w-2/5">
                <label>State</label>
                <input
                  type="text"
                  className="border border-gray-300 p-2 rounded outline-none"
                />
              </div>
            </div>
            <label>Zip</label>
            <input
              type="text"
              className="border border-gray-300 p-2 rounded outline-none"
            />
          </div>
          <Link to={"/confirm"}>
            <button className="mt-4 w-full p-2 bg-[#1C1D1E]  hover:bg-gray-800 
            focus:outline-none focus:ring-2 focus:ring-gray-600 rounded-md text-white text-center">
              Pay Now
            </button>
          </Link>
        </form>
        <div className="lg:w-full lg:ml-20 mt-4 lg:mt-0 col-span-3 lg:col-span-1">
          <div className="p-4 border-2 border-gray-200 shadow-md rounded-md ">
            <h1 className="text-lg font-bold border h-12 text-center rounded-md flex justify-center pt-2 bg-[#0ABAB5] mb-2">
              Order Summary
            </h1>
            <p className="mb-2">Enter promo code</p>
            <div className="flex mb-4">
              <input
                type="text"
                className="flex-grow p-2 border border-gray-200 shadow-md"
              />
              <button className="ml-2 p-2 bg-[#1C1D1E] rounded text-white">
                Apply
              </button>
            </div>
            <div className="mb-2">
              <p className="flex justify-between">
                <span>Subtotal</span>
                <span>N7,999.99</span>
              </p>
            </div>
            <div className="mb-2">
              <p className="flex justify-between">
                <span>Shipping cost</span>
                <span>N2,000</span>
              </p>
            </div>
            <div className="mb-2">
              <p className="flex justify-between">
                <span>Discount</span>
                <span>N/A</span>
              </p>
            </div>
            <div className="font-bold">
              <p className="flex justify-between">
                <span>Total</span>
                <span>N9,999.98</span>
              </p>
            </div>
           
          </div>
        </div>
        <div className="w-[228px] lg:ml-20 col-span-3 border-2 shadow-md border-gray-200 h-32 p-4 lg:col-span-1">
          {products.map((product) => (
            <div key={product.id} className="flex">
              <img
                src={product.img}
                alt={product.title}
                className="w-[100px] h-[100px]"
              />
              <div className="pl-2">
                <p>{product.title}</p>
                <p className="text-[#9C0A0A] text-lg">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
