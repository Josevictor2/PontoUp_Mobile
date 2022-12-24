import { extendTheme } from "native-base";

export const theme = extendTheme({
  colors: {
    primary: {
      900: "#30663C", //minha cor
    },
    text: {
      50: "#5F6369",
      100: "#EBEEF2",
      200: "#212429",
      300: "#30663C", //verde
    },
    secondary: {
      50: "#FFFFFF",
    },
  },
  fontConfig: {
    Sora: {
      300: {
        normal: "Sora-Thin",
      },
      400: {
        normal: "Sora-Light",
      },
    },
  },
  fonts: {
    heading: "Sora",
    body: "Sora",
    mono: "Sora",
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: "dark",
  },
});
