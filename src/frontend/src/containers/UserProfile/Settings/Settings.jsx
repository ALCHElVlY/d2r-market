// Builtin imports
import { useEffect } from 'react';

// External imports
import {
	faPatreon,
	faSteamSquare,
	faXbox,
	faDiscord,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

// Internal imports
import LinkAccount from './Buttons/LinkAccount.jsx';
import RemoveAccount from './Buttons/RemoveAccount.jsx';
import ChangeEmailForm from './Forms/ChangeEmailForm.jsx';
import ChangePasswordForm from './Forms/ChangePasswordForm.jsx';
import './settings.css';

const Settings = () => {
	// Declare the navigate variable
	const navigate = useNavigate();

	// Get the user from state
	const { user } = useSelector((state) => state.auth);

	const handleOnClick = (e) => {
		// Check if the class includes disabled
		if (e.target.classList.contains('disabled')) {
			// Prevent navigation
			e.preventDefault();
		}
	};

	// Create a hook to load the font awesome icons into the css
	useEffect(() => {
		// If the user is not logged in, redirect to the home page
		if (!user) {
			navigate('/');
		}
	}, [user, navigate]);

	return (
		<section className="settings__container">
			<Helmet defer={false}>
				<title>Settings | Verification</title>
			</Helmet>
			<header className="settings_header">
				<div className="flex__left"></div>
				<div className="header_content">
					<h1>Settings</h1>
				</div>
				<div className="flex__right"></div>
				<div className="header_image_overlay"></div>
			</header>
			<div className="settings_subheader">
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
								<NavLink to="/settings/#" className={({ isActive }) => isActive
									? 'smartlink active disabled'
									: 'smartlink disabled'}
								onClick={handleOnClick}>
                  Patronage
								</NavLink>
							</li>
							<li>
								<NavLink to="/settings/#" className={({ isActive }) => isActive
									? 'smartlink active disabled'
									: 'smartlink disabled'}
								onClick={handleOnClick}>
                  Notifications
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
				<div className="flex_right"></div>
			</div>
			<div className="settings_body flex__root">
				<div className="flex__left"></div>
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
								<div className="settings_links col-12">
									<section className="link_block">
										<FontAwesomeIcon icon={faPatreon} className="icon" />
										<h3>Patreon</h3>
										<LinkAccount />
									</section>
									<section className="link_block">
										<FontAwesomeIcon icon={faSteamSquare} className="icon" />
										<h3>Steam</h3>
										<LinkAccount />
									</section>
									<section className="link_block">
										<FontAwesomeIcon icon={faXbox} className="icon" />
										<h3>Xbox</h3>
										<LinkAccount />
									</section>
									<section className="link_block">
										<FontAwesomeIcon icon={faDiscord} className="icon" />
										<h3>Discord</h3>
										<LinkAccount />
									</section>
								</div>
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
					<div className="row bottom-separator mx-0"></div>
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
								<div className="col-12 col-md-8">
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
				<div className="flex__right"></div>
			</div>
			<div className="flex_bottom"></div>
		</section>
	);
};

export default Settings;