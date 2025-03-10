import React from "react";
import { Categories } from "../assets/mockData";

import HeroImage from "../assets/Images/hero-page.png";
const Home = () => {
  return (
    <div className="bg-white mt-2  px-4 md:px-16 lg:px-24 ">
      <div className="container mx-auto py-4 flex flex-col md:flex-row  space-x-2">
        <div className="w-full md:w-3/12">
          <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">
            SHOP BY CATEGORIES
          </div>
          <ul className="space-y-4 bg-grey-100 p-3 border">
            {Categories.map((cateory, index) => (
              <li key={index} className="flex items-center text-sm font-medium">
                <div className="w-2 h-2 border border-red-500 rounded-full  mr-2 "></div>
                {cateory}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative">
          <img src={HeroImage} alt="" className="h-full w-full" />
          <div className="absolute top-16 left-8">
            <p>this is it</p>
            <h2>Welcome To the Shop</h2>
            <p>products on products</p>
            <button>Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
