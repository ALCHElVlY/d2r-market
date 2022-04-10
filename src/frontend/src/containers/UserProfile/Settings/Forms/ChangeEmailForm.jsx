// Builtin imports
import { useState, useRef, useEffect } from 'react';

// Internal imports
import ChangeEmailConfirm from '../Buttons/ChangeEmailConfirm.jsx';
import {
	ValidateForm,
	HandleFormInputFocus,
	HandleFormInputError,
} from './Functions/ValidateChangeEmailForm.js';

const ChangeEmailForm = () => {
	// Create a ref to the input fields
	const currentPasswordRef = useRef(null),
		newEmailRef = useRef(null),
		formErrors = useRef(null);

	// Create refs for the form errors
	const currentPasswordError = useRef(null),
		newEmailError = useRef(null);

	// Set the state for the form inputs
	const [inputs, setInputs] = useState({
		currentPassword: '',
		newEmail: '',
	});
	const {
		currentPassword,
		newEmail,
	} = inputs;

	// Set the state for the input focus
	const [isFocused, setIsFocused] = useState({});

	// Set the state for the input validation errors
	const [error, setError] = useState({
		currentPassword: false,
		newEmail: false,
		formError: false,
		message: '',
	});

	// Handle when the input fields are focused
	const handleFocus = (e) => {
		setIsFocused(() => ({
			...isFocused,
			[e.target.name]: true,
		}));
	};

	// Handle when the input fields are blurred
	const handleBlur = (e) => {
		setIsFocused(() => ({
			...isFocused,
			[e.target.name]: false,
		}));
	};

	// Handle when the input fields are changed
	const handleChange = (e) => {
		setInputs((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	// Handle when the form submit button is clicked
	const handleClick = (e) => {
		// Validate the form
		ValidateForm(inputs, setError);
	};

	// Handle when the form is submitted
	const handleSubmit = async (e) => {
		// Prevent the default form submission
		e.preventDefault();
	};

	// Declare a hook to handle the input focus
	useEffect(() => {
		// Handle form input focus
		HandleFormInputFocus(
			isFocused,
			[currentPasswordRef, newEmailRef],
		);

		// Handle form input errors
		HandleFormInputError(
			error,
			[currentPasswordError, newEmailError, formErrors],
		);
	}, [isFocused, error]);


	return (
		<form className="change_password_form" onSubmit={handleSubmit}>
			<div className="form_group">
				<label htmlFor="currentPassword">
					Current password
				</label>
				<div className="form_control"
					onFocus={handleFocus}
					onBlur={handleBlur}
					ref={currentPasswordRef}>
					<input type="password" id="currentPassword"
						name="currentPassword"
						autoComplete='current-password'
						placeholder='Your current password'
						value={currentPassword}
						onChange={handleChange} />
				</div>
				<ul className="form_field_errors"
					ref={currentPasswordError}>
					{error.currentPassword && <li>Field required</li>}
				</ul>
			</div>
			<div className="form_group">
				<label htmlFor="newEmail">
					New email
				</label>
				<div className="form_control"
					onFocus={handleFocus}
					onBlur={handleBlur}
					ref={newEmailRef}>
					<input type="email" id="newEmail"
						name="newEmail"
						autoComplete='new-email'
						placeholder='Your new email'
						value={newEmail}
						onChange={handleChange} />
				</div>
				<ul className="form_field_errors"
					ref={newEmailError}>
					{error.newEmail && <li>Field required</li>}
				</ul>
			</div>
			<ul className="form_errors"
				ref={formErrors}>
				{error.formError && <li>{error.message}</li>}
			</ul>
			<div className="change_password_submit">
				<ChangeEmailConfirm onClick={handleClick} />
			</div>
		</form>
	);
};

export default ChangeEmailForm;