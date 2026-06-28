/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#121820",
        graphite: "#26313d",
        mist: "#f4f7f8",
        line: "#dbe3e5",
        teal: "#0f8b8d",
        coral: "#e76f51",
        amber: "#f4a261",
      },
      boxShadow: {
        soft: "0 18px 60px rgba(18, 24, 32, 0.12)",
      },
    },
  },
  plugins: [],
};
