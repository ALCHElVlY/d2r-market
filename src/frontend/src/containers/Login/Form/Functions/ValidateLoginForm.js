/**
 * The ValidateLoginForm function validates the login form input fields
 * and updates the state of the form.
 * @param {object} values The input values object
 * @param {Function} action A state update function
 */
const ValidateLoginForm = (values, action) => {
    if (values.email === '' && values.password === '') {
        action((prevState) => ({
            ...prevState,
            email: true,
            password: true,
        }));
    }
    else if (values.password === '') {
        action((prevState) => ({
            ...prevState,
            email: false,
            password: true,
        }));
    }
    else if (values.email === '') {
        action((prevState) => ({
            ...prevState,
            email: true,
            password: false,
        }));
    }
    else {
        action((prevState) => ({
            ...prevState,
            email: false,
            password: false,
            formError: false,
        }));
    }
};

/**
 * The HandleFormInputFocus function handles setting the state of the
 * input fields when the user focuses on them.
 * @param {object} focusState The focus state object
 * @param {Array} references An array of references to the input fields
 */
const HandleFormInputFocus = (focusState, references) => {
    // Determine which input is focused
    const inputIsFocused = Object.keys(focusState)
        .find(key => focusState[key] === true);

    // Handle when the email or password input fields are focused
    switch (inputIsFocused) {
        case 'email':
            references[0].current.classList.add('focus');
            break;
        case 'password':
            references[1].current.classList.add('focus');
            break;
        default:
            references[0].current.classList.remove('focus');
            references[1].current.classList.remove('focus');
    }
};

/**
 * The HandleFormInputError function handles setting the visible error message
 * for the form input fields when an error occurs.
 * @param {object} error The input error object
 * @param {Array} references An array of references to the input fields
 */
const HandleFormInputError = (error, references) => {
    switch (error.email) {
        case true:
            // Add the error class to the email input field
            references[0].current.classList.add('visible');
            break;
        default:
            // Remove the error class from the email input field
            references[0].current.classList.remove('visible');
    }
    switch (error.password) {
        case true:
            // Add the error class to the password input field
            references[1].current.classList.add('visible');
            break;
        default:
            // Remove the error class from the password input field
            references[1].current.classList.remove('visible');
    }
    switch (error.formError) {
        case true:
            references[2].current.classList.add('visible');
            break;
        default:
            references[2].current.classList.remove('visible');
    }
};

module.exports = {
    ValidateLoginForm,
    HandleFormInputFocus,
    HandleFormInputError,
};