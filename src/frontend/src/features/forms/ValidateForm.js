/**
 * The HandleInputFocus function handles adding and removing the focus
 * class when the user focuses on the input field of a form.
 * @param {String} formType The type of form to validate
 * @param {object} state An input state object
 * @param {Array} references An array of form input references
 */
function HandleInputFocus(formType, state, references) {
    // Determine which input is focused
    const inputIsFocused = Object.keys(state)
        .find(key => state[key] === true);

    switch (formType) {
        case 'register':
            // Handle the register form input focus
            handleRegisterInputState(inputIsFocused, references);
            break;
        case 'login':
            // Handle the login form input focus
            handleLoginInputState(inputIsFocused, references);
            break;
        case 'changeEmail':
            // Handle the change email form input focus
            handleChangeEmailInputState(inputIsFocused, references);
            break;
        case 'changePassword':
            // Handle the change password form input focus
            handleChangePasswordInputState(inputIsFocused, references);
            break;
        default:
            break;
    }

    // Utility function to handle the input state of the
    // register form
    function handleRegisterInputState(inputState, inputReferences) {
        // Handle when the inputs are focused
        switch (inputState) {
            case 'email':
                inputReferences[0].current.classList.add('input_focus');
                break;
            default:
                inputReferences[0].current.classList.remove('input_focus');
        }

        // Handle when the inputs are focused
        switch (inputState) {
            case 'password':
                inputReferences[1].current.classList.add('input_focus');
                break;
            default:
                inputReferences[1].current.classList.remove('input_focus');
        }

        // Handle when the inputs are focused
        switch (inputState) {
            case 'confirmPassword':
                inputReferences[2].current.classList.add('input_focus');
                break;
            default:
                inputReferences[2].current.classList.remove('input_focus');
        }
    };

    // Utlity function to handle the input state of the
    // login form
    function handleLoginInputState(inputState, inputReferences) {
        // Handle when the email input field is focused
        switch (inputState) {
            case 'email':
                inputReferences[0].current.classList.add('input_focus');
                break;
            default:
                inputReferences[0].current.classList.remove('input_focus');
        }

        // Handle when the password input field is focused
        switch (inputState) {
            case 'password':
                inputReferences[1].current.classList.add('input_focus');
                break;
            default:
                inputReferences[1].current.classList.remove('input_focus');
        }
    };

    // Ulitility function to handle the input state of the
    // change email form
    function handleChangeEmailInputState(inputState, inputReferences) {
        // Handle when currentPassword input field is focused
        switch (inputState) {
            case 'currentPassword':
                inputReferences[0].current.classList.add('focus');
                break;
            default:
                inputReferences[0].current.classList.remove('focus');
        }

        // Handle when the newEmail input field is focused
        switch (inputState) {
            case 'newEmail':
                inputReferences[1].current.classList.add('focus');
                break;
            default:
                inputReferences[1].current.classList.remove('focus');
        }
    };

    // Utility function to handle the input state of the
    // change password form
    function handleChangePasswordInputState(inputState, inputReferences) {
        // Handle when the currentPassword input field is focused
        switch (inputState) {
            case 'currentPassword':
                inputReferences[0].current.classList.add('focus');
                break;
            default:
                inputReferences[0].current.classList.remove('focus');
        }

        // Handle when the newPassword input field is focused
        switch (inputState) {
            case 'newPassword':
                inputReferences[1].current.classList.add('focus');
                break;
            default:
                inputReferences[1].current.classList.remove('focus');
        }

        // Handle when the confirmNewPassword input field is focused
        switch (inputState) {
            case 'confirmNewPassword':
                inputReferences[2].current.classList.add('focus');
                break;
            default:
                inputReferences[2].current.classList.remove('focus');
        }
    };
}


/**
 * The HandleFormError function handles adding and removing the error
 * visible class when an error occurs in the form.
 * @param {String} formType The type of form to validate
 * @param {object} errors A form error object
 * @param {Array} references An array of form error references
 */
