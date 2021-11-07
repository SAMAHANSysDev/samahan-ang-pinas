import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

export default responsiveFontSizes(
    createTheme({
        palette: {
            primary: {
                main: "#1637BC",
            },
            secondary: {
                main: "#faa728",
                contrastText: "#fff",
            },
            background: {
                default: "#fff",
            },
        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 1301,
                lg: 1500,
                xl: 1920,
            },
        },
        typography: {
            button: {
                textTransform: "none",
            },
            h1: {
                fontSize: "5rem",
                fontFamily: "Rakkas",
                fontWeight: 900,
            },
            h2: {
                fontFamily: "Rakkas",
                fontWeight: 850,
            },
            h3: {
                fontFamily: "Rakkas",
                fontWeight: 750,
            },
            h4: {
                fontFamily: "Rakkas",
                fontWeight: 700,
            },
            h5: {
                fontFamily: "Squada One",
                fontWeight: 650,
                letterSpacing: 2,
            },
            h6: {
                fontFamily: "Squada One",
                fontWeight: 600,
                letterSpacing: 2,
            },
            fontFamily: "Poppins",
        },
        spacing: 10,
    }),
    { factor: 4 }
);
