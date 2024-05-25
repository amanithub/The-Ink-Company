import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
        Welcome to <span className="text-primeColor font-semibold text-lg">The Ink Company</span>{" "}
          your premier destination for top-quality printers and accessories. As one of the world’s leading brands, we pride ourselves on celebrating the essence of classic, world-class aesthetics. Our store offers a diverse range of products, including top brands like Epson, HP, and more, ensuring you find the perfect solution for all your printing needs. Experience exceptional performance and timeless design with The Ink Company




        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;