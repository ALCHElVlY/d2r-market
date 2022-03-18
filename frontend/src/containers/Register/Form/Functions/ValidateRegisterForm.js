/**
 * The ValidateRegistrationForm function validates the input fields of the
 * registration form and updates the state of the form.
 * @param {object} values The input values object
 * @param {Function} action A state update function
 */
const ValidateRegistrationForm = (values, action) => {
    // Handle pre-submit form validation
    if (values.email === '' &&
        values.password === '' &&
        values.confirmPassword === '') {
        action((prevState) => ({
            ...prevState,
            email: true,
            password: true,
            confirmPassword: true,
        }));
    }
    else if (values.password === '') {
        action((prevState) => ({
            ...prevState,
            email: false,
            password: true,
            confirmPassword: false,
        }));
    }
    else if (values.email === '') {
        action((prevState) => ({
            ...prevState,
            email: true,
            password: false,
            confirmPassword: false,
        }));
    }
    else if (values.confirmPassword === '') {
        action((prevState) => ({
            ...prevState,
            email: false,
            password: false,
            confirmPassword: true,
            passwordMisMatch: false,
        }));
    }
    else {
        action((prevState) => ({
            ...prevState,
            email: false,
            password: false,
            confirmPassword: false,
            passwordMisMatch: false,
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

    // Handle when the inputs are focused
    switch (inputIsFocused) {
        case 'email':
            references[0].current.classList.add('focus');
            break;
        case 'password':
            references[1].current.classList.add('focus');
            break;
        case 'confirmPassword':
            references[2].current.classList.add('focus');
            break;
        default:
            references[0].current.classList.remove('focus');
            references[1].current.classList.remove('focus');
            references[2].current.classList.remove('focus');
    }
};

/**
 * The HandleFormInputError function handles setting the visible error message
 * for the form input fields when an error occurs.
 * @param {object} error The input error object
 * @param {Array} references An array of references to the input fields
 */
const HandleFormInputError = (error, references) => {
    // Handle setting the input validation errors
    switch (error.email) {
        case true:
            references[0].current.classList.add('visible');
            break;
        default:
            references[0].current.classList.remove('visible');
    }
    switch (error.password) {
        case true:
            references[1].current.classList.add('visible');
            break;
        default:
            references[1].current.classList.remove('visible');
    }
    switch (error.confirmPassword) {
        case true:
            references[2].current.classList.add('visible');
            break;
        default:
            references[2].current.classList.remove('visible');
    }
    switch (error.passwordMisMatch) {
        case true:
            references[3].current.classList.add('visible');
            break;
        default:
            references[3].current.classList.remove('visible');
    }
    switch (error.formError) {
        case true:
            references[3].current.classList.add('visible');
            break;
        default:
            references[3].current.classList.remove('visible');
    }
};

module.exports = {
    ValidateRegistrationForm,
    HandleFormInputFocus,
    HandleFormInputError,
};