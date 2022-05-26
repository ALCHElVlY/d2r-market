// Builtin imports
import { useState, useRef, useEffect } from "react";

// External imports
import { useDispatch, useSelector } from "react-redux";

// Internal imports
import { ChangeEmailConfirm } from "../Buttons/index.js";
import {
  ValidateForm,
  HandleInputFocus,
  HandleFormError,
} from "../../features/forms/ValidateForm.js";
import { ToastNotification } from "../index";
import { updateUser, reset } from "../../app/reducers/auth/authSlice";

const ChangeEmailForm = () => {
  const dispatch = useDispatch();
  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth,
  );

  // Reference variables
  const currentPasswordRef = useRef(null),
    newEmailRef = useRef(null),
    formErrors = useRef(null);
  const currentPasswordError = useRef(null),
    newEmailError = useRef(null);

  // State variables
  const [inputs, setInputs] = useState({
    currentPassword: "",
    newEmail: "",
  });
  const { currentPassword, newEmail } = inputs;
  const [isFocused, setIsFocused] = useState({});
  const [isMounted, setIsMounted] = useState(null);
  const [didSubmit, setDidSubmit] = useState(false);
  const [error, setError] = useState({
    currentPassword: false,
    newEmail: false,
    formError: false,
    message: "",
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
    setIsMounted("changeEmailForm");
  };
  const handleSubmit = async (e) => {
    // Prevent the default form submission
    e.preventDefault();

    // Check if there are any input errors
    const inputErrors = Object.entries(error).filter(
      (key) => key.includes("currentPassword") || key.includes("newEmail"),
    );
    const hasInputError = inputErrors.some((key) => key[1] === true);
    if (hasInputError) return setDidSubmit(false);

    // Dispatch the login action
    await dispatch(updateUser({ user, data: inputs }));
    await setDidSubmit(true);
  };

  // React hook to handle the form input focus
  useEffect(() => {
    HandleInputFocus(isFocused, [currentPasswordRef, newEmailRef]);
  }, [isFocused]);

  // React hook to handle the form errors
  useEffect(() => {
    (async () => {
      await HandleFormError(isMounted, error, [
        currentPasswordError,
        newEmailError,
        formErrors,
      ]);

      if (isError) {
        setError((prevState) => ({
          ...prevState,
          formError: true,
          message: message,
        }));
      }

      if (isMounted && isSuccess) {
        ToastNotification("success", "Email updated successfully", {
          position: "bottom-left",
        });

        // Reset the form
        setInputs((prevState) => ({
          ...prevState,
          currentPassword: "",
          newEmail: "",
        }));

        // Reset the form errors
        setError((prevState) => ({
          ...prevState,
          formError: false,
          message: "",
        }));

        // Reset the state
        await dispatch(reset());
        formErrors.current.classList.remove("visible");
      }

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
    dispatch,
  ]);

  return (
    <form className="change_password_form" onSubmit={handleSubmit}>
      <div className="form_group hidden">
        <input
          type="text"
          id="form2Username"
          name="form2Username"
          autoComplete="username"
          hidden={true}
        />
      </div>
      <div className="form_group">
        <label htmlFor="cEmail_CurrentPassword">Current password</label>
        <div
          className="form_control"
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={currentPasswordRef}>
          <input
            type="password"
            id="cEmail_CurrentPassword"
            name="currentPassword"
            autoComplete="current-password"
            placeholder="Your current password"
            value={currentPassword}
            onChange={handleChange}
          />
        </div>
        <ul className="form_field_errors" ref={currentPasswordError}>
          {error.currentPassword && <li>Field required</li>}
        </ul>
      </div>
      <div className="form_group">
        <label htmlFor="newEmail">New email</label>
        <div
          className="form_control"
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={newEmailRef}>
          <input
            type="email"
            id="newEmail"
            name="newEmail"
            autoComplete="new-email"
            placeholder="Your new email"
            value={newEmail}
            onChange={handleChange}
          />
        </div>
        <ul className="form_field_errors" ref={newEmailError}>
          {error.newEmail && <li>Field required</li>}
        </ul>
      </div>
      <ul className="changeEmail_form_errors" ref={formErrors}>
        {error.formError && <li>{error.message}</li>}
      </ul>
      <div className="change_password_submit">
        <ChangeEmailConfirm onClick={handleClick} />
      </div>
    </form>
  );
};

export default ChangeEmailForm;
