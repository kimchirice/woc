import { createMuiTheme } from "@material-ui/core/styles";

/* 
    Global MUI theme
*/

const Theme = createMuiTheme({
    palette: {
        primary: { main: "#1d1d1d" },
        secondary: { main: "#895714" },
    },
    spacing: 16,
    typography: {
        fontSize: 12,
    },
});

export default Theme;
