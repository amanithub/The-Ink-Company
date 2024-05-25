import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="HP Printer 35K9"
          price="35000.00"
          color="Blank and White"
          badge={true}
          des="Efficient and high-quality printing with the latest technology from HP."
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="New HP G3770"
          price="18000.00"
          color="Gray"
          badge={false}
          des="Efficient and high-quality printing with the latest technology from HP."
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="Printer 1050"
          price="25000.00"
          color="Mixed"
          badge={true}
          des="Efficient and high-quality printing with the latest technology from HP."
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="HP Printer Deskjet"
          price="22000.00"
          color="Black"
          badge={false}
          des="Efficient and high-quality printing with the latest technology from HP."
        />
      </div>
    </div>
  );
};

export default BestSellers;
