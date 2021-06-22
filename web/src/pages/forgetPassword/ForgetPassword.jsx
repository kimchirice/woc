import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Copyright from "../components/Copyright";
import { validateInput, checkIsFormValid } from '../../utils/formUtils';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const initialState = {
  email: {
    value: "",
    touched: false,
    hasError: true,
    error: "",
  },
  isFormValid: false,
}

export default function ForgetPassword() {
  const classes = useStyles();


  const [formState, setFormState] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const { hasError, error } = validateInput(name, value);
    const isFormValid = checkIsFormValid(name, value, hasError, error, formState);
    setFormState((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        value,
        hasError,
        error,
        touched: false,
      },
      isFormValid,
    }));
  };


  const handleOnBlur = (event) => {
    const { name, value } = event.target;
    const { hasError, error } = validateInput(name, value);
    const isFormValid = checkIsFormValid(name, value, hasError, error, formState);
    setFormState((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        value,
        hasError,
        error,
        touched: true,
      },
      isFormValid,
    }));
  };

  /* TODOs:
  1. display successuflly sent the email 
  */
  function handleSubmit(event) {
    event.preventDefault();
    // fake Url
    let apiUrl = `http://api.com`;
    console.log(apiUrl)
    const payload = {
      email: formState.email.value
    };
    console.log("current payload is ", payload);

  }

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Forget password
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
            onBlue={handleOnBlur}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Send Link
          </Button>
          <Grid container>
            <Link component={RouterLink} to="/" variant="body2">
              {"Back to Sign In"}
            </Link>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

