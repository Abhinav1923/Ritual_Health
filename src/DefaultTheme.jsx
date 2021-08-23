import { createTheme } from "@material-ui/core";

const theme = createTheme({
    breakpoints: {
        values: {
            sm: 750,
            md: 960,
            lg: 1200,
        },
    },
});

export default theme;
