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
		newEmailRef = useRef(null);

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

	// Declare a hook to handle the input focus
	useEffect(() => {
		// Handle form input focus
		HandleFormInputFocus(
			isFocused,
			[currentPasswordRef, newEmailRef],
		);
	}, [isFocused]);


	return (
		<form action="" className="change_password_form">
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
			</div>

			<ChangeEmailConfirm className="change_password_submit" />
		</form>
	);
};

export default ChangeEmailForm;