// Builtin imports
import { useEffect } from 'react';

// Internal imports
import {
	SettingsTab,
} from '../../../components/index';
import './notifications.css';

const Notifications = () => {
	// React hook to handle setting the page title
	useEffect(() => {
		document.title = 'Settings | Notifications';
	}, []);

	return (
		<section className="notifications__container">
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
					<SettingsTab />
				</div>
				<div className="flex_right"></div>
			</div>
			<div className="notifications_body"></div>
			<div className="flex_bottom"></div>
		</section>
	);
};

export default Notifications;