// Builtin imports
import { useState, useRef, useEffect } from 'react';

// External imports
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

// Internal imports
import {
	ChangePasswordConfirm,
} from '../Buttons/index.js';
import {
	ValidateForm,
	HandleInputFocus,
	HandleFormError,
} from '../../features/forms/ValidateForm.js';
import { updateUser, reset } from '../../features/auth/authSlice';

const ChangePasswordForm = () => {
	const dispatch = useDispatch();
	const { user, isError, isSuccess, message } = useSelector(
		(state) => state.auth);

	// Reference variables
	const currentPasswordRef = useRef(null),
		newPasswordRef = useRef(null),
		confirmNewPasswordRef = useRef(null),
		formErrors = useRef(null);
	const currentPasswordError = useRef(null),
		newPasswordError = useRef(null),
		confirmNewPasswordError = useRef(null);

	// State variables
	const [isFocused, setIsFocused] = useState({});
	const [didSubmit, setDidSubmit] = useState(false);
	const [isMounted, setIsMounted] = useState(null);
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
	const [error, setError] = useState({
		currentPassword: false,
		newPassword: false,
		confirmNewPassword: false,
		formError: false,
		message: '',
	});

	// Event handlers
	const handleFocus = (e) => {
		setIsFocused(() => ({
			...isFocused,
			[e.target.name]: true,
		}));
	};
	const handleBlur = (e) => {
		setIsFocused(() => ({
			...isFocused,
			[e.target.name]: false,
		}));
	};
	const handleChange = (e) => {
		setInputs((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};
	const handleClick = async () => {
		await ValidateForm(inputs, setError);
		setIsMounted('changePasswordForm');

		// Handle if the passwords don't match
		if (newPassword !== confirmNewPassword) {
			return setError((prevState) => ({
				...prevState,
				formError: true,
				message: 'Passwords do not match',
			}));
		}
		else {
			setError((prevState) => ({
				...prevState,
				formError: false,
				message: '',
			}));
		}
	};
	const handleSubmit = async (e) => {
		// Prevent the default form submission
		e.preventDefault();

		// Check if there are any input errors
		const inputErrors = Object.entries(error).filter(key =>
			key.includes('currentPassword') || key.includes('newPassword') ||
			key.includes('confirmNewPassword') || key.includes('formError'));
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
			[currentPasswordRef, newPasswordRef, confirmNewPasswordRef],
		);
	}, [isFocused]);

	// React hook to handle the form errors
	useEffect(() => {
		(async () => {
			

			await HandleFormError(
				isMounted,
				error,
				[currentPasswordError, newPasswordError, confirmNewPasswordError, formErrors],
			);

			if (isError) {
				setError((prevState) => ({
					...prevState,
					formError: true,
					message: message,
				}));
			}

			if (isMounted && isSuccess) {
				toast.success('Password updated successfully', {
					position: 'bottom-right',
				});

				// Reset the form
				setInputs((prevState) => ({
					...prevState,
					currentPassword: '',
					newPassword: '',
					confirmNewPassword: '',
				}));

				// Reset the form errors
				setError((prevState) => ({
					...prevState,
					formError: false,
					message: '',
				}));

				// Reset the state
				await dispatch(reset());
				formErrors.current.classList.remove('visible');
			}

			// Reset the state
			await dispatch(reset());
		})();
	}, [
		isMounted, didSubmit,
		// Form state
		isError, isSuccess, message, error,
		// Functions
		dispatch,
	]);


	return (
		<form className="change_password_form"
			onSubmit={handleSubmit}>
			<div className="form_group hidden">
				<input type="text" id="formUsername"
					name='formUsername'
					autoComplete='username'
					hidden={true} />
			</div>
			<div className="form_group">
				<label htmlFor="cPassword_CurrentPassword">
					Current password
				</label>
				<div className="form_control"
					onFocus={handleFocus}
					onBlur={handleBlur}
					ref={currentPasswordRef}>
					<input type="password" id="cPassword_CurrentPassword"
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
						autoComplete='new-password'
						placeholder="Confirm new password"
						value={confirmNewPassword}
						onChange={handleChange} />
				</div>
				<ul className="form_field_errors"
					ref={confirmNewPasswordError}>
					{error.confirmNewPassword && <li>Field required</li>}
				</ul>
			</div>
			<ul className="changePassword_form_errors"
				ref={formErrors}>
				{error.formError && <li>{error.message}</li>}
			</ul>

			<ChangePasswordConfirm className="change_password_submit"
				onClick={handleClick} />
		</form>
	);
};

export default ChangePasswordForm;