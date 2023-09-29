/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#141414",
      blacktwo: "#0F0F0F",
      blackthree: "#0C0C0C",
      blackbord: "#050505",
    },

    extend: {
      spacing: {
        "1px": "0.5px",
        "60px": "60px",
        "75px": "75px",
        "110px": "110px",
        "120px": "120px",
        "100vw": "100vw",
      },

      display: ["group-hover"],

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["luxury"],
    logs: false,
  },
};
