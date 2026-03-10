import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "system-ui",
          "ui-sans-serif",
          "SF Pro Text",
          "SF Pro Display",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      boxShadow: {
        "purple-glow": "0 0 30px 0 rgba(99, 102, 241, 0.85)",
        "purple-glow-hover": "0 0 40px 0 rgba(99, 102, 241, 0.9)",
      },
      colors: {
        neutral: {
          850: "#0b1020",
          925: "#050713",
        },
        brand: {
          ink: "#0b1020",
          teal: "#0f766e",
          tealSoft: "#e0f2f1",
          sand: "#f7efe6",
          accent: "#f97316",
        },
      },
    },
  },
  plugins: [],
};
export default config;
