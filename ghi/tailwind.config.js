/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      zomp: "#66A182",
      "hunter-green": "#40693Eff",
      "moss-green": "#7F8D38ff",
      peach: "#EBBA92ff",
      "light-orange": "#ECD1B0ff",
      sepia: "#7A501Dff",
      lightyellow: "#fde68a",
      darkgreen: "#15803d",
      lightgreen: "#4ade80",
    },
  },
  plugins: [require("daisyui")],
};
