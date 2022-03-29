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
	else if (values.newPassword === '') {
		action((prevState) => ({
			...prevState,
			currentPassword: false,
			newPassword: true,
			confirmNewPassword: false,
		}));
	}
	else if (values.confirmNewPassword === '') {
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
 * input fields of the change password form when the user focuses on them.
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
	case 'newPassword':
		references[1].current.classList.add('focus');
		break;
	case 'confirmNewPassword':
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
 * for the (change password) form input fields when an error occurs.
 * @param {object} error The input error object
 * @param {Array} references An array of references to the input fields
 */
const HandleFormInputError = (error, references) => {
	switch (error.currentPassword) {
	case true:
		references[0].current.classList.add('visible');
		break;
	default:
		references[0].current.classList.remove('visible');
	}
	switch (error.newPassword) {
	case true:
		references[1].current.classList.add('visible');
		break;
	default:
		references[1].current.classList.remove('visible');
	}
	switch (error.confirmNewPassword) {
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
	ValidateForm,
	HandleFormInputFocus,
	HandleFormInputError,
};