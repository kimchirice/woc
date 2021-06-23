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
import { FormHelperText } from "@material-ui/core";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Copyright from "../../components/copyright/Copyright";
import { validateInput, checkIsFormValid } from '../../utils/formUtils';
import axios from "axios";

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

  const [showError, setShowError] = useState(false);
  const [formState, setFormState] = useState(initialState);

  const classes = useStyles();

  async function handleSendLink(url, payload) {
    try {
      const response = await axios.post(url, payload);
      return response.json();
    }
    catch (error) {
      console.log(error.message)
    }
  }

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

  const handleSubmit = (event) => {
    event.preventDefault();
    let tempFormState = {};
    let isFormValid = true;
    const { value } = formState.email
    const { hasError, error } = validateInput("email", value);

    if (hasError) {
      isFormValid = false;
    }

    tempFormState.email = {
      value,
      hasError,
      error,
      touched: true,
    };


    if (!isFormValid) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);

    } else {
      const payload = {
        email: formState.email.value,
      };
      // TODOS
      // update fake Url with the server endpoint
      // reset the formState to initialState
      // update UI to inform enduser
      const apiUrl = `http://api.com`;
      console.log(apiUrl)
      console.log("current payload is ", payload);
      const response = handleSendLink(apiUrl, payload)
      
      console.log(response)
    }
  }


return (
  <Container component="main" maxWidth="xs">
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOpenIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Forget password
      </Typography>
      {showError && <FormHelperText>please enter your email</FormHelperText>}
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
          onBlur={handleOnBlur}
          error={formState.email.touched && formState.email.hasError}
          helperText={formState.email.error}
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
          <Link component={RouterLink} to="/login" variant="body2">
            {"Back to Sign In"}
          </Link>
        </Grid>
      </form>
    </div>
    <Box mt={8}>
      <Copyright />
    </Box>
  </Container>
)
};


