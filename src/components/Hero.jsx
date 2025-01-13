import React from "react";
import product from "../assets/product.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <main className="bg-sky-100 relative overflow-hidden h-full w-full">
      <div className="flex relative z-20 items-center overflow-hidden h-full">
        <div className="container mx-auto px-6 flex relative py-16">
          {/* Left Section */}
          <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
            <span className="w-20 h-2 bg-sky-600 mb-12"></span>
            <h1 className="font-bebas-neue uppercase text-5xl sm:text-8xl font-black flex flex-col leading-none text-gray-900">
              Experience
              <span className="text-5xl sm:text-7xl">True Wireless</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-700 mt-4">
              Elevate your audio experience with the Realme Wireless 3 Neckband. 
              Crystal-clear sound, long-lasting battery, and a comfortable fit 
              for all-day use.
            </p>
            <div className="flex mt-8">
              <a
                href="#"
                className="uppercase py-2 px-4 rounded-lg bg-sky-600 border-2 border-transparent text-white text-md mr-4 hover:bg-sky-500"
              >
                Buy Now
              </a>
              <a
                href="#"
                className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white text-md"
              ><Link to="/about"> Learn More</Link>
                
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative pl-12 ">
            <img
              src={product} // Replace with neckband image URL
              alt="Realme Wireless 3 Neckband"
              className="max-w-3xl md:max-w-3xl m-auto"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
