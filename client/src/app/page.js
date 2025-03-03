"use client";
import React, { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";

import NavbarDesktop from "./components/navbar/navbarDesktop";
import NavbarMobile from "./components/navbar/navbarMobile";
import HeroSection from "./components/hero-section/heroSection";
import Card from "./components/cards/cards";
import AboutMe from "./components/aboutMe/AboutMe";
import Portfolio from "./components/portfolioSection/portfolio";
import Footer from "./components/footer/Footer";

import {
  descriptionFullstack,
  descriptionServices,
  descriptionsAdv,
} from "./texts";

const Index = () => {
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("up");
      if (heroSection) {
        const { top, bottom } = heroSection.getBoundingClientRect();
        setShowButton(bottom <= window.innerHeight && top >= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        <NotificationContainer />
      </div>
      <AnchorLink href="/up" className="absolute">
        <div
          className={
            showButton ? "ButtonUP -right-96 " : "buttonUP md:right-10 right-5 "
          }
        >
          <FaChevronUp className="text-white md:h-10 md:w-10 h-5 w-5" />
        </div>
      </AnchorLink>
      {/* nav bar and hero section */}
      <div className="relative md:mb-[25%] lg:mb-[12%]">
        <NavbarDesktop />
        <NavbarMobile />
        <HeroSection />
        {/* Cards of my experiance */}
        <div className="flex flex-col md:flex-row mx-[12%] gap-12 md:absolute top-[90%] my-20">
          <Card
            icon="/images/rating-cards/Professional.png"
            title="Professional"
            description={descriptionsAdv[0]}
          />
          <Card
            icon="/images/rating-cards/Fast.png"
            title="Fast"
            description={descriptionsAdv[1]}
          />
          <Card
            icon="/images/rating-cards/Communications.png"
            title="Communication"
            description={descriptionsAdv[2]}
          />
        </div>
      </div>
      <AboutMe />
      <Portfolio />
      {/* cards of Services */}
      <div
        className="flex flex-col md:flex-row mx-[12%] gap-12 my-24"
        id="services"
      >
        <Card
          icon="/images/Services/Devices.png"
          title="Desktop & Mobile Screens"
          description={descriptionServices[0]}
        />
        <Card
          icon="/images/Services/webInterface.png"
          title="Creating the website interface"
          description={descriptionFullstack[0]}
        />
        <Card
          icon="/images/Services/ServerWeb.png"
          title="Server web"
          description={descriptionServices[1]}
        />
      </div>
      {/* my ToolKit*/}
      <div className="flex flex-col justify-center items-center mx-[12%] gap-10 my-14 md:my-28">
      <div className="gap-5 flex flex-col md:w-1/2 justify-center items-center">
        <p className=" text-redOrange text-MobileHeader5 md:text-Header5">
          Workspace
        </p>
        <p className="text-MobileHeader2 md:text-Header2">My ToolKit</p>
      </div>
      <div className="md:flex justify-between w-full hidden">
        <img src="./images/toolkit/canva.png"/>
        <img src="./images/toolkit/tailwindcss.png"/>
        <img src="./images/toolkit/figma.png"/>
        <img src="./images/toolkit/nodejs.png"/>
        <img src="./images/toolkit/xd.png"/>
        <img src="./images/toolkit/git.png"/>
        <img src="./images/toolkit/react.png"/>
      </div>
      <div className="flex flex-col gap-7 md:hidden">
        <div className="flex gap-4 justify-center items-center">
        <img src="./images/toolkit/canva.png" className="max-h-14"/>
        <img src="./images/toolkit/figma.png" className="max-h-14"/>
        <img src="./images/toolkit/xd.png" className="max-h-14"/>
        </div>
        <div className="flex gap-4 justify-center items-center">
        <img src="./images/toolkit/tailwindcss.png" className="max-h-14"/>
        <img src="./images/toolkit/nodejs.png" className="max-h-14"/>
        <img src="./images/toolkit/git.png" className="max-h-14"/>
        <img src="./images/toolkit/react.png" className="max-h-14"/>
        </div>
      </div>
      </div>
      {/* footer */}
      <Footer />
    </>
  );
};

export default Index;
