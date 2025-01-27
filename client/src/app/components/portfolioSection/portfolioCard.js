import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion as m } from "framer-motion";

const PortfolioCard = () => {
  const [itemsPortfolio, setItemsPortfolio] = useState([]);

  useEffect(() => {
    const getPortfolio = async () => {
      try {
        const response = await axios.get("https://main--salimsportfolio.netlify.app/portfolio");
        console.log("Succès !");
        setItemsPortfolio(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    getPortfolio();
  }, []);

  return (
    <div className="flex flex-col gap-24 snap-mandatory snap-y scroll-p-12 bg-black md:py-56 py-28 items-center">
      <div className="gap-5 flex flex-col md:w-1/2 justify-center items-center">
        <p className=" text-redOrange text-MobileHeader5 md:text-Header5">
          Case Studies
        </p>
        <p className="text-MobileHeader2 md:text-Header2 text-white">My Portfolio</p>
      </div>
      {itemsPortfolio.map((data) => (
        <div
          key={data.id}
          className={
            data.id % 2 === 0
              ? `flex flex-col mx-[12%] bg-white rounded-3xl md:p-16 p-8 md:flex-row-reverse items-center justify-between gap-6 snap-always snap-center`
              : "flex flex-col mx-[12%] bg-white rounded-3xl md:p-16 p-8 md:flex-row items-center justify-between gap-6 snap-always snap-center"
          }
        >
          {/* image */}
          <div className="relative">
            <m.img
              src={data.image}
              alt={data.title}
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
          </m.div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioCard;
