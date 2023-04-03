module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      first: "Poppins",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "30px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1170px",
    },
    extend: {
      colors: {
        main: "#CAFF12",
        light: "#BDBDBD",
        accent: "#FF7235",
        accentHover: "#e05216",
        grey: "#F5F5F5",
      },
      backgroundImage: {
        site: "url('/public/images/bg.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
