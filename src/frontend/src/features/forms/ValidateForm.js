/**
 * The HandleInputFocus function handles adding and removing the focus
 * class when the user focuses on the input field of a form.
 * @param {object} inputs A form input object
 * @param {Array} references An array of form input references
 */
function HandleInputFocus(inputs, references) {
    Object.entries(inputs)
        .forEach(([key, value], index) => {
            switch (value) {
                case true:
                    references[index]?.current.classList.add('input_focus');
                    break;
                default:
                    references[index]?.current.classList.remove('input_focus');
            }
        });
}


/**
 * The HandleFormError function handles adding and removing the error
 * visible class when an error occurs in the form.
 * @param {String} form The type of form to handle
 * @param {object} errors A form error object
 * @param {Array} references An array of form error references
 */
async function HandleFormError(form, errors, references) {
    const addClass = (formType, index) => {
        switch (formType) {
            case 'loginForm':
                references[index]?.current.classList.add('visible');
                break;
            case 'registerForm':
                references[index]?.current.classList.add('visible');
                break;
            case 'changeEmailForm':
                references[index]?.current.classList.add('visible');
                break;
            case 'changePasswordForm':
                references[index]?.current.classList.add('visible');
                break;
            default:
                break;
        }
    };
    const removeClass = (formType, index) => {
        switch (formType) {
            case 'loginForm':
                references[index]?.current.classList.remove('visible');
                break;
            case 'registerForm':
                references[index]?.current.classList.remove('visible');
                break;
            case 'changeEmailForm':
                references[index]?.current.classList.remove('visible');
                break;
            case 'changePasswordForm':
                references[index]?.current.classList.remove('visible');
                break;
            default:
                break;
        }
    };
    const checkValue = (value, index) => {
        switch (value) {
            case true:
                addClass(form, index);
                break;
            default:
                removeClass(form, index);
        }
    };

    Object.entries(errors)
        .forEach(async ([key, value], index) => {
            if (!value) return;
            if (key === 'message') return;

            checkValue(value, index);
        });
}


/**
 * The ValidateForm function handles validating the input fields
 * of a form.
 * @param {object} inputs A form input object
 * @param {Function} action A state update function
 */
async function ValidateForm(inputs, action) {
    Object.entries(inputs)
        .forEach(([key, value]) => {
            if (value === '') {
                action((prevState) => ({
                    ...prevState,
                    [key]: true,
                }));
            } else {
                action((prevState) => ({
                    ...prevState,
                    [key]: false,
                }));
            }
        });
}

module.exports = {
    ValidateForm,
    HandleInputFocus,
    HandleFormError,
};