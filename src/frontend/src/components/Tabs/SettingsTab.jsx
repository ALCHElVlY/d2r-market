// External imports
import { NavLink } from 'react-router-dom';


const Account = () => {
    return (
        <li>
            <NavLink to="/settings/account"
            className={({ isActive }) => isActive
                ? 'smartlink active'
                : 'smartlink'}>
                Account
            </NavLink>
        </li>
    );
};
const Subscription = () => {
    return (
        <li>
            <NavLink to="/settings/subscription"
            className={({ isActive }) => isActive
                ? 'smartlink active'
                : 'smartlink'}>
                Patronage
            </NavLink>
        </li>
    );
};
const Notifications = () => {
    return (
        <li>
            <NavLink to="/settings/notifications"
            className={({ isActive }) => isActive
                ? 'smartlink active'
                : 'smartlink'}>
                Notifications
            </NavLink>
        </li>
    );
};
const SettingsTab = () => {
    return (
        <div className="settings_tab">
            <ul className='tabs'>
                <Account />
                <Subscription />
                <Notifications />
            </ul>
        </div>
    );
}

export default SettingsTab;