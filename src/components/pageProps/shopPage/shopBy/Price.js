import React from "react";
import NavTitle from "./NavTitle";

const Price = () => {
  const priceList = [
    {
      _id: 950,
      priceOne: 400.0,
      priceTwo: 1000.0,
    },
    {
      _id: 951,
      priceOne: 1001.0,
      priceTwo: 5000.0,
    },
    {
      _id: 952,
      priceOne: 5001.0,
      priceTwo: 20000.0,
    },
    {
      _id: 953,
      priceOne: 20001.0,
      priceTwo: 50000.99,
    },
    {
      _id: 954,
      priceOne: 50001.0,
      priceTwo: 100000.99,
    },
    // {
    //   _id: 955,
    //   priceOne: 600.0,
    //   priceTwo: 1000.0,
    // },
    // {
    //   _id: 956,
    //   priceOne:1001.0,
    //   priceTwo:100000,
    // }
  ];
  return (
    <div className="cursor-pointer">
      <NavTitle title="Shop by Price" icons={false} />
      <div className="font-titleFont">
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
          {priceList.map((item) => (
            <li
              key={item._id}
              className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300"
            >
              ₹{item.priceOne.toFixed(2)} - ₹{item.priceTwo.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Price;
