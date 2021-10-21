import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints, mode } from "@chakra-ui/theme-tools";

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const theme = extendTheme({
  colors: {
    black: "#16161D",
  },
  fonts,
  breakpoints,
  styles: {
    global: (props) => ({
      html: {
        h: "100%",
        m: "0",
      },
      body: {
        h: "100%",
        m: "0",
        fontFamily: "body",
        color: mode("black", "white")(props),
        bg: mode("white", "gray.800")(props),
        lineHeight: "base",
        "&::-webkit-scrollbar": {
          width: "4px",
          borderRadius: "6px",
          backgroundColor: `rgba(8, 10, 49, 0.05)`,
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: `#3893fb`,
        },
      },
    }),
  },
});

export default theme;
