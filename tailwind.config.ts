import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        "auto-fill-20": "repeat(auto-fill, minmax(20rem, 1fr))",
      },
    },
  },
  darkMode: "class",
  plugins: [
    require("tailwindcss-animated"),
    nextui({
      themes: {
        "red-dark": {
          extend: "dark",
          colors: {
            background: "#101010",
            foreground: "#d4d4d8",
            primary: {
              50: "#fff1f2",
              100: "#ffe4e6",
              200: "#fecdd3",
              300: "#fda4af",
              400: "#fb7185",
              500: "#f43f5e",
              600: "#e11d48",
              700: "#be123c",
              800: "#9f1239",
              900: "#881337",
              DEFAULT: "#e11d48",
              foreground: "#fff",
            },
            focus: "#be123c",
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
        "red-light": {
          extend: "light",
          colors: {
            background: "#fffffe",
            foreground: "#000",
            primary: {
              50: "#881337",
              100: "#9f1239",
              200: "#be123c",
              300: "#e11d48",
              400: "#f43f5e",
              500: "#fb7185",
              600: "#fda4af",
              700: "#fecdd3",
              800: "#ffe4e6",
              900: "#fff1f2",
              DEFAULT: "#e11d48",
              foreground: "#fff",
            },
            focus: "#be123c",
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
      },
    }),
  ],
};
export default config;
