/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#FFFFFF",
        secondary: "#F1E6E6",
        tertiary: "#f4f4f4",
        btn: "#8a8a8a",
        "font-primary": "#000",
        "font-secondary": "#868b80",
        "font-third": "#a9acae",
      },
      gridTemplateColumns: {
        "table-grid": ".5fr 3fr 1fr 1fr 1.5fr 1fr 1.5fr 2fr 1fr 2fr .5fr",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "900px",
      slg: "1080px",
    },
  },
  plugins: [],
};
