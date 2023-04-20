/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translate3d(0,100%,0)",
          },
          "100%": {
            opacity: "1",
            transform: "none",
          },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.5s ease-in-out",
      },
    },
  },
  plugins: [require("daisyui")],
};