function HandleFormError(formType, errors, references) {
    switch (formType) {
        case 'register':
            // Handle the register form errors
            handleRegisterFormErrors(errors, references);
            break;
        case 'login':
            // Handle the login form errors
            handleLoginFormErrors(errors, references);
            break;
        case 'changeEmail':
            // Handle the change email form errors
            break;
        case 'changePassword':
            // Handle the change password form errors
            handleChangePasswordFormErrors(errors, references);
            break;
        default:
            break;
    }


    // Utility function to handle the form errors of the
    // register form
    function handleRegisterFormErrors(errors, references) {
        // Handle adding and removing the error class
        // for the email input field
        switch (errors.email) {
            case true:
                references[0].current.classList.add('visible');
                break;
            default:
                references[0].current.classList.remove('visible');
        }

        // Handle adding and removing the error class
        // for the password input field
        switch (errors.password) {
            case true:
                references[1].current.classList.add('visible');
                break;
            default:
                references[1].current.classList.remove('visible');
        }

        // Handle adding and removing the error class
        // for the confirm password input field
        switch (errors.confirmPassword) {
            case true:
                references[2].current.classList.add('visible');
                break;
            default:
                references[2].current.classList.remove('visible');
        }

        // Handle adding and removing the error class
        // for the password mismatch error
        switch (errors.passwordMisMatch) {
            case true:
                references[3].current.classList.add('visible');
                break;
            default:
                references[3].current.classList.remove('visible');
        }

        // Handle adding and removing the error class
        // for the http error message
        switch (errors.formError) {
            case true:
                references[3].current.classList.add('visible');
                break;
            default:
                references[3].current.classList.remove('visible');
        }
    }

    // Utility function to handle the form errors of the
    // login form
    function handleLoginFormErrors(errors, references) {
        // Handle adding and remove the form error class
        // for the email input field
        switch (errors.email) {
            case true:
                references[0].current.classList.add('visible');
                break;
            default:
                references[0].current.classList.remove('visible');
        }

        // Handle adding and remove the form error class
        // for the password input field
        switch (errors.password) {
            case true:
                references[1].current.classList.add('visible');
                break;
            default:
                references[1].current.classList.remove('visible');
        }

        // Handle adding and remove the form error class
        // for the http error message
        switch (errors.formError) {
            case true:
                references[2].current.classList.add('visible');
                break;
            default:
                references[2].current.classList.remove('visible');
        }
    };

    // Utility function to handle the form errors of the
    // change email form
    // async function handleChangeEmailFormErrors (errors, inputReferences) {};

    // Utility function to handle the form errors of the
    // change password form
    function handleChangePasswordFormErrors(errors, inputReferences) {
        // Handle adding and remove the form error class
        // for the current password input field
        switch (errors.currentPassword) {
            case true:
                inputReferences[0].current.classList.add('visible');
                break;
            default:
                inputReferences[0].current.classList.remove('visible');
        }

        // Handle adding and remove the form error class
        // for the new password input field
        switch (errors.newPassword) {
            case true:
                inputReferences[1].current.classList.add('visible');
                break;
            default:
                inputReferences[1].current.classList.remove('visible');
        }

        // Handle adding and remove the form error class
        // for the confirm new password input field
        switch (errors.confirmNewPassword) {
            case true:
                inputReferences[2].current.classList.add('visible');
                break;
            default:
                inputReferences[2].current.classList.remove('visible');
        }

        // Handle adding and remove the form error class
        // for the password mismatch error
        switch (errors.passwordMisMatch) {
            case true:
                inputReferences[3].current.classList.add('visible');
                break;
            default:
                inputReferences[3].current.classList.remove('visible');
        }

        // Handle adding and remove the form error class
        // for the http error message
        switch (errors.formError) {
            case true:
                inputReferences[3].current.classList.add('visible');
                break;
            default:
                inputReferences[3].current.classList.remove('visible');
        }
    };
}


