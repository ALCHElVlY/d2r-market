// Builtin imports
import { useEffect, useState, useRef } from "react";

// External imports
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Internal imports
import RegisterButton from "../Buttons/RegisterButton.jsx";
import {
  ValidateForm,
  HandleInputFocus,
  HandleFormError,
} from "../../features/forms/ValidateForm.js";
import { register, reset } from "../../app/reducers/auth/authSlice";

const FormHeader = () => {
  return (
    <div className="pb-2 col-12">
      <h2>Registration</h2>
    </div>
  );
};
const FormBody = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, isSuccess, message } = useSelector((state) => state.auth);

  // Reference variables
  const usernameFocus = useRef(null),
    emailFocus = useRef(null),
    passwordFocus = useRef(null),
    confirmPasswordFocus = useRef(null);
  const usernameError = useRef(null),
    emailError = useRef(null),
    passwordError = useRef(null),
    confirmPasswordError = useRef(null),
    formErrors = useRef(null);

  // State variables
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { username, email, password, confirmPassword } = inputs;
  const [isFocused, setIsFocused] = useState({});
  const [didSubmit, setDidSubmit] = useState(false);
  const [isMounted, setIsMounted] = useState(null);
  const [error, setError] = useState({
    username: false,
    email: false,
    password: false,
    confirmPassword: false,
    formError: false,
    message: "",
  });

  // Event handlers
  const handleFocus = async (e) => {
    await setIsFocused(() => ({
      ...isFocused,
      [e.target.name]: true,
    }));
  };
  const handleBlur = async (e) => {
    await setIsFocused(() => ({
      ...isFocused,
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
    setIsMounted("registerForm");

    if (password !== confirmPassword) {
      setError((prevState) => ({
        ...prevState,
        formError: true,
        message: "Passwords do not match",
      }));
    } else {
      setError((prevState) => ({
        ...prevState,
        formError: false,
        message: "",
      }));
    }
  };
  const handleSubmit = async (e) => {
    // Prevent the default form submission
    e.preventDefault();

    // Check if there are any input errors
    const inputErrors = Object.entries(error).filter(
      (key) =>
        key.includes("username") ||
        key.includes("email") ||
        key.includes("password") ||
        key.includes("confirmPassword") ||
        key.includes("formError"),
    );
    const hasInputError = inputErrors.some((key) => key[1] === true);
    switch (hasInputError) {
      case true:
        await setDidSubmit(false);
        break;
      default:
        await dispatch(register({ username, email, password }));
        await setDidSubmit(true);
    }
  };

  // React hook to handle input focus
  useEffect(() => {
    (async () => {
      HandleInputFocus(isFocused, [
        usernameFocus,
        emailFocus,
        passwordFocus,
        confirmPasswordFocus,
      ]);
    })();
  }, [isFocused]);

  // React hook to handle form errors
  useEffect(() => {
    (async () => {
      await HandleFormError(isMounted, error, [
        usernameError,
        emailError,
        passwordError,
        confirmPasswordError,
        formErrors,
      ]);

      if (isError) {
        // Set the form error state
        setError((prevState) => ({
          ...prevState,
          formError: true,
          message: message,
        }));
      }

      if (isSuccess) {
        // Reset the form
        setInputs((prevState) => ({
          ...prevState,
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        }));

        // Reset the form error state
        setError((prevState) => ({
          ...prevState,
          formError: false,
          message: "",
        }));

        // Reset the state
        await navigate("/");
      }

      // Reset the state
      await dispatch(reset());
    })();
  }, [
    isMounted,
    didSubmit,
    // Form state
    isError,
    isSuccess,
    message,
    error,
    // Functions
    navigate,
    dispatch,
  ]);

  return (
    <div className="col-12">
      <form onSubmit={handleSubmit}>
        <div className="form_group">
          <label htmlFor="username">Username</label>
          <div
            className="form_control"
            onFocus={handleFocus}
            onBlur={handleBlur}
            ref={usernameFocus}>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              autoComplete="text"
              placeholder="Your username"
              onChange={handleChange}
            />
          </div>
          <ul className="form_field_errors" ref={usernameError}>
            {error.username && <li>Field required</li>}
          </ul>
        </div>
        <div className="form_group">
          <label htmlFor="email">Email address</label>
          <div
            className="form_control"
            onFocus={handleFocus}
            onBlur={handleBlur}
            ref={emailFocus}>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              autoComplete="email"
              placeholder="Your email"
              onChange={handleChange}
            />
          </div>
          <ul className="form_field_errors" ref={emailError}>
            {error.email && <li>Field required</li>}
          </ul>
        </div>
        <div className="form_group">
          <label htmlFor="password">Password</label>
          <div
            className="form_control"
            onFocus={handleFocus}
            onBlur={handleBlur}
            ref={passwordFocus}>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              autoComplete="current-password"
              placeholder="Your password"
              onChange={handleChange}
            />
          </div>
          <ul className="form_field_errors" ref={passwordError}>
            {error.password && <li>Field required</li>}
          </ul>
        </div>
        <div className="form_group">
          <label htmlFor="confirmpassword">Confirm Password</label>
          <div
            className="form_control"
            onFocus={handleFocus}
            onBlur={handleBlur}
            ref={confirmPasswordFocus}>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              autoComplete="current-password"
              placeholder="Your password"
              onChange={handleChange}
            />
          </div>
          <ul className="form_field_errors" ref={confirmPasswordError}>
            {error.confirmPassword && <li>Field required</li>}
          </ul>
        </div>
        <ul className="form_errors" ref={formErrors}>
          {(error.passwordMismatch || error.formError) && (
            <li>{error.message}</li>
          )}
        </ul>
        <div className="register__actions">
          <RegisterButton onClick={handleClick} />
        </div>
      </form>
    </div>
  );
};
const RegisterForm = () => {
  return (
    <div className="col-12 col-lg-6">
      <div className="row">
        <FormHeader />
        <FormBody />
      </div>
    </div>
  );
};

export default RegisterForm;
