/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0B1F3B",
        primary: "#0F766E",
        secondary: "#F59E0B",
        light: "#F8FAFC",
        muted: "#CBD5E1"
      }
    }
  },
  plugins: []
};