/**
 * The ValidateForm function handles validating the input fields
 * of a form.
 * @param {String} formType The type of form to validate
 * @param {*} values The input values object
 * @param {*} action A state update function
 */
function ValidateForm(formType, values, action) {
    switch (formType) {
        case 'register':
            // Validate the register form
            validateRegisterForm(values, action);
            break;
        case 'login':
            // Validate the login form
            validateLoginForm(values, action);
            break;
        case 'changeEmail':
            // Validate the change email form
            validateChangeEmailForm(values, action);
            break;
        case 'changePassword':
            // Validate the change password form
            validateChangePasswordForm(values, action);
            break;
        default:
            break;
    }


    // Utility function to validate the register form
    function validateRegisterForm(values, action) {
        if (values.email === '' &&
            values.password === '' &&
            values.confirmPassword === '') {
            action((prevState) => ({
                ...prevState,
                email: true,
                password: true,
                confirmPassword: true,
            }));
        } else if (values.email === '') {
            action((prevState) => ({
                ...prevState,
                email: true,
                password: false,
                confirmPassword: false,
            }));
        } else if (values.password === '') {
            action((prevState) => ({
                ...prevState,
                email: false,
                password: true,
                confirmPassword: true,
            }));
        }  else if (values.confirmPassword === '') {
            action((prevState) => ({
                ...prevState,
                email: false,
                password: false,
                confirmPassword: true,
            }));
        } else {
            action((prevState) => ({
                ...prevState,
                email: false,
                password: false,
                confirmPassword: false,
            }));
        }
    };

    // Utility function to validate the login form
    function validateLoginForm(values, action) {
        if (values.email === '' && values.password === '') {
            action((prevState) => ({
                ...prevState,
                email: true,
                password: true,
            }));
        } else if (values.password === '') {
            action((prevState) => ({
                ...prevState,
                email: false,
                password: true,
            }));
        } else if (values.email === '') {
            action((prevState) => ({
                ...prevState,
                email: true,
                passowrd: false,
            }));
        } else {
            action((prevState) => ({
                ...prevState,
                email: false,
                password: false,
            }));
        }
    };

    // Utility function to validate the changeEmail form
    function validateChangeEmailForm(values, action) {
        if (values.currentPassword === '' &&
            values.newPassword === '' &&
            values.confirmNewPassword === '') {
            action((prevState) => ({
                ...prevState,
                currentPassword: true,
                newPassword: true,
                confirmNewPassword: true,
            }));
        } else if (values.newPassword) {
            action((prevState) => ({
                ...prevState,
                currentPassword: false,
                newPassword: true,
                confirmNewPassword: false,
            }));
        } else if (values.confirmNewPassword) {
            action((prevState) => ({
                ...prevState,
                currentPassword: false,
                newPassword: false,
                confirmNewPassword: true,
            }));
        } else {
            action((prevState) => ({
                ...prevState,
                currentPassword: false,
                newPassword: false,
                confirmNewPassword: false,
            }));
        }
    };

    // Utility function to validate the changePassword form
    function validateChangePasswordForm(values, action) {
        if (values.currentPassword === '' &&
            values.newPassword === '' &&
            values.confirmNewPassword === '') {
            action((prevState) => ({
                ...prevState,
                currentPassword: true,
                newPassword: true,
                confirmNewPassword: true,
            }));
        } else if (values.newPassword === '') {
            action((prevState) => ({
                ...prevState,
                currentPassword: false,
                newPassword: true,
                confirmNewPassword: false,
            }));
        } else if (values.confirmNewPassword === '') {
            action((prevState) => ({
                ...prevState,
                currentPassword: false,
                newPassword: false,
                confirmNewPassword: true,
            }));
        } else {
            action((prevState) => ({
                ...prevState,
                currentPassword: false,
                newPassword: false,
                confirmNewPassword: false,
            }));
        }
    };
}

module.exports = {
    ValidateForm,
    HandleInputFocus,
    HandleFormError,
};