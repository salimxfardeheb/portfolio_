const menuItems = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Portfolio",
    link: "/portfolio",
    items: [
      {
        id: 1,
        name: "Graphic design",
        link: "/portfolio/graphicdesign",
      },
      {
        id: 2,
        name: "Full-Stack developer",
        link: "/portfolio/fullstack",
      },
    ],
  },
  {
    id: 4,
    name: "Services",
    link: "/services",
  },
];

export default menuItems;
