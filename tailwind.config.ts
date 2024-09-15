import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"
const { nextui } = require("@nextui-org/react");


const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx,jsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#7695FF',
        'light-blue': '#9DBDFF',
        'pale': '#FFD7C4',
        'orange': '#FF9874',
        'black': '#000000',
        'gray-dark': '#1a1a1a',
        'gray': '#2d2d2d',
        'gray-light': '#4a4a4a',
        'gray-lighter': '#a1a1a1',
        'gray-lightest': '#d4d4d4',
        'white': '#ffffff',
        'off-white': '#f5f5f5',
        'cyber-green': '#00FF9F',
        'neon-blue': '#32E1FF', 
        'midnight': '#121212',
        'silver': '#C0C0C0',
        'dark-teal': '#006D77', 
        'purple-neon': '#B983FF', 
        'electric-pink': '#FF2052', 
        'cool-gray': '#383E56', 
        'carbon': '#282A36', 
      }
      
    },
  },
  plugins: [nextui(), require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config

export default config
