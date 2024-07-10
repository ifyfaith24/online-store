import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import back from '../assets/Icons/back.png';
import New from '../assets/Icons/New.png';
import Mug1 from "../assets/Images/Mug1.png";
import DeleteIcon from '../assets/Icons/delete.png';

const products = [
  {
    id: 1,
    img: Mug1,
    title: "Classic AB mug",
    quantity: 1,
    price: "N7,499.99"
  },
];

const TableRow = ({ product }) => (
  <div className="border-b border-gray-300 p-3 flex flex-col sm:table-row sm:flex-row items-center sm:items-start sm:px-4">
    <div className="flex py-2">
      <img src={product.img} alt={product.title} className="w-[100px] h-[100px] sm:w-[100px] sm:h-[100px] mr-2" />
      <p className='text-base'>{product.title}</p>
    </div>
    
    <div className="flex py-2 flex-col align-top sm:table-cell sm:px-4 sm:text-center mb-4 sm:mb-0">
      <div className='border-gray-300  border-2 w-[100px] h-[30px] rounded text-center p-2 flex justify-between items-center mt-2 sm:mt-0'>
        <button className="mr-2">-</button>
        <span>{product.quantity}</span>
        <button className="ml-2">+</button>
      </div>
    </div>
    <div className="flex flex-col align-top py-2 sm:table-cell sm:px-4 mb-4 sm:mb-0">
      <p className='font-bold text-[#9C0A0A]'>{product.price}</p>
    </div>
    <div className="flex justify-end align-top py-2 items-center sm:table-cell sm:px-4">
      <img src={DeleteIcon} alt="delete icon" className="inline-block mr-2 cursor-pointer" />
    </div>
  </div>
);

const Cart = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  }
  return (
    <div className='max-w-screen-lg w-full mx-auto border-2 shadow-md font-manrope'>
      <Header />
      <div className='my-4 mx-8 flex justify-between items-center'>
        <div className='flex items-center mb-4'>
          <img src={back} alt="Nav-back"
          onClick={handleBackClick}
          className='mr-3 h-10 w-10' />
          <h1 className='text-xl font-bold'>Cart</h1>
        </div>
        <p className='font-bold'>{products.length} item{products.length > 1 ? 's' : ''}</p>
      </div>
      <div className='flex flex-col px-4 lg:flex-row'>
        <div className='lg:w-2/3'>
          <div className="hidden sm:block">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="border-b text-gray-400">
                  <th className="p-3 text-left border-gray-300">
                    <img src={New} alt="Product" className="inline-block mr-2 w-4 h-4" />
                    <span>PRODUCTS</span>
                  </th>
                  <th className="p-3 text-left border-gray-300">QUANTITY</th>
                  <th className="p-3 text-left border-gray-300">PRICE</th>
                  <th className="p-3 text-left">REMOVE</th>
                </tr>
              </thead>
              <tbody>
                {products.map(product => (
                  <TableRow key={product.id} product={product} />
                ))}
              </tbody>
            </table>
          </div>
          <div className="block sm:hidden">
            {products.map(product => (
              <div key={product.id} className="border-2 shadow-md border-gray-200 p-2 w-[355px] h-[120px] flex flex-col items-center justify-between">
                <div className="flex items-center w-full px-2">
                  <img src={product.img} alt={product.title} className="inline-block w-[80px] h-[90px] mr-4" />
                  <p className='text-base relative bottom-8'>{product.title}</p>
                </div>
                <div className="flex flex-col items-center w-full relative bottom-16">
                <p className='font-bold mb-1 text-[#9C0A0A]'>{product.price}</p>
                  <div className='border-gray-200 border-2 w-[100px] h-[30px] rounded ml-4 text-center p-2 flex justify-between items-center'>
                    <button className="mr-2">-</button>
                    <span>{product.quantity}</span>
                    <button className="ml-2">+</button>
                  </div>
                 
                </div>
                <div className="flex justify-end items-center w-full relative bottom-28">
                  <img src={DeleteIcon} alt="delete icon" className="inline-block mr-2 cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='lg:w-1/3 lg:ml-4 mt-10 lg:mt-0'>
          <div className='p-4 border-2 border-gray-200 shadow-md rounded-md'>
            <h1 className='text-lg font-bold border h-12 text-center rounded-md flex justify-center pt-2 bg-[#0ABAB5] mb-2'>Order Summary</h1>
            <p className='mb-2'>Enter promo code</p>
            <div className='flex mb-4'>
              <input type="text" placeholder='Promo code' className='flex-grow p-2 border rounded-md border-gray-200' />
              <button className='ml-2 p-2 bg-[#1C1D1E] rounded text-white'>Apply</button>
            </div>
            <div className='mb-2'>
              <p className='flex justify-between'>
                <span>Subtotal</span>
                <span>N7,999.99</span>
              </p>
            </div>
            <div className='mb-2'>
              <p className='flex justify-between'>
                <span>Shipping cost</span>
                <span>N2,000</span>
              </p>
            </div>
            <div className='mb-2'>
              <p className='flex justify-between'>
                <span>Discount</span>
                <span>N/A</span>
              </p>
            </div>
            <div className='font-bold'>
              <p className='flex justify-between'>
                <span>Total</span>
                <span>N9,999.98</span>
              </p>
            </div>
            <Link to={'/checkout'}>
              <button className='mt-4 w-full p-2 bg-[#1C1D1E]  hover:bg-gray-800 
              focus:outline-none focus:ring-2 focus:ring-gray-600 rounded-md text-white text-center'>Checkout</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
