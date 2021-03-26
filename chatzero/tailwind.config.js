module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      mobile: "320px",
      tablet: "640px",
      desktop: "992px",
    },
    extend: {
      minWidth: {
        0: "0",
        "1/10": "10%",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
        side: "300px",
      },
      height: {
        "1/10": "10%",
        "9/10": "90%",
        icon: "50px",
      },
      width: {
        icon: "50px",
        "9/10": "90%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
