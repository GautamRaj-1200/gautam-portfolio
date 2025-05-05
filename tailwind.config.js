import defaultTheme from "tailwindcss/defaultTheme.js";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Clash Display for hero/headlines
        display: ["Clash Display", ...defaultTheme.fontFamily.sans],
        // Cabinet Grotesk for titles/subheadings
        title: ["Cabinet Grotesk", ...defaultTheme.fontFamily.sans],
        // General Sans for body text
        sans: ["General Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          // Rich black with slight warmth
          DEFAULT: "#111111",
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
      },
      // Extended line heights for better typography
      lineHeight: {
        relaxed: "1.75",
        loose: "2",
      },
      // Custom letter spacing
      letterSpacing: {
        snug: "-0.015em",
        medium: "0.015em",
        wide: "0.025em",
      },
    },
  },
  plugins: [],
};
