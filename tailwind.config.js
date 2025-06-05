/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
        900: "#0f172a", // dark page background
        800: "#1e293b", // sections
        700: "#334155", // cards
        600: "#475569", // hover states
        },

        accent: {
        purple: "#0EA5E9",  // Tailwind's sky-500
        violet: "#0284C7",  // sky-600 for hover
        indigo: "#0369A1",  // sky-700 for active/deep
        pink: "#38BDF8",    // optional soft accent
        },

        neutral: {
          950: "#0A0711", // Darkest
          900: "#1A1625",
          800: "#2D2739",
          700: "#4A4458",
          400: "#A8A3B3",
          300: "#D4D0DC",
          200: "#E6E3EC",
          100: "#F4F2F7",
        },
      },
    },
  },
  plugins: [],
}

