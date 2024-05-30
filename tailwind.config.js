/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Raleway", sans-serif'],
    },
    extend: {
      animation: {
        fade: "fadeIn 200ms ease-in-out forwards",
      },

      keyframes: () => ({
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      }),
    },
  },
  plugins: [],
};
