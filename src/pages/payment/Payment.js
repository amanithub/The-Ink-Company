import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Payment = () => {
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Payment gateway" />
      <div className="pb-10">
        <p>Your Order is Processed through COD for the time being and We're working on integrating Payment solutions</p>
        <p>Thank You For your Cooperation.</p>
        <Link to="/">
          <button className="w-52 h-10 bg-primeColor text-white text-lg mt-4 hover:bg-black duration-300">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Payment;
