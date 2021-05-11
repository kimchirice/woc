import React, { useState, useReducer} from "react";
import { UPDATE_FORM, onFocusOut, onInputChange, validateInput } from '../../utils/formUtils'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Copyright from '../../components/copyright/Copyright'
import { FormHelperText } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(2),
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
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(2, 0, 2),
    },
}));

const formsReducer = (state, action) => {
  switch(action.type) {
    case UPDATE_FORM: 
      const { name, value, touched, hasError, error, isFormValid } = action.data
      return {
        ...state,
        [name]: {
          ...state[name], 
          value,
          touched,
          hasError,
          error
        },
        isFormValid
      }
    default:
      return state
  }
}

const initialState = {
    firstName: {
        value: '',
        touched: false,
        hasError: true,
        error: '',
    },
    lastName: {
        value: '',
        touched: false,
        hasError: true,
        error: '',
    },
    email: {
        value: '',
        touched: false,
        hasError: true,
        error: '',
    },
    password: {
      value: '',
      touched: false,
      hasError: true,
      error: '',
    },
    newsletter: {
      value: false, touched: false, hasError: false, error:""
    },
    isFormValid: false,
}

function SignUp() {
  const [formState, dispatch] = useReducer(formsReducer, initialState)
  const [showError, setShowError] = useState(false)

  const classes = useStyles();
  const handleSignUp = (event) => {
    event.preventDefault()
    
    let isFormValid = true

    for ( const name in formState) {
      const { value } = formState[name]
      const { hasError, error } = validateInput(name, value)

      if (hasError) {
        isFormValid = false
      }
      if (name) {
        dispatch({
          type: UPDATE_FORM,
          data: {
            name,
            value,
            hasError,
            error,
            touch: true,
            isFormValid
          },
        })
      }
    }

    if (!isFormValid) {
      setShowError(true)
    } else {
      window.alert('sending login data to the server')
      console.table(formState)
    }
    
    setTimeout(() => {setShowError(false)}, 5000)
    
  }
    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                { showError && (<FormHelperText>please enter the info correctly</FormHelperText>) }

                <form className={classes.form} >
                  <Grid container spacing={2} >
                      <Grid item xs={12} sm={6}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          name="firstName"
                          id="firstName"
                          label="First Name"
                          value={formState.firstName.value}
                          onChange={e => onInputChange(e.target.name, e.target.value, dispatch, formState)}
                          onBlur={e => {
onFocusOut(e.target.name, e.target.value, dispatch, formState)
          }}
                          error={formState.firstName.touched && formState.firstName.hasError}
                          helperText={formState.firstName.error}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          name="lastName"
                          id="lastName"
                          label="Last Name"
                          value={formState.lastName.value}
                          onChange={e => onInputChange(e.target.name, e.target.value, dispatch, formState)}
                          onBlur={e => {
              onFocusOut(e.target.name, e.target.value, dispatch, formState)
            }}
                          error={formState.lastName.touched && formState.lastName.hasError}
                          helperText={formState.lastName.error}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          name="email"
                          id="email"
                          label="Email Address"
                          type='email'
                          value={formState.email.value}
                          onChange={e => onInputChange(e.target.name, e.target.value, dispatch, formState)}
                          onBlur={e => {onFocusOut(e.target.name, e.target.value, dispatch, formState)}}
                          error={formState.email.touched && formState.email.hasError }
                          helperText={formState.email.error}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          name="password"
                          id="password"
                          label="Password"
                          type="password"
                          autoComplete="current-password"
                          value={formState.password.value}
                          onChange={e => onInputChange(e.target.name, e.target.value, dispatch, formState)}
                          onBlur={e => {onFocusOut(e.target.name, e.target.value, dispatch, formState)}}
                          error={formState.password.touched && formState.password.hasError }
                          helperText={formState.password.error}
                        />
                      </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                  <Checkbox
                                    name="newsletter"
                                    checked={formState.newsletter.value} 
                                    value="allowExtraEmails" 
                                    color="primary"
                                    onChange={e => onInputChange(e.target.name, e.target.checked, dispatch, formState) }
                                />
                                }
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />                            
                        </Grid>
                    </Grid>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleSignUp}
                    >
                        Sign Up
                    </Button>

                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link component={ RouterLink } to="/login" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}





export default SignUp;