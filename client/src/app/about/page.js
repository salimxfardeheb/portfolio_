"use client";
import React from "react";

import NavbarDesktop from "../components/navbar/navbarDesktop";
import AboutMe from "../components/aboutMe/AboutMe";
import NavbarMobile from "../components/navbar/navbarMobile";
import Footer from "../components/footer/Footer";

const page = () => {
  return (
    <div className="bg-black">
      <NavbarDesktop />
      <NavbarMobile />
      <div className="py-32"><AboutMe text="text-white"/></div>
      <Footer />
    </div>
  );
};

export default page;
