import React from 'react';
import { Mugs } from '../Components/MugsData';
import star from "../assets/Icons/Vector.png";
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Home = () => {
    const [items, setItems] = React.useState(Mugs);

    return (
        <div className='max-w-screen-lg w-full border-2 border-gray-200 shadow-md mx-auto font-manrope'>
            <Header/>
            <h1 className='text-2xl font-bold text-start px-4 mt-8 mb-4'>Products 
                <span className='text-gray-300'> ({items.length})</span></h1>
            <section className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 gap-6'>
                {items.map((item) => {
                    const { id, img, title, price, rate } = item;
                    return (
                        <div key={id} className='border border-gray-200 shadow-md rounded-md p-4'>
                            <img src={img} alt={title} className='w-full h-auto rounded-sm mb-2'/>
                            <p className='text-base sm:text-lg font-semibold mb-1 text-wrap'>{title}</p>
                            <p className='text-[#9C0A0A] text-lg mb-2'>N{price}</p>
                            <div className='flex items-center mb-2 '>
                                <img src={star} alt="star icon" className='w-4 h-4 mr-1' />
                                <p>{rate}</p>
                            </div>
                            <Link to='/cart'>
                                <button className='bg-[#1C1D1E] w-full h-[40px] text-white flex justify-center items-center
                                 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 py-1 px-4 rounded-md text-sm'>
                                    Add to Cart
                                </button>
                            </Link>
                        </div>
                    );
                })}
            </section>
            <Footer />
        </div>
    );
};

export default Home;
