/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Mont-serrat", "sans-serif"]
      },
      
      colors: {
        bodyColor: "#36454F",
        lightText: "#c4cfde",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "#ff014f,"
      },

      boxShadow: {
        shadowOne: "5px 5px 3px #1c1e22, -5px -5px 3px #262a2e",
      },
      textColor: {
        designColor:"#f39908"
      },
    },
  },
  plugins: [],
}

