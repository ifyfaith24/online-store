import React from 'react';
import { NavLink } from 'react-router-dom';
import CartIcon from '../assets/Icons/Cart.png';

const Header = () => {
  return (
    <nav className='bg-[#1C1D1E] p-3'>
      <ul className='flex justify-between pl-5 pr-5 text-white font-bold'>
        <li className='hover:text-[#0ABAB5]'>
          <NavLink to="/home">TimbuCloudShop</NavLink>
        </li>
        <li className='flex justify-center items-center gap-2 '>
          <NavLink to="/cart" className="flex items-center gap-2 hover:text-[#0ABAB5]">
            <img src={CartIcon} alt="cart-outline" style={{ width: '24px', height: '24px' }} /> 
           <span className='hidden sm:block'>Cart</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
