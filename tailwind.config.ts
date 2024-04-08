import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/components/**/*.vue",
    ".src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/app.vue"
  ],
  theme: {
    extend: {}
  },
  plugins: []
} satisfies Config;

