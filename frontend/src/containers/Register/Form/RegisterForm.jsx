// Import React
import { React, useEffect, useState, useRef } from 'react';

// Import the navigate hook from react-router-dom
import { useNavigate } from 'react-router-dom';

// Import the dispatch and selector hooks
import { useDispatch, useSelector } from 'react-redux';

// Import the register & reset actions
import { register, reset } from '../../../features/auth/authSlice';

// Import the register button for use in the register form
import RegisterButton from '../Buttons/RegisterButton.jsx';

// Import custom form validation functions
import {
    ValidateRegistrationForm,
    HandleFormInputFocus,
    HandleFormInputError,
} from './Functions/ValidateRegisterForm.js';

const RegisterForm = () => {
    // Create a ref to the input fields
    const emailFocus = useRef(null),
        passwordFocus = useRef(null),
        confirmPasswordFocus = useRef(null);

    // Create refs for the various input and form errors
    const emailError = useRef(null),
        passwordError = useRef(null),
        confirmPasswordError = useRef(null),
        formErrors = useRef(null);

    // Set the state for the form inputs
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
    const { email, password, confirmPassword } = inputs;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isError, isSuccess, message } = useSelector(
        (state) => state.auth);

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
    }

    // Handle when the form button is clicked
    const handleClick = async () => {
        // Check if the form inputs are empty
        ValidateRegistrationForm(inputs, setError);
    }

    // Handle when the form is submitted
    const handleSubmit = async (e) => {
        // Prevent the default form submission
        e.preventDefault();

        // Check if the registration process returned an error
        if (password !== confirmPassword) {
            setError((prevState) => ({
                ...prevState,
                passwordMisMatch: true,
                message: 'Passwords do not match',
            }));
        }
        else {
            // Dispatch the register action
            dispatch(register({ email, password }));
        }
    }


    // React hook to handle different effects
    useEffect(() => {
        // Handle form input focus
        HandleFormInputFocus(
            isFocused,
            [emailFocus, passwordFocus, confirmPasswordFocus],
        );

        // Handle setting the for input validation errors
        HandleFormInputError(
            error,
            [emailError, passwordError, confirmPasswordError, formErrors],
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
        <div className="register_form">
            <div className="form_header">
                <h2>Registration</h2>
            </div>
            <div className="form_body">
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
                            ref={emailError}>
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
                            ref={passwordError}>
                            {error.password && <li>Field required</li>}
                        </ul>
                    </div>
                    <div className="form_group">
                        <label htmlFor="confirmpassword">
                            Confirm Password
                        </label>
                        <div className="form_control"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            ref={confirmPasswordFocus}>
                            <input type="password"
                                id='confirmPassword'
                                name='confirmPassword'
                                value={confirmPassword}
                                autoComplete='current-password'
                                placeholder='Your password'
                                onChange={handleChange} />
                        </div>
                        <ul className="form_field_errors"
                            ref={confirmPasswordError}>
                            {error.confirmPassword && <li>Field required</li>}
                        </ul>
                    </div>
                    <ul className="form_errors"
                        ref={formErrors}>
                        {error.formError && <li>{error.message}</li>}
                    </ul>
                    <div className="register__actions">
                        <RegisterButton onClick={handleClick} />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterForm