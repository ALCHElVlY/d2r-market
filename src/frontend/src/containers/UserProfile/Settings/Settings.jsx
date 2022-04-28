// Built-in imports
import { useEffect } from 'react';

// Internal imports
import UserSettings from '../../../components/UserSettings/UserSettings.jsx';
import { SettingsContent } from '../../../components//UserSettings//UserSettings.jsx';
import {
	Footer,
} from '../../index';
import './settings.css';

const Settings = () => {
	// React hook to set the page title
	useEffect(() => {
		document.title = 'Settings | Verification';
	}, []);

	return (
		<div className='content__wrapper'>
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
			<Footer />
		</div>
	);
};

export default Settings;