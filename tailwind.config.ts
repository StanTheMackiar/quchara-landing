import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: '#FF6C0A'
      },
      backgroundImage: {
        hero: 'url("/hero-img.svg")',
      },
      padding: {
        108: "108px",
      },
      fontFamily: {
        sfPro: ["var(--sf-pro)"],
      },
    },
  },
  plugins: [],
};
export default config;
