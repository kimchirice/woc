import React, { useState } from "react";
import { Link as RouterLink, Redirect } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../contexts/authContext";

import {
    Avatar,
    Button,
    // TextField,
    FormControlLabel,
    Checkbox,
    Link,
    Grid,
    Box,
    Typography,
    Container,
    CircularProgress, // change to MUI-FAB later
} from "@material-ui/core";

import TextField from "../../components/textfield/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Copyright from "../../components/copyright/Copyright";
import { makeStyles } from "@material-ui/core/styles";

/* 
    Login page component

    TODO:
    - remember me checkbox not handled
    - bad login not handled
*/

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(1, 0, 2),
    },
}));

const SignIn = (props) => {
    const classes = useStyles();

    const [cred, setCred] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(""); // POST error

    const { loggedIn, logIn } = useAuth();

    // on input change
    const handleChange = (e) => setCred({ ...cred, [e.target.name]: e.target.value });
    // on form submit
    const handleSubmit = async (e) => {
        setLoading(true);
        axios
            .post("/api/auth/login", cred)
            .then((res) => {
                // ok set token
                logIn(res.data.token);
                setLoading(false);
            })
            .catch((e) => {
                // display bad credentials or unexpected errors
                setError(e.response.status === 401 ? "Invalid email/ password" : e.message);
                setLoading(false);
            });

        e.preventDefault(); // things works if this is on the bottom, interesting
    };

    /// redirect if logged in
    const referer = (props) => (props.location.state === undefined ? "/" : props.location.state.referer);
    if (loggedIn) return <Redirect to={referer(props)} />;

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>

                <Typography component="h1" variant="h5">
                    Sign In
                </Typography>

                {/* form */}
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container>
                        <TextField
                            name="email"
                            label="Email Address"
                            autoComplete="email"
                            value={cred.email}
                            onChange={handleChange}
                            required
                            autoFocus
                        />
                        <TextField
                            name="password"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            value={cred.password}
                            onChange={handleChange}
                            required
                        />
                        <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />

                        {/* API message */}
                        {error ? <Typography style={{ color: "red" }}>{error}</Typography> : <></>}

                        {/* loading button (needs some styling or use MUI loading button) */}
                        {loading ? (
                            <CircularProgress />
                        ) : (
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="secondary"
                                className={classes.submit}
                            >
                                Sign In
                            </Button>
                        )}

                        {/* links after submit */}
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link component={RouterLink} to="/signUp" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />{" "}
            </Box>
        </Container>
    );
};

export default SignIn;
