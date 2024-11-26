import React from "react";
import Link from "next/link";

const Myworks = () => {
  return (
    <div
      className="my-[100px] mx-[12%] flex flex-col justify-center items-center gap-12"
      id="portfolio"
    >
      <div className="gap-5 flex flex-col md:w-1/2 justify-center items-center">
        <p className=" text-redOrange text-MobileHeader5 md:text-Header5">
          Case Studies
        </p>
        <p className="text-MobileHeader2 md:text-Header2">My Portfolio</p>
      </div>
      <div className="flex flex-col mx-auto justify-center items-center gap-12">
        <div>
          <img
            src="/images/portfolioGroup.png"
            alt="About Me Cover"
            className="md:w-[600px] w-[313px] object-contain"
          />
        </div>
        <div>
          <p className="md:text-Header3 text-MobileHeader3 text-center">
            Discover each project in detail by clicking on the button below.
          </p>
        </div>
        <div>
          <Link href="/portfolio">
            <button className="px-9 py-5 text-black hover:text-white text-MobileHeader4  border-2 hover:bg-redOrange hover:scale-105 duration-200">
              See My Works
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Myworks;
