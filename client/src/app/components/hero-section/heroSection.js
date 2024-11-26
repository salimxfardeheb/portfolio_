import React from "react";
import { TypeAnimation } from "react-type-animation";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Link from "next/link";

const HeroSection = () => {
  return (
    // background image
    <div className="bg-hero h-screen bg-cover bg-center flex flex-col gap-12 justify-center items-center">
      {/* short description */}
      <div className="flex flex-col items-center text-white gap-2 text-center mx-[12%] md:mx-[22%]">
        <span className="text-MobileHeader4 md:text-Header4">I'm </span>
        <span className=" text-MobileHeader2 md:text-Header2">
          Salim FARDEHEB
        </span>
        <span className=" text-MobileHeader3 md:text-Header3">
          <TypeAnimation
            sequence={[
              "A designer specializing in graphics for both web and mobile platforms.",
              "Fullstack web developper with Fast and modern tools. "
            ]}
            wrapper="span"
            speed={25}
            repeat={0}
          />
        </span>
      </div>
      {/* CTA Button (see my works) */}
      <div>
        <Link href="/portfolio">
          <button className="px-9 py-5 text-white text-MobileHeader4  border-2 hover:bg-redOrange hover:scale-105 duration-200">
            See My Works
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
