// Builtin imports
import { useEffect } from 'react';

// External imports
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

// Internal imports
import './notifications.css';

const Notifications = () => {
	// Declare the navigate variable
	const navigate = useNavigate();

	// Get the user from state
	const { user } = useSelector((state) => state.auth);

	// Create a hook to load the font awesome icons into the css
	useEffect(() => {
		// If the user is not logged in, redirect to the home page
		if (!user) {
			navigate('/');
		}
	}, [user, navigate]);

	return (
		<section className="notifications__container">
			<Helmet defer={false}>
				<title>Settings | Notifications</title>
			</Helmet>
			<header className="notifications_header">
				<div className="flex__left"></div>
				<div className="header_content">
					<h1>Settings</h1>
				</div>
				<div className="flex__right"></div>
				<div className="header_image_overlay"></div>
			</header>
			<div className="notifications_subheader">
				<div className="flex_left"></div>
				<div className="container">
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
								<NavLink to="/settings/subscription" className={({ isActive }) => isActive
									? 'smartlink active'
									: 'smartlink'}>
                  Patronage
								</NavLink>
							</li>
							<li>
								<NavLink to="/settings/notifications" className={({ isActive }) => isActive
									? 'smartlink active'
									: 'smartlink'}>
                  Notifications
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
				<div className="flex_right"></div>
			</div>
			<div className="notifications_body"></div>
			<div className="flex_bottom"></div>
		</section>
	);
};

export default Notifications;