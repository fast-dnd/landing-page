/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'jibril': ['Jibril Regular', 'sans-serif'],
        'jost': ['Jost*', 'sans-serif'],
      },
      colors: {
        black: "#000",
        white: "#fff",
        tomato: "#ff5a5a",
        gray: {
          "100": "#8e8e94",
          "200": "#171716",
          "300": "rgba(0, 0, 0, 0.6)",
          "400": "rgba(0, 0, 0, 0.87)",
          "500": "rgba(0, 0, 0, 0.23)",
          "600": "rgba(255, 255, 255, 0.2)",
          "700": "rgba(255, 255, 255, 0.5)",
          "800": "rgba(255, 255, 255, 0.67)",
        },
        orange: "#f99a0e",
        aliceblue: "#f3f7fb",
        whitesmoke: "#eaeaea",
        saddlebrown: "#99600a",
        peru: "#9e6104",
        slategray: "#576074",
        darkslategray: {
          "100": "#434343",
          "200": "#424242",
          "300": "#303030",
        },
        cornflowerblue: {
          "100": "#4dabff",
          "200": "#1262af",
          "300": "#1262ae",
        },
        gainsboro: {
          "100": "#e0e0e0",
          "200": "rgba(226, 226, 226, 0.1)",
        },
        lavender: "#ccdcec",
        darkgray: "#999",
        yellowgreen: "#79ca00",
        gold: "#fdbf00",
        sandybrown: "#ff9b53",
        lightgray: "#cecece",
        silver: "#bdbdbd",
        dimgray: "#616161",
        skyblue: "#99d2f5",
      },
    },
  },
  plugins: [],
}
