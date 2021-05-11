export const UPDATE_FORM = "UPDATE_FORM"

export const onInputChange = (name, value, dispatch, formState) => {
  const { hasError, error } = validateInput(name, value)

  let isFormValid = true

  for ( const key in formState ) {
    const item = formState[key]

    if ( key === name && hasError ) {
      isFormValid = false
      break
    } else if ( key !== name && item.hasError ) {
      isFormValid = false
      break
    }
  }
   dispatch({
     type: UPDATE_FORM,
     data: { 
       name, 
       value, 
       hasError, 
       error, 
       touched: false, 
       isFormValid
     },
   })
}

export const onFocusOut = ( name, value, dispatch, formState ) => {
  const { hasError, error } = validateInput( name, value )

  let isFormValid = true

  for (const key in formState) {
    const item = formState[key]
    if ( key === name && hasError ) {
      isFormValid = false
      break
    } else if (key !== name && item.hasError ) {
      isFormValid = false
      break
    }
  }

  dispatch({
    type: UPDATE_FORM,
    data: {
      name,
      value,
      hasError,
      error,
      touched: true,
      isFormValid
    },
  })
}

export const validateInput = (name, value) => {
  let hasError = false

  let error = ''

  switch(name) {
    case 'firstName':
      if (value.trim() === '') {
        hasError = true
        error = 'name cannot be empty'
      } else if (value.trim().length >  50 ) {
        hasError = true
        error = 'maximal length 50'
      } else if (!/^[a-z ,.'-]+$/i.test(value)) {
        hasError = true
        error = "name accepts letters, ', . or -"
      } else {
        hasError = false
        error = ''
      }
      break
    case 'lastName':
      if (value.trim() === '') {
        hasError = true
        error = 'name cannot be empty'
      } else if (value.trim().length >  50 ) {
        hasError = true
        error = 'maximal length 50'
      } else if (!/^[a-z ,.'-]+$/i.test(value)) {
        hasError = true
        error = "name accepts letters, ', . or -"
      } else {
        hasError = false
        error = ''
      }
      break
    case 'email':
      if (value.trim() === "") {
        hasError = true
        error = "Email cannot be empty"
      } else if (
        !/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
          value
        )
      ) {
        hasError = true
        error = "invalid Email"
      } else {
        hasError = false
        error = ""
      } 
      break
    case 'password':
      if (value.trim() === "") {
        hasError = true
        error = "password cannot be empty"
      } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(value) ) {
        hasError = true
        error = `at least 8 characters, at least one nmeric and one character of !@#$%^&*`
      } else if (value.trim().length > 50) {
        hasError = true
        error = "password must not more than 50 characters"
      } 
        else {
        hasError = false
        error = ""
      }
      break
      case "newsletter":
        hasError = false
        error= ""
      break
    default:
      break
  }

  return { hasError, error }
}