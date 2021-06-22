import { makeStyles } from "@material-ui/core/styles";
// TODO: change this to font in Index
import "../../components/navbar/NavBar.css";

const styles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    paper: {
        // padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
    btnJoinLink: {
        textDecoration: "none",
    },
    btnJoin: {
        fontFamily: `'Roboto Slab', serif`,
        fontWeight: "600",
        fontSize: "1em",
        backgroundColor: theme.palette.secondary.main,
        color: "white",
        //marginTop: "2rem",
        borderRadius: "4rem",
        width: "35%",
        height: "4rem",
        textAlign: "center",
        "&:hover": {
            backgroundColor: theme.palette.primary.main,
        },
        "&:active": {
            transform: "translateY(10px)",
        },
    },
    imageDiv: {
        [theme.breakpoints.between("xs", "sm")]: {
            width: "90% !important",
        },
        [theme.breakpoints.between("sm", "md")]: {
            textAlign: "center",
        },
        [theme.breakpoints.between("md", "lg")]: {
            textAlign: "center",
        },
    },
    landingPic: {
        width: "100%",
        height: "auto",
        [theme.breakpoints.between("xs", "sm")]: {
            width: "90% !important",
        },
        [theme.breakpoints.between("sm", "md")]: {
            width: "65% !important",
        },
        [theme.breakpoints.between("md", "lg")]: {
            width: "100% !important",
        },
    },
    description: {
        fontFamily: `'Roboto Slab', serif`,
        fontWeight: "300",
        letterSpacing: "0.02em",
        fontSize: "1.65em",
        [theme.breakpoints.between("xs", "sm")]: {
            paddingLeft: "inherit !important",
            paddingRight: "inherit !important",
        },
    },
    caption: {
        fontFamily: `'Roboto Slab', serif`,
        fontWeight: "bold",
        lineHeight: "1",
        marginBottom: "0",
        fontSize: "60px",
        textAlign: "-webkit-match-parent",
        [theme.breakpoints.between("xs", "sm")]: {
            fontSize: "32px !important",
            marginTop: "26px !important",
        },
        [theme.breakpoints.between("sm", "md")]: {
            fontSize: "40px !important",
            marginLeft: "16% !important",
            marginRight: "16% !important",
            paddingTop: "inherit !important",
        },
        [theme.breakpoints.between("md", "lg")]: {
            paddingTop: "inherit !important",
            marginLeft: "0 !important",
            marginRight: "0 !important",
        },
    },
}));

export default styles;
