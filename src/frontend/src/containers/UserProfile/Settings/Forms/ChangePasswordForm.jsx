// Builtin imports
import { useState, useRef, useEffect } from 'react';

// Internal imports
import ChangePasswordConfirm from '../Buttons/ChangePasswordConfirm.jsx';
import {
	ValidateForm,
	HandleFormInputFocus,
	HandleFormInputError,
} from './Functions/ValidateChangePasswordForm.js';

const ChangePasswordForm = () => {
	// Create a ref to the input fields
	const currentPasswordRef = useRef(null),
		newPasswordRef = useRef(null),
		confirmNewPasswordRef = useRef(null),
		formErrors = useRef(null);

	// Create refs for the various input and form errors
	const currentPasswordError = useRef(null),
		newPasswordError = useRef(null),
		confirmNewPasswordError = useRef(null);

	// Set the state for the form inputs
	const [inputs, setInputs] = useState({
		currentPassword: '',
		newPassword: '',
		confirmNewPassword: '',
	});
	const {
		currentPassword,
		newPassword,
		confirmNewPassword,
	} = inputs;

	// Set the state for the input focus
	const [isFocused, setIsFocused] = useState({});

	// Set the state for the input validation errors
	const [error, setError] = useState({
		email: false,
		password: false,
		confirmPassword: false,
		passwordMisMatch: false,
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

	// Handle when the form is submitted
	const handleSubmit = async (e) => {
		// Prevent the default form submission
		e.preventDefault();

		// Check if the registration process returned an error
		if (error) return;
		if (newPassword !== confirmNewPassword) {
			setError((prevState) => ({
				...prevState,
				passwordMisMatch: true,
				message: 'Passwords do not match',
			}));
		}
		else {
			// Dispatch the register action
			// eslint-disable-next-line no-undef
			alert(
				`Your new password is: ${newPassword}`,
			);
		}
	};

	// Handle the buttom click on the form
	const handleClick = () => {
		// Validate the form input fields
		ValidateForm(inputs, setError);
	};

	// Declare a hook to handle the input focus
	useEffect(() => {
		// Handle form input focus
		HandleFormInputFocus(
			isFocused,
			[currentPasswordRef, newPasswordRef, confirmNewPasswordRef],
		);

		// Handle form input error
		HandleFormInputError(
			error,
			[currentPasswordError, newPasswordError, confirmNewPasswordError, formErrors],
		);
	}, [isFocused, error]);

	return (
		<form className="change_password_form"
			onSubmit={handleSubmit}>
			<div className="form_group">
				<label htmlFor="currentPassword">
                    Current password
				</label>
				<div className="form_control"
					onFocus={handleFocus}
					onBlur={handleBlur}
					ref={currentPasswordRef}>
					<input type="password" id="currentPassword"
						name='currentPassword'
						autoComplete="current-password"
						placeholder="Your current password"
						value={currentPassword}
						onChange={handleChange} />
				</div>
				<ul className="form_field_errors"
					ref={currentPasswordError}>
					{error.currentPassword && <li>Field required</li>}
				</ul>
			</div>
			<div className="form_group">
				<label htmlFor="newPassword">
                    New password
				</label>
				<div className="form_control"
					onFocus={handleFocus}
					onBlur={handleBlur}
					ref={newPasswordRef}>
					<input type="password" id="newPassword"
						name='newPassword'
						autoComplete="new-password"
						placeholder="Your new password"
						value={newPassword}
						onChange={handleChange} />
				</div>
				<ul className="form_field_errors"
					ref={newPasswordError}>
					{error.newPassword && <li>Field required</li>}
				</ul>
			</div>
			<div className="form_group">
				<label htmlFor="confirmNewPassword">
                    Confirm new password
				</label>
				<div className="form_control"
					onFocus={handleFocus}
					onBlur={handleBlur}
					ref={confirmNewPasswordRef}>
					<input type="password" id="confirmNewPassword"
						name='confirmNewPassword'
						placeholder="Confirm new password"
						value={confirmNewPassword}
						onChange={handleChange} />
				</div>
				<ul className="form_field_errors"
					ref={confirmNewPasswordError}>
					{error.confirmNewPassword && <li>Field required</li>}
				</ul>
			</div>
			<ul className="form_errors"
				ref={formErrors}>
				{error.formError && <li>{error.message}</li>}
			</ul>

			<ChangePasswordConfirm className="change_password_submit"
				onClick={handleClick} />
		</form>
	);
};

export default ChangePasswordForm;