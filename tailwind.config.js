import heroui from "./src/hero.ts";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/(navbar|toast|spinner).js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-plus-jakarta-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [heroui],
};
