/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,xml}"],
    theme: {
      extend: {
        backgroundImage: () => ({
          "storefront-colour": "url('/storefront-colour.svg')",
        }),
        colors: {
          turquoise: "#74d5de",
          "reddish-brown": "#ed6e58",
          "faded-green": "#deebec",
        },
      },
    },
    plugins: [],
  };
  