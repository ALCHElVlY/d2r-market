// Builtin imports
import { useEffect } from 'react';

// External imports
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Internal imports
import UserSettings from '../../../components/UserSettings/UserSettings.jsx';
import { SettingsContent } from '../../../components//UserSettings//UserSettings.jsx';
import './settings.css';

const Settings = () => {
	// Declare the navigate variable
	const navigate = useNavigate();

	// Get the user from state
	const { user } = useSelector((state) => state.auth);

	// Create a hook to prevent users who are not logged in
	// from accessing this page
	useEffect(() => {
		if (!user) {
			navigate('/login');
		}
	}, [user, navigate]);

	// Create a hook to dynamically change the page title
	useEffect(() => {
		document.title = 'Settings | Verification';
	}, []);

	return (
		<section className="settings__container">
			<header className="settings_header flex__root">
				<div className="flex__left"></div>
				<div className="container header_content">
					<h1>Settings</h1>
				</div>
				<div className="flex__right"></div>
				<div className="header_image_overlay"></div>
			</header>
			<div className="settings_subheader flex__root">
				<div className="flex_left"></div>
				<div className="container">
					<UserSettings />
				</div>
				<div className="flex_right"></div>
			</div>
			<div className="settings_body flex__root">
				<div className="flex__left"></div>
					<SettingsContent />
				<div className="flex__right"></div>
			</div>
			<div className="flex_bottom"></div>
		</section>
	);
};

export default Settings;