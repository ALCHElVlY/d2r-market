// Builtin imports
import { useState, useRef, useEffect } from 'react';

// External imports
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

// Internal imports
import {
	ChangeEmailConfirm,
} from '../Buttons/index.js';
import {
	ValidateForm,
	HandleInputFocus,
	HandleFormError,
} from '../../features/forms/ValidateForm.js';
import { updateUser, reset } from '../../features/auth/authSlice';

const ChangeEmailForm = () => {
	// Get the user from state
	const { user, isError, isSuccess, message } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

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

	// eslint-disable-next-line no-unused-vars
	const [didSubmit, setDidSubmit] = useState(false);

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
	const handleClick = async () => {
		await ValidateForm(inputs, setError);
	};

	// Handle when the form is submitted
	const handleSubmit = async (e) => {
		// Prevent the default form submission
		e.preventDefault();

		// Check if there are any input errors
		const inputErrors = Object.entries(error).filter(key => 
			key.includes('currentPassword') || key.includes('newEmail'));
		const hasInputError = inputErrors.some(key => key[1] === true);
		if (hasInputError) return setDidSubmit(false);

		// Dispatch the login action
		await dispatch(updateUser({ user, data: inputs }));
		await setDidSubmit(true);
	};

	// React hook to handle the form input focus
	useEffect(() => {
		HandleInputFocus(
			isFocused,
			[currentPasswordRef, newEmailRef],
		);
	}, [isFocused]);

	// React hook to handle the form errors
	useEffect(() => {
		HandleFormError(
			error,
			[currentPasswordError, newEmailError, formErrors],
		);

		if (isError) {
			setError((prevState) => ({
				...prevState,
				formError: true,
				message: message,
			}));
		}
		else if (isSuccess) {
			toast.success('Email updated successfully', {
				position: 'bottom-right',
			});

			// Reset the form
			setInputs((prevState) => ({
				...prevState,
				currentPassword: '',
				newEmail: '',
			}));

			// Reset the form errors
			setError((prevState) => ({
				...prevState,
				formError: false,
				message: '',
			}));
			formErrors.current.classList.remove('visible');

			dispatch(reset());
		}
	}, [error, isError, isSuccess, message, dispatch]);


	return (
		<form className="change_password_form" onSubmit={handleSubmit}>
			<div className="form_group hidden">
			<input type="text" id="form2Username"
				name='form2Username'
				autoComplete='username'
				hidden={true} />
			</div>
			<div className="form_group">
				<label htmlFor="cEmail_CurrentPassword">
					Current password
				</label>
				<div className="form_control"
					onFocus={handleFocus}
					onBlur={handleBlur}
					ref={currentPasswordRef}>
					<input type="password" id="cEmail_CurrentPassword"
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