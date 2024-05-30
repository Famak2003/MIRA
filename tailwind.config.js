/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-red": "#D71E1E",
        "custom-black": "#202020",
        "charcoal-gray": "#292929",
        "light-gray": "#878787",
        "medium-gray": "#302F2F",
        "light-medium-gray": "#353434",
        "custom-white": "#f4f4f4",
      },
      screens: {
        mobile: "431px",
        smobile: "300px",
      },
    },
  },
  plugins: [],
};
