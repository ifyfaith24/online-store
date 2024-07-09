import React from "react";
import footer from '../assets/Images/footer.png';

const Footer = () => {
    return (
        <div className="bg-[#EDECEC] p-10 mt-10">
            <div className="flex flex-col sm:flex-row justify-between sm:items-start sm:space-y-0 sm:space-x-4">
                <div className="mb-4 sm:mb-0">
                    <h2 className="font-bold text-base">Address</h2>
                    <p>
                        16, Clementine Street <br />
                        NW Bariga, <br />
                        Lagos Nigeria
                    </p>
                </div>
                <div className="mb-4 sm:mb-0">
                    <h2 className="font-bold text-base">Contact</h2>
                    <p>support@timbucloudshop.com</p>
                    <p>help@timbucloudshop.com</p>
                    <p>01-234567, 01-99952</p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-10">
                <img src={footer} alt="TimbuCloudShop Logo" className="w-2/6 rounded-full mb-3" />
                <h1 className="font-bold text-base mb-5">TimbuCloudShop</h1>
                <p className=" text-center text-sm sm:w-full">
                    Explore our curated collection of premium kitchen utensils, cookware, kitchen towels and gadgets. From precision knives 
                    to stylish coffee makers, we’ve got everything you need to elevate your cooking experience.
                </p>
                <p className="mt-10 text-sm">&copy; 2024 Timbu Company - All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;
