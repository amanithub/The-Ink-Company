import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={newArrOne}
            productName="Samsung Dex Printer"
            price="44000.00"
            color="Black"
            badge={true}
            des="Efficient and high-quality printing with the latest technology from Samsung."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={newArrTwo}
            productName="Samsung Dex Printer 1050"
            price="12500.00"
            color="Black"
            badge={true}
            des="Efficient and high-quality printing with the latest technology from Samsung."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={newArrThree}
            productName="Samsung Dex Printer 4560"
            price="8000.00"
            color="All in One"
            badge={true}
            des="Efficient and high-quality printing with the latest technology from Samsung."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={newArrFour}
            productName="Samsung Dex Printer 8870"
            price="6000.00"
            color="All in One"
            badge={false}
            des="Efficient and high-quality printing with the latest technology from Samsung."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img={newArrTwo}
            productName="Samsung Dex Printer 6541"
            price="10000.00"
            color="All in One"
            badge={false}
            des="Efficient and high-quality printing with the latest technology from Samsung."
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;
