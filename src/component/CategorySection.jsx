import React from "react";
import ManCetegory from "../assets/Images/man.png";
import WomanCetegory from "../assets/Images/woman.png";
import KidCetegory from "../assets/Images/kid.png";

const categories = [
  {
    title: "Men",
    imageUrl: ManCetegory,
  },
  {
    title: "Women",
    imageUrl: WomanCetegory,
  },
  {
    title: "Kids",
    imageUrl: KidCetegory,
  },
];

const CategorySection = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6  ">
      {categories.map((category, index) => (
        <div
          key={index}
          className="relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer hover:shadow-lg hover:brightness-110"
        >
          <img
            src={category.imageUrl}
            alt={category.title}
            className="w-full h-full object-cover rounded-lg shadow-md "
          />
          <div className="absolute top-20 left-12">
            <p className="text-xl font-bold">{category.title}</p>
            <p className="text-grey-600">view all</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
