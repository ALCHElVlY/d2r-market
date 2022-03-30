/**
 * The ValidateForm function validates the input fields of the
 * registration form and updates the state of the form.
 * @param {*} values The input values object
 * @param {*} action A state update function
 */
const ValidateForm = (values, action) => {
	// Handle pre-submit form validation
	if (values.currentPassword === '' &&
        values.newPassword === '' &&
        values.confirmNewPassword === '') {
		action((prevState) => ({
			...prevState,
			currentPassword: true,
			newPassword: true,
			confirmNewPassword: true,
		}));
	}
	else if (values.newPassword) {
		action((prevState) => ({
			...prevState,
			currentPassword: false,
			newPassword: true,
			confirmNewPassword: false,
		}));
	}
	else if (values.confirmNewPassword) {
		action((prevState) => ({
			...prevState,
			currentPassword: false,
			newPassword: false,
			confirmNewPassword: true,
		}));
	}
	else {
		action((prevState) => ({
			...prevState,
			currentPassword: false,
			newPassword: false,
			confirmNewPassword: false,
		}));
	}
};

/**
 * The HandleFormInputFocus function handles setting the state of the
 * input fields of the change email form when the user focuses on them.
 * @param {object} focusState The focus state object
 * @param {Array} references An array of references to the input fields
 */
const HandleFormInputFocus = (focusState, references) => {
	// Determine which input is focused
	const inputIsFocused = Object.keys(focusState)
		.find(key => focusState[key] === true);

	// Handle when the inputs are focused
	switch (inputIsFocused) {
	case 'currentPassword':
		references[0].current.classList.add('focus');
		break;
	case 'newEmail':
		references[1].current.classList.add('focus');
		break;
	default:
		references[0].current.classList.remove('focus');
		references[1].current.classList.remove('focus');
	}
};

/**
 * The HandleFormInputError function handles setting the visible error message
 * for the (change email) form input fields when an error occurs.
 * @param {object} error The input error object
 * @param {Array} references An array of references to the input fields
 */
// const HandleFormInputError = (error, references) => {};

module.exports = {
	ValidateForm,
	HandleFormInputFocus,
	// HandleFormInputError,
};