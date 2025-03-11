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
    <div>
      {categories.map((category, index) => (
        <div key={index}>
          <img src={category.imageUrl} alt={category.title} />{" "}
          {/* Corrected key */}
          <div>
            <p>{category.title}</p>
            <p>view all</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
