/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.jsx",
    "./src/**/*.jsx"
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "fit-300" : "repeat(auto-fit, minmax(350px, 1fr))"
      }
    },
  },
  plugins: [],
}

