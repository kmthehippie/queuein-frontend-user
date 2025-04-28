// src/theme/index.js
import { createTheme } from "@mui/material/styles";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#497B04",
      light: "#8FC622",
      dark: "#265208",
      contrastText: "#FFFFFF",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      mobile: 500, // Custom breakpoint
      tablet: 700, // Custom breakpoint
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiTypography: {
      variants: [
        { props: { variant: "body2" }, style: { fontSize: 11 } },
        { props: { variant: "small" }, style: { fontSize: 9 } },
        {
          props: { variant: "poppinsH" },
          style: {
            fontFamily: "Poppins",
            fontSize: 30,
            fontWeight: 500,
            letterSpacing: -1,
          },
        },
      ],
    },
  },
});

export default customTheme;
