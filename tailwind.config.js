/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "rgb(83, 120, 149)",
      },
    },
  },
  plugins: [],
};
