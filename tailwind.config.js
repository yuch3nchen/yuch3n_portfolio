/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "marquee-move": {
          to: {
            transform: "translateX(-33.3%)",
          },
        },
      },
      animation: {
        "marquee-move": "marquee-move 10s linear infinite",
      },
    },
  },
  plugins: [],
};
