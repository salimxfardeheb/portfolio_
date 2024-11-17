'use client'
import React from 'react'

import NavbarDesktop from "../components/navbar/navbarDesktop";
import NavbarMobile from "../components/navbar/navbarMobile";
import PortfolioCard from '../components/portfolioSection/portfolioCard';
import Footer from "../components/footer/Footer";


const Portfolio = () => {
  return (
    <div>
      <NavbarDesktop/>
      <NavbarMobile/>
      <PortfolioCard/>
      <Footer />
    </div>
  )
}

export default Portfolio
