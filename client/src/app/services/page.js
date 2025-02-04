"use client";
import React from "react";

import NavbarDesktop from "../components/navbar/navbarDesktop";
import NavbarMobile from "../components/navbar/navbarMobile";
import Card from "../components/cards/cards";
import Footer from "../components/footer/Footer";

import { descriptionServices, descriptionFullstack } from "../texts";

const page = () => {
  return (
    <div className="bg-black">
      <NavbarDesktop />
      <NavbarMobile />
      <div className="flex flex-col justify-center items-center py-48 gap-6">
        <p className="text-redOrange md:text-Header5 text-MobileHeader5">services</p>
        <div className="flex flex-col justify-center items-center">
        <p className="services_text"><span>as</span>WEB DESIGNER</p>
        {/* cards of Services */}
        <div
          className="flex flex-col md:flex-row mx-[12%] gap-12 my-20"
          id="services"
        >
          <Card
            icon="/images/Services/Devices.png"
            title="Desktop & Mobile Screens"
            description={descriptionServices[0]}
          />
          <Card
            icon="/images/Services/designSystem.png"
            title="Design System"
            description={descriptionServices[1]}
          />
          <Card
            icon="/images/Services/Figma.png"
            title="Figma & adobe XD Prototype"
            description={descriptionServices[2]}
          />
        </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <p className="services_text"><span>as</span>FULLSTACK DEVLOPPER</p>
        {/* cards of Services */}
        <div
          className="flex flex-col md:flex-row mx-[12%] gap-12 my-20"
          id="services"
        >
          <Card
            icon="/images/Services/webInterface.png"
            title="Creating website interfece"
            description={descriptionFullstack[0]}
          />
          <Card
            icon="/images/Services/ServerWeb.png"
            title="Server web"
            description={descriptionFullstack[1]}
          />
          <Card
            icon="/images/Services/database.png"
            title="Database optimized"
            description={descriptionFullstack[2]}
          />
        </div>
        </div>

      <Footer />
    </div>
  );
};

export default page;
