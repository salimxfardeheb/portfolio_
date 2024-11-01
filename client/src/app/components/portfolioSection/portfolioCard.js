import React from "react";
import axios from "axios";

import { GrFormNextLink } from "react-icons/gr";
import { motion as m } from "framer-motion";
import handleclick from "./handleclick";


const portfolioCard = () => {
  const getPortfolio = () => {
    axios
      .get("http://localhost:3001/portfolio")
      .then((response) => {
        console.log("succes !");
        return response.data;
    });
  };

const ItemsPortfolio = getPortfolio();

  return (
    <div className="flex flex-col gap-24 snap-mandatory snap-y scroll-p-12">
      {ItemsPortfolio.map((data) => (
        <div
          key={data.id}
          className={
            data.id % 2 === 0
              ? `flex flex-col md:flex-row-reverse items-center justify-between gap-6 snap-always snap-center`
              : "flex flex-col md:flex-row items-center justify-between gap-6 snap-always snap-center"
          }
        >
          {/* image */}
          <div>
            <img
              src={data.image}
              alt=""
              className=" w-[566px] object-contain"
            />
          </div>
          {/* description */}
          <m.div
            className="md:w-1/2 flex flex-col gap-6 items-start"
            initial={{ opacity: 0, translateY: 100, scale: 0.95 }}
            whileInView={{ opacity: 1, translateY: 0, scale: 1 }}
            transition={{ duration: 0.75 }}
          >
            <p className=" text-Header3">{data.title}</p>
            <p className="text-p text-nevada">{data.description}</p>
            <button
              className="flex items-center cursor-pointer hover:text-redOrange text-Header5 hover:scale-105 duration-200"
              onClick={handleclick}
            >
              Learn More
              <GrFormNextLink />
            </button>
          </m.div>
        </div>
      ))}
    </div>
  );
};

export default portfolioCard;
