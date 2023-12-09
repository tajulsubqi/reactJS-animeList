/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: "true",
    },
    extend: {
      colors: {
        primary: "#0284c7",
        secondary: "#64748b",
        dark: "#1e293b",
      },
    },
  },
  plugins: [],
}
