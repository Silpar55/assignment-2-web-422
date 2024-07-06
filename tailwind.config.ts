import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          darkPurple: "#31255a", // (49,37,90)
          lightBlue: "#8fe0ff", // (143,224,255)
          mediumBlue: "#75b4e3", // (117,180,227)
          mediumPurple: "#54416d", // (84,65,109)
          darkBlue: "#2b235a", // (43,35,90)
        },
      },
    },
    backdropBlur: {
      xs: "2px",
    },
  },
  plugins: [],
};
export default config;
