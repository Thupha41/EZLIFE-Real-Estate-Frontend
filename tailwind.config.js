/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#02254B",
        secondary: "#E4E5DF",
        tertiary: "#9C8321",
      },
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
    textShadow: {
      custom: "1px 1px 20px rgba(41, 41, 41, 0.5)",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "3rem",
      },
    },
  },
  plugins: [],
};
