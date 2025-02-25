import type { Config } from "tailwindcss";

const config: Config = {
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
      colors:{

        SanSky: "#A0DAFB",         // Light baby blue  
SanSkyLight: "#E8F7FE",    // Ultra-light blue  
SanPurple: "#B19CD9",      // Soft lilac  
SanPurpleLight: "#E8DAEF", // Light lavender  
SanYellow: "#FAD643",      // Warm golden yellow  
SanYellowLight: "#FEF7DC", // Light pastel yellow  

      }
    },
  },
  plugins: [],
};
export default config;
