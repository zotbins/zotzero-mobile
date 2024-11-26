/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        black: "#1A1A1A",
        white: "#FCFCFC",
        tintColor: "#79b880",
        blue: "#66aec4",
      },
    }
  },
  plugins: [],
};
