import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "var(--ink)",
          2: "var(--ink-2)",
          3: "var(--ink-3)",
          4: "var(--ink-4)",
          5: "var(--ink-5)",
        },
        violet: {
          DEFAULT: "var(--violet)",
          2: "var(--violet-2)",
          dim: "var(--violet-dim)",
          glow: "var(--violet-glow)",
        },
        chalk: {
          DEFAULT: "var(--chalk)",
          2: "var(--chalk-2)",
          3: "var(--chalk-3)",
          4: "var(--chalk-4)",
        },
        risk: {
          red: "var(--risk-red)",
          amber: "var(--risk-amber)",
          green: "var(--risk-green)",
        },
      },
      fontFamily: {
        serif: ["var(--font-instrument-serif)", "serif"],
        syne: ["var(--font-syne)", "sans-serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
