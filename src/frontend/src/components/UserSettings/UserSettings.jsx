// Built-in imports
import { useState } from 'react';

// External imports
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Internal imports
import CancelRemoveAccount from '../../containers/UserProfile/Settings/Buttons/CancelRemoveAccount.jsx';
import ChangeEmailForm from '../../containers/UserProfile/Settings/Forms/ChangeEmailForm.jsx';
import ChangePasswordForm from '../../containers/UserProfile/Settings/Forms/ChangePasswordForm.jsx';
import ConfirmRemoveAccount from '../../containers/UserProfile/Settings/Buttons/ConfirmRemoveAccount.jsx';
import LinkBlocks from '../../components/UserSettings/LinkBlocks.jsx';
import { deleteUser, reset } from '../../features/auth/authSlice';
import RemoveAccount from '../../containers/UserProfile/Settings/Buttons/RemoveAccount.jsx';


const UserSettings = () => {
    const handleOnClick = (e) => {
        // Check if the class includes disabled
        if (e.target.classList.contains('disabled_link')) {
            // Prevent navigation
            e.preventDefault();
        }
    };


    return (
        <div className="settings_tab">
            <ul className='tabs'>
                <li>
                    <NavLink to="/settings/account" className={({ isActive }) => isActive
                        ? 'smartlink active'
                        : 'smartlink'}>
                        Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/settings/#" className={({ isActive }) => isActive
                        ? 'smartlink active disabled_link'
                        : 'smartlink disabled_link'}
                        onClick={handleOnClick}>
                        Patronage
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/settings/#" className={({ isActive }) => isActive
                        ? 'smartlink active disabled_link'
                        : 'smartlink disabled_link'}
                        onClick={handleOnClick}>
                        Notifications
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}
const SettingsContent = () => {
    // Get the user from state
	const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Declre a state variable for the account removal confirmation
    const [pendingRemoval, setPendingRemoval] = useState(false);

    // Handle when the RemoveAccount button is clicked
    const handleClick = () => {
        // Set the state to true
        setPendingRemoval(true);
    };

    // Handle when the user cancels the account removal process
    const handleCancelRemoval = () => {
        setPendingRemoval(false);
    };

    // Handle when the user confirms the account removal process
    const handleConfirmRemoval = async () => {
        // Delete the users data from the database
        await dispatch(deleteUser(user));

        // Redirect the user to the home page
        await navigate('/');

        // Reset the state
        await dispatch(reset());
    };


    return (
        <div className="container settings_content">
            <div className="row">
                <div className="change_password py-4 col-12 col-md-6">
                    <div className="row">
                        <div className="col">
                            <h2>
                                <span className="header_lightened">
                                    Change password
                                </span>
                            </h2>
                        </div>
                        <div className="col-12">
                            <ChangePasswordForm />
                        </div>
                    </div>
                </div>
                <div className="linked_accounts py-4 col-12 col-md-6">
                    <div className="row">
                        <div className="col-12">
                            <h2>
                                <span className="header_lightened">
                                    Linked accounts
                                </span>
                            </h2>
                        </div>
                        <LinkBlocks />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="change_email py-4 col-12 col-md-6">
                    <div className="row">
                        <div className="col">
                            <h2>
                                <span className="header_lightened">
                                    Change email
                                </span>
                            </h2>
                        </div>
                        <div className="col-12">
                            <ChangeEmailForm />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row b-outline mx-0"></div>
            <div className="row account_removal py-4">
                <div className="col-12">
                    <h2>
                        <span className='header_lightened'>
                            Account removal
                        </span>
                    </h2>
                </div>
                <div className="col-12">
                    <div className="row fixed_height">
                        {pendingRemoval
                            ? <div className='confirm_removal col-6'>
                                Are you sure you want to remove your account?    
                            </div>
                            : <div className="col-12 col-md-8 mb-3">
                                <p>
                                    Your Account and all related data will be deleted in a few minutes, including
                                    your orders, trade reviews, and reputation points.
                                    <br />
                                    After this it will be impossible to restore your account.
                                    <br />
                                    If you want to continue, click the button to the right and confirm your
                                    request.
                                </p>
                            </div>}
                        {pendingRemoval
                            ? <div className='confirm_removal col-6'>
                                <CancelRemoveAccount onClick={handleCancelRemoval} />
                                <ConfirmRemoveAccount onClick={handleConfirmRemoval} />
                            </div>
                            : <div className="removal_button col-12 col-md-4">
                                <RemoveAccount onClick={handleClick} />
                            </div>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserSettings;
export { SettingsContent };