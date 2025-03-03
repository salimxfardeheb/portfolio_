import React, { useState, useRef, useEffect } from "react";
import menuItems from "./menuItems";
import Link from "next/link";

const HamburgerButtonItems = () => {
  const [isOpen, setIsOpen] = useState(false); // Pour le menu hamburger
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false); // Pour le sous-menu Portfolio
  const portfolioRef = useRef(null); // Référence pour détecter les clics à l'extérieur

  // Fonction pour basculer le sous-menu Portfolio
  const togglePortfolioMenu = () => {
    setIsPortfolioOpen(!isPortfolioOpen);
  };

  // Fermer le sous-menu si on clique à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (portfolioRef.current && !portfolioRef.current.contains(event.target)) {
        setIsPortfolioOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="border-2 border-white h-fit flex p-2 rounded-md">
        {/* Hamburger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden text-white focus:outline-none transition-transform ${
            isOpen ? "transform rotate-90" : ""
          }`}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              /* Icône de fermeture */
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              /* Icône d'ouverture */
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-16 6h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Menu Items */}
      <div
        className={
          isOpen
            ? "menuItems top-28 scale-100"
            : "menuItems -top-96 scale-0"
        }
      >
        <ul className="flex flex-col items-center space-y-4">
          {menuItems.map((data) => (
            <li key={data.id} ref={data.name === "Portfolio" ? portfolioRef : null}>
              {/* Gestion du clic pour Portfolio */}
              {data.name === "Portfolio" ? (
                <div className="relative">
                  <button
                    onClick={togglePortfolioMenu}
                    className="lg:text-Header5 text-p focus:outline-none"
                  >
                    {data.name}
                  </button>
                  {/* Sous-menu pour Portfolio */}
                  {isPortfolioOpen && (
                    <ul className="my-4 pl-4 space-y-4">
                      {data.items.map((subItem) => (
                        <li key={subItem.id}>
                          <Link
                            href={subItem.link}
                            className="block text-p"
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link href={data.link} className="lg:text-Header5 text-p">
                  {data.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default HamburgerButtonItems;