/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        head: "Teko",
      },
      backgroundColor: {
        back: "#262626",
        surface: "#121212",
        owlPink: "#404040",
        whitish: "#E3E2E2",
        owlpinkLight: "#FF7597",
        darkRose: "#F33A6A ",
      },
      colors: {
        whitish: "#E3E2E2",
        darkRose: "#F33A6A ",
        lightRose: "#FF7D56",
      },
      borderColor: {
        blackish: "#595959",
      },
    },
  },
  plugins: [],
};

