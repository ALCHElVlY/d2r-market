// Built-in imports
import { useState } from "react";

// External imports
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Internal imports
import { ChangeEmailForm, ChangePasswordForm } from "../index";
import {
  RemoveAccount,
  ConfirmRemoveAccount,
  CancelRemoveAccount,
} from "../Buttons/index.js";
import LinkBlocks from "../../components/UserSettings/LinkBlocks.jsx";
import { deleteUser, reset } from "../../app/reducers/auth/authSlice";
import { resetOAuthCredentials } from "../../app/reducers/oauth/oauthSlice.js";

const ChangeEmail = () => {
  return (
    <div className="change_email py-4 col-12 col-md-6">
      <div className="row">
        <div className="col">
          <h2>
            <span className="header_lightened">Change email</span>
          </h2>
        </div>
        <div className="col-12">
          <ChangeEmailForm />
        </div>
      </div>
    </div>
  );
};
const ChangePassword = () => {
  return (
    <div className="change_password py-4 col-12 col-md-6">
      <div className="row">
        <div className="col">
          <h2>
            <span className="header_lightened">Change password</span>
          </h2>
        </div>
        <div className="col-12">
          <ChangePasswordForm />
        </div>
      </div>
    </div>
  );
};
const LinkAccounts = () => {
  return (
    <div className="linked_accounts py-4 col-12 col-md-6">
      <div className="row">
        <div className="col-12">
          <h2>
            <span className="header_lightened">Linked accounts</span>
          </h2>
        </div>
        <LinkBlocks />
      </div>
    </div>
  );
};
const AccountRemoval = (props) => {
  const { pending, onCancel, onConfirm } = props;
  const HEADER = () => {
    return (
      <div className="col-12">
        <h2>
          <span className="header_lightened">Account removal</span>
        </h2>
      </div>
    );
  };
  const PRE_PENDING_TEXT = () => {
    return (
      <div className="col-12 col-md-8 mb-3">
        <p>
          Your Account and all related data will be deleted within a few
          minutes.
          <br />
          After this it will be impossible to restore your account.
          <br />
          If you want to continue, click the button to the right and confirm
          your request.
        </p>
      </div>
    );
  };
  const POST_PENDING_TEXT = () => {
    return (
      <div className="confirm_removal col-6">
        Are you sure you want to remove your account?
      </div>
    );
  };
  const PRE_PENDING_REMOVAL = () => {
    return (
      <div className="confirm_removal col-6">
        <CancelRemoveAccount onClick={onCancel} />
        <ConfirmRemoveAccount onClick={onConfirm} />
      </div>
    );
  };
  const POST_PENDING_REMOVAL = () => {
    return (
      <div className="removal_button col-12 col-md-4">
        <RemoveAccount onClick={props.onClick} />
      </div>
    );
  };

  return (
    <div className="row account_removal py-4">
      <HEADER />
      <div className="col-12">
        <div className="row fixed_height">
          {!pending ? <PRE_PENDING_TEXT /> : <POST_PENDING_TEXT />}
          {pending ? <PRE_PENDING_REMOVAL /> : <POST_PENDING_REMOVAL />}
        </div>
      </div>
    </div>
  );
};
const SettingsContent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { linkedAccounts } = useSelector((state) => state.oauth);

  // State variables
  const [pendingRemoval, setPendingRemoval] = useState(false);

  // Event handlers
  const handleClick = () => {
    setPendingRemoval(true);
  };
  const handleCancelRemoval = () => {
    setPendingRemoval(false);
  };
  const handleConfirmRemoval = async () => {
    // Delete the users data from the database
    await dispatch(deleteUser(user));
    // Delete the oauth credentials
    await dispatch(resetOAuthCredentials(linkedAccounts));
    // Redirect the user to the home page
    await navigate("/");
    // Reset the state
    await dispatch(reset());
  };

  return (
    <div className="container settings_content">
      <div className="row">
        <ChangePassword />
        <LinkAccounts />
      </div>
      <div className="row">
        <ChangeEmail />
      </div>
      <div className="row b-outline mx-0"></div>
      <AccountRemoval
        pending={pendingRemoval}
        onClick={handleClick}
        onCancel={handleCancelRemoval}
        onConfirm={handleConfirmRemoval}
      />
    </div>
  );
};

export default SettingsContent;
