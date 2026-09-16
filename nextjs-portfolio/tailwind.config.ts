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
        canvas: "#ffffff",
        "canvas-soft": "#f8f8f6",
        "canvas-subtle": "#f2f2ee",
        ink: "#090909",
        "ink-muted": "#595959",
        "ink-faint": "#8c8c87",
        line: "#e5e5e0",
        "line-dark": "#d4d4cd",
        accent: {
          DEFAULT: "#f15a24",
          hover: "#d94710",
          soft: "#fff3ed",
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
