/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      lg: "1290px",
      md: "900px",
      sm: "600px",
    },
    colors: {
      redOrange: "#FF302F",
      nevada: "#676869",
      white: "#FFFFFF",
      black: "#000000",
    },
    fontFamily: {
      poppins: ["Poppins"],
    },
    fontSize: {
      // Desktop
      Header1: ["55px", { fontWeight: "800" }],
      Header2: ["45px", { fontWeight: "800" }],
      Header3: ["35px", { fontWeight: "800" }],
      Header4: ["25px", { fontWeight: "500" }],
      Header5: ["18px", { fontWeight: "300" }],
      // Mobile
      MobileHeader1: ["45px", { fontWeight: "800" }],
      MobileHeader2: ["35px", { fontWeight: "800" }],
      MobileHeader3: ["25px", { fontWeight: "800" }],
      MobileHeader4: ["18px", { fontWeight: "500" }],
      MobileHeader5: ["16px", { fontWeight: "300" }],

      //text
      p: ["16px", { fontWeight: "400" }],
    },


    extend: {
      backgroundImage: {
        hero: "url('/images/Herosection.png')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
