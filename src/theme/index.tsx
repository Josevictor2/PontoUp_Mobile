import { extendTheme } from 'native-base';

export const theme = extendTheme({
  colors: {
    primary: {
      50: '#2C823F',
      100: '#30663C',
      600: '#30663C26',
      700: '#30663c1a',
    },
    secondary: {
      50: '#343840',
      100: '#44484D',
      400: '#1C1F24',
      500: '#212429',
    },
    text: {
      50: '#000000',
    },
    gray: {
      50: '#EBEEF2',
      100: '#C0C3CA',
      200: '#A5A9AF',
      300: '#5F6369',
      400: '#767A80',
    },
    white: '#ffffff',
    red: {
      50: '#D95D4226',
      200: '#D95D42',
      300: '#EC3539',
    },
    blue: {
      50: '#3FA4EE26',
      200: '#2D9DEF',
      300: '#0ea5e9',
    },
    yellow: {
      50: '#DF992F26',
      200: '#DF992F',
    },
  },
  fonts: {
    heading: 'Sora_200ExtraLight',
    body: 'Sora_400Regular',
    mono: 'Sora_300Light',
    thin: 'Sora_100Thin',
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: 'dark',
  },
});
