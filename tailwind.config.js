/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-ivory": "#F7F6F1",
        primary: {
          50: "#fff7ed",
          100: "#f8dad7",
          200: "#f0b4af",
          300: "#e98f88",
          400: "#e16960",
          500: "#9E623B",
          600: "#ae362d",
          700: "#832922",
          800: "#571b16",
          900: "#2c0e0b",
          950: "#431407",
        },
      },
    },
  },
  plugins: [],
};
