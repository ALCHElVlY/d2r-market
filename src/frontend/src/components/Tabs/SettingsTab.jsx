// Built-in imports
import { useEffect, useRef } from "react";

// External imports
import { NavLink } from "react-router-dom";

const Account = () => {
  return (
    <li>
      <NavLink
        to="/settings/account"
        className={({ isActive }) =>
          isActive ? "smartlink active" : "smartlink"
        }>
        Account
      </NavLink>
    </li>
  );
};
const Subscription = ({ isDisabled, onClick }) => {
  // Reference variables
  const linkRef = useRef(null);

  // React hook to handle whether the subscription tab is disabled
  useEffect(() => {
    switch (isDisabled) {
      case true:
        linkRef.current?.classList.add("disabled_link");
        break;
      case false:
        linkRef.current?.classList.remove("disabled_link");
        break;
      default:
        break;
    }
  }, [isDisabled, linkRef]);

  return (
    <li>
      <NavLink
        to="/settings/subscription"
        ref={linkRef}
        onClick={onClick}
        className={({ isActive }) =>
          isActive ? "smartlink active" : "smartlink"
        }>
        Patronage
      </NavLink>
    </li>
  );
};
const Notifications = ({ isDisabled, onClick }) => {
  // Reference variables
  const linkRef = useRef(null);

  // React hook to handle whether the notifications tab is disabled
  useEffect(() => {
    switch (isDisabled) {
      case true:
        linkRef.current?.classList.add("disabled_link");
        break;
      case false:
        linkRef.current?.classList.remove("disabled_link");
        break;
      default:
        break;
    }
  }, [isDisabled, linkRef]);

  return (
    <li>
      <NavLink
        to="/settings/notifications"
        ref={linkRef}
        onClick={onClick}
        className={({ isActive }) =>
          isActive ? "smartlink active" : "smartlink"
        }>
        Notifications
      </NavLink>
    </li>
  );
};
const SettingsTab = () => {
  const handleClick = (e) => {
    // If the link is disabled, prevent navigation
    if (e.target.classList.contains("disabled_link")) {
      e.preventDefault();
    }
  };

  return (
    <div className="settings_tab">
      <ul className="tabs">
        <Account />
        <Subscription isDisabled={true} onClick={handleClick} />
        <Notifications isDisabled={true} onClick={handleClick} />
      </ul>
    </div>
  );
};

export default SettingsTab;
