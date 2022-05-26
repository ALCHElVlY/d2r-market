// Builtin imports
import { useEffect } from "react";

// External imports
// import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";

// Internal imports
import "./subscription.css";

const SubscriptionHeader = () => {
  return (
    <header className="subscription_header">
      <div className="flex__left"></div>
      <div className="header_content">
        <h1>Settings</h1>
      </div>
      <div className="flex__right"></div>
      <div className="header_image_overlay"></div>
    </header>
  );
};
const Subscription = () => {
  // Declare the navigate variable
  // const navigate = useNavigate();

  // Get the user from state
  // const { user } = useSelector((state) => state.auth);

  // Create a hook to prevent users who are not logged in
  // from accessing this page
  /* useEffect(() => {
		if (!user) {
			navigate('/login');
		}
	}, [user, navigate]);*/

  // React hook to handle setting the page title
  useEffect(() => {
    document.title = "Settings | Patronage";
  }, []);

  return (
    <section className="subscription__container">
      <SubscriptionHeader />
      <div className="settings_subheader">
        <div className="flex_left"></div>
        <div className="container">
          <div className="settings_tab">
            <ul className="tabs">
              <li>
                <NavLink
                  to="/settings/account"
                  className={({ isActive }) =>
                    isActive ? "smartlink active" : "smartlink"
                  }>
                  Account
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/settings/subscription"
                  className={({ isActive }) =>
                    isActive ? "smartlink active" : "smartlink"
                  }>
                  Patronage
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/settings/notifications"
                  className={({ isActive }) =>
                    isActive ? "smartlink active" : "smartlink"
                  }>
                  Notifications
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex_right"></div>
      </div>
      <div className="subscription_body"></div>
      <div className="flex_bottom"></div>
    </section>
  );
};

export default Subscription;
