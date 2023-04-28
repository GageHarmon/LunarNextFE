/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./node_modules/flowbite-react/**/*.js",
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        'dpurp': "#170f1c",
        'lightpurp': "#ab6fd1",
        'ldark': "#15161a",
        'navpurp': "#2f146e",
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
