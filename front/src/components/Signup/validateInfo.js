export default function validateInfo(values) {
    let errors = {};
  
    if (!values.name.trim()) {
    errors.name = 'First name required';
    }
    else 
    if (!/^[A-Za-z]+/.test(values.name.trim())) {
    errors.name = 'Enter a valid first name';
    }
    
    if (!values.lastName.trim()) {
      errors.lastName = 'Last name required';
      }
      else 
      if (!/^[A-Za-z]+/.test(values.lastName.trim())) {
      errors.lastName = 'Enter a valid last name';
      }


    // if (!/^[A-Za-z]+/.test(values.lastName.trim())) {
    //   errors.name = 'Enter a valid last name';
    //   }
  
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password needs to be 6 characters or more';
    }
  
    if (!values.password2) {
      errors.password2 = 'Password is required';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Passwords do not match';
    }
    return errors;
  }
  