// External imports
import { NavLink } from 'react-router-dom';

// Internal imports
import RemoveAccount from '../../containers/UserProfile/Settings/Buttons/RemoveAccount.jsx';
import ChangeEmailForm from '../../containers/UserProfile/Settings/Forms/ChangeEmailForm.jsx';
import ChangePasswordForm from '../../containers/UserProfile/Settings/Forms/ChangePasswordForm.jsx';
import LinkBlocks from '../../components/UserSettings/LinkBlocks.jsx';


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
                        <div className="col-12 col-md-8 mb-3">
                            <p>
                                Your Account and all related data will be deleted in a few minutes, including
                                your orders, trade reviews, and reputation points.
                                <br />
                                After this it will be impossible to restore your account.
                                <br />
                                If you want to continue, click the button to the right and confirm your
                                request.
                            </p>
                        </div>
                        <div className="removal_button col-12 col-md-4">
                            <RemoveAccount />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserSettings;
export { SettingsContent };