// Import React
import { React, useEffect, useState, useRef } from 'react';

// Import the navigate hook from react-router-dom
import { useNavigate } from 'react-router-dom';

// Import the dispatch and selector hooks
import { useDispatch, useSelector } from 'react-redux';

// Import the login & reset actions
import { login, reset } from '../../../features/auth/authSlice';

// Import link to route to the pages in the navbar
import { Link } from 'react-router-dom';

// Import the login button
import LoginButton from '../Buttons/LoginButton.jsx';

// Import custom form validation functions
import {
    ValidateLoginForm,
    HandleFormInputFocus,
    HandleFormInputError,
} from './Functions/ValidateLoginForm.js';

const LoginForm = () => {
    // Declare the dispatch variable
    const dispatch = useDispatch();
    // Declare the navigate variable
    const navigate = useNavigate();

    const { isError, isSuccess, message } = useSelector(
        (state) => state.auth);

    // Create a ref to email and password focus
    const emailFocus = useRef(null),
        passwordFocus = useRef(null);

    // Create a ref to email and password validation errors
    const emailInputRef = useRef(null),
        passwordInputRef = useRef(null),
        formErrors = useRef(null);

    // Set the state for the form inputs
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    });
    const { email, password } = inputs;

    // Set the state for the input focus
    const [isFocused, setIsFocused] = useState({});

    // Set the state for the input validation errors
    const [error, setError] = useState({
        email: false,
        password: false,
        formError: false,
        message: '',
    });

    // Handle when the input fields are focused
    const handleFocus = (e) => {
        setIsFocused((prevState) => ({
            ...prevState,
            [e.target.name]: true,
        }));
    };

    // Handle when the input fields are blurred
    const handleBlur = (e) => {
        setIsFocused((prevState) => ({
            ...prevState,
            [e.target.name]: false,
        }));
    };

    // Handle when the input fields are changed
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    // Handle when the form button is clicked
    const handleClick = async () => {
        // Check if the email and password inputs are empty
        ValidateLoginForm(inputs, setError);
    }

    // Handle when the form is submitted
    const handleSubmit = async (e) => {
        // Prevent the default form submission
        e.preventDefault();

        // Check if any form errors exist
        const hasError = Object.values(error).some(value => value === true);
        switch (hasError) {
            case true:
                break;
            default:
                // Dispatch the login action
                dispatch(login({ email, password }));
        }
    }

    // React hook to handle different effects
    useEffect(() => {
        // Handle form input focus
        HandleFormInputFocus(
            isFocused,
            [emailFocus, passwordFocus],
        );

        // Handle setting the email and password validation errors
        HandleFormInputError(
            error,
            [emailInputRef, passwordInputRef, formErrors],
        );

        if (isError) {
            setError((prevState) => ({
                ...prevState,
                formError: true,
                message: message,
            }));
        }
        if (isSuccess) {
            // Redirect to the home page
            navigate('/');
        }

        // Reset the state
        dispatch(reset());
    }, [isFocused, error, isError, isSuccess, message, navigate, dispatch]);

    return (
        <div className="login_form">
            <div className="form_row_1">
                <div className="form_row_1_header">
                    <h2>Login through</h2>
                </div>
                <div className='flex_evenly'>
                    <Link to={'#'}>
                        <img src="https://imgur.com/yJwXBdC.png" alt="login-steam" />
                    </Link>
                    <Link to={'#'}>
                        <img src="https://imgur.com/qQaBHlr.png" alt="login-xbox" />
                    </Link>
                    <Link to={'#'}>
                        <img src="https://imgur.com/B7jUAd0.png" alt="login-discord" />
                    </Link>
                </div>
            </div>
            <div className="form_outline"></div>
            <div className="form_row_2">
                <div className="form_row_2_header">
                    <h2>Or Login with</h2>
                </div>
                <div className="form_row_2_body">
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
                            <Link to={'#'} className='forgotpass'>
                                Forgot password?
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
            <div className="form_outline"></div>
            <div className="form_row_3">
                <div className="form_row_3_body">
                    <Link to={'/register'} className='register'>
                        Or register
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LoginForm