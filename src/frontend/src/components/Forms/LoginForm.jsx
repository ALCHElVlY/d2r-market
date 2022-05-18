// Builtin imports
import {
	useEffect,
	useState,
	useRef,
} from 'react';

// External imports
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

// Internal imports
import { login, reset } from '../../features/auth/authSlice';
import { LoginButton } from '../Buttons//index.js';
import {
	ValidateForm,
	HandleInputFocus,
	HandleFormError,
} from '../../features/forms/ValidateForm.js';

const LoginForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const BNET_CLIENT_ID = '788f5747158048ce916b63abec815a78';
	const BNET_AUTH_ENDPOINT = 'https://us.battle.net/oauth/authorize';
	const redirectUri = 'http://localhost:5002/api/oauth/blizzard';
	const scopes = ['openid'];
	const scopesString = encodeURIComponent(scopes.join(' '));
    const redirectUriString = encodeURIComponent(redirectUri);
	const bnetAuthorizeUrl
        = `${BNET_AUTH_ENDPOINT}?client_id=${BNET_CLIENT_ID}&scope=${scopesString}&redirect_uri=${redirectUriString}&response_type=code`;
	

	// Reference variables
	const emailFocus = useRef(null),
		passwordFocus = useRef(null);
	const emailInputRef = useRef(null),
		passwordInputRef = useRef(null),
		formErrors = useRef(null);

	// State variables
	const [inputs, setInputs] = useState({
		email: '',
		password: '',
	});
	const { email, password } = inputs;
	const [isFocused, setIsFocused] = useState({});
	const [isMounted, setIsMounted] = useState(null);
	const [didSubmit, setDidSubmit] = useState(false);
	const { isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.auth);
	const [error, setError] = useState({
		email: false,
		password: false,
		formError: false,
		message: '',
	});

	// Event handlers
	const handleFocus = async (e) => {
		await setIsFocused((prevState) => ({
			...prevState,
			[e.target.name]: true,
		}));
	};
	const handleBlur = async (e) => {
		await setIsFocused((prevState) => ({
			...prevState,
			[e.target.name]: false,
		}));
	};
	const handleChange = async (e) => {
		await setInputs((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};
	const handleClick = async () => {
		await ValidateForm(inputs, setError);
		setIsMounted('loginForm');
	};
	const handleBnetOauth = async () => {
		console.log(process.env.REACT_APP_BNET_CLIENT_ID);
		window.location.replace(bnetAuthorizeUrl);
	};
	const handleSubmit = async (e) => {
		// Prevent the default form submission
		e.preventDefault();

		// Check if there are any input errors
		const inputErrors = Object.entries(error).filter(key =>
			key.includes('email') || key.includes('password'));
		const hasInputError = inputErrors.some(key => key[1] === true);
		switch (hasInputError) {
			case true:
				await setDidSubmit(false);
				break;
			default:
				await dispatch(login({ email, password }));
				await setDidSubmit(true);
		}
	};

	// React hook to handle form input focus
	useEffect(() => {
		(async () => {
			HandleInputFocus(
				isFocused,
				[emailFocus, passwordFocus],
			);
		})();
	}, [isFocused]);

	// React hook to handle form errors
	useEffect(() => {
		(async () => {
			await HandleFormError(
				isMounted,
				error,
				[emailInputRef, passwordInputRef, formErrors],
			);

			if (isError) {
				// Set the form error state
				setError((prevState) => ({
					...prevState,
					formError: true,
					message: message,
				}));
			}
			if (isSuccess) {
				await navigate('/');
				// Reset the state
				await dispatch(reset());
			}

			// Reset the state
			await dispatch(reset());
		})();
	}, [
		isMounted, didSubmit,
		// Form state
		isLoading, isError, isSuccess, message, error,
		// Functions
		navigate, dispatch,
	]);

	return (
		<div className="col-12 col-lg-6">
			<div className="row py-4">
				<div className="pb-2 col-12">
					<h2>Login through</h2>
				</div>
				<div className='flex_evenly col-12'>
					<Link to="#" onClick={handleBnetOauth}>
						<img src="assets/images/OAuth-Icons/OAuth_Icon_Blizzard.webp" alt="login-blizzard" />
					</Link>
					<Link to="#">
						<img src="assets/images/OAuth-Icons/OAuth_Icon_Xbox.webp" alt="login-xbox" />
					</Link>
					<Link to="#">
						<img src="assets/images/OAuth-Icons/OAuth_Icon_Discord.webp" alt="login-discord" />
					</Link>
				</div>
			</div>
			<div className="row b-outline mx-0"></div>
			<div className="row py-4">
				<div className="pb-2 col-12">
					<h2>Or Login with</h2>
				</div>
				<div className="col-12">
					<form onSubmit={handleSubmit}>
						<div className="form_group">
							<label htmlFor="email">
								Email address
							</label>
							<div className="form_control"
								onFocus={handleFocus}
								onBlur={handleBlur}
								ref={emailFocus}>
								<input type="email"
									id='email'
									name='email'
									value={email}
									autoComplete='email'
									placeholder='Your email'
									onChange={handleChange} />
							</div>
							<ul className="form_field_errors"
								ref={emailInputRef}>
								{error.email && <li>Field required</li>}
							</ul>
						</div>
						<div className="form_group">
							<label htmlFor="password">
								Password
							</label>
							<div className="form_control"
								onFocus={handleFocus}
								onBlur={handleBlur}
								ref={passwordFocus}>
								<input type="password"
									id='password'
									name='password'
									value={password}
									autoComplete='current-password'
									placeholder='Your password'
									onChange={handleChange} />
							</div>
							<ul className="form_field_errors"
								ref={passwordInputRef}>
								{error.password && <li>Field required</li>}
							</ul>
						</div>
						<ul className="form_errors"
							ref={formErrors}>
							{error.formError && <li>{error.message}</li>}
						</ul>
						<div className="login__actions">
							<LoginButton onClick={handleClick} />
							<Link to="#" className='forgotpass'>
								Forgot password?
							</Link>
						</div>
					</form>
				</div>
			</div>
			<div className="row b-outline mx-0"></div>
			<div className="row py-4">
				<div className="col-12">
					<Link to="/register" className='register'>
						Or register
					</Link>
				</div>
			</div>
		</div>
	);
};

export default LoginForm;