import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx}",
    "./app/**/*.{ts,tsx,js,jsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        "brand-orange": "var(--brand-orange)",
        "brand-coral": "var(--brand-coral)",
        "brand-magenta": "var(--brand-magenta)",
        "brand-violet": "var(--brand-violet)",
        "brand-ink": "var(--brand-ink)",
      },
    },
  },
  plugins: [],
};

export default config;


