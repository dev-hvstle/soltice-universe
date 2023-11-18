/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./views/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "../../apps/**/*.{js,ts,jsx,tsx}",
    "../../apps/web/components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      //Screens
      screens: {
        xsm: "375px",
        // => @media (min-width: 375px) { ... }

        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
        "2xl": "1536px",
        // => @media (min-width: 1440px) { ... }
      },
    },

    colors: {
      cPrimary: {
        100: "#DFFCFC",
        200: "#C6FBF8",
        300: "#96F8F2",
        400: "#66F4EC",
        500: "#36F1E6",
        600: "#2FC5BC",
        700: "#299992",
        800: "#226C68",
        900: "#1B403E",
        950: "#161F1E",
      },

      cSecondary: {
        100: "#FDE6E7",
        200: "#FAB4B8",
        300: "#F68188",
        400: "#F34F59",
        500: "#F13641",
        600: "#B52931",
        700: "#781B21",
        800: "#5A1418",
        900: "#3C0E10",
        950: "#1E0708",
      },

      cAccent1: {
        100: "#F0E6FD",
        200: "#D3B4FA",
        300: "#B581F6",
        400: "#984FF3",
        500: "#8936F1",
        600: "#6729B5",
        700: "#451B78",
        800: "#33145A",
        900: "#220E3C",
        950: "#11071E",
      },

      cAccent2: {
        100: "#F3FDE6",
        200: "#DBFAB4",
        300: "#C2F681",
        400: "#AAF34F",
        500: "#9EF136",
        600: "#77B529",
        700: "#4F781B",
        800: "#3B5A14",
        900: "#283C0E",
        950: "#141E07",
      },

      cNeutral: {
        100: "#FFF",
        200: "#7A7A7A",
        300: "#6E6E6E",
        400: "#616161",
        500: "#545454",
        600: "#474747",
        700: "#3B3B3B",
        800: "#2E2E2E",
        900: "#212121",
        950: "#141414",
      },
    },
  },
  plugins: [],
};
