import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
    btnJoin: {
        fontSize: "1em",
        backgroundColor: "#895714",
        color: "white",
        marginTop: "2rem",
        borderRadius: "4rem",
        width: "35%",
        height: "4rem",
        textAlign: "center",
        "&:hover": {
            backgroundColor: "#1d1d1d",
        },
        "&:active": {
            transform: "translateY(10px)",
        },
    },
    landingPic: {
        width: "80%",
        height: "auto",
    },
    description: {
        letterSpacing: "0.02em",
        fontSize: "2em",
    },
    caption: {
        fontFamily: "Montserrat Classic",
        fontWeight: "bold",
        fontSize: "4.5em",
        lineHeight: "1",
    },
}));

export default styles;
