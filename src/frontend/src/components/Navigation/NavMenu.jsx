// Builtin imports
import { useEffect, useState, useRef } from 'react';

// External imports
import {
	faGears,
	faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Icon from '@mui/material/Icon';
import { loadCSS } from 'fg-loadcss';
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';

// Internal imports
import { logout, reset } from '../../features/auth/authSlice';
import UserNavProfile from '../UserNavProfile/UserNavProfile.jsx';
import PlatformSelector from './PlatformSelector/PlatformSelector.jsx';
import './navmenu.css';

const NavMenu = () => {
	// Declare the dispatch variable
	const dispatch = useDispatch();
	// Declare the navigate variable
	const navigate = useNavigate();

	// Declare ref hooks for the user profile dropdown icons
	const userNavProfileRef = useRef(null);

	// Get the user from state
	const { user } = useSelector((state) => state.auth);

	// Declare a state hook for the user profile dropdown
	const [open, setOpen] = useState(false);

	// Handle the logout event
	const handleLogout = async () => {
		// Dispatch the logout action
		await dispatch(logout(user));
		// Dispatch the reset action
		await dispatch(reset());
		// Redirect the user back to the home page
		await navigate('/');
	};

	// Handle when the user mourses over the profile dropdown
	const handleMouseEnter = () => {
		// Set the open state to true
		setOpen(true);
	};

	// Handle when the user mouses out of the profile dropdown
	const handleMouseOut = () => {
		// Set the open state to false
		setOpen(false);
	};

	// React hook to load the font-awesome css file
	useEffect(() => {
		const node = loadCSS(
			'https://use.fontawesome.com/releases/v5.14.0/css/all.css',
			// Inject before JSS
			// eslint-disable-next-line no-undef
			document.querySelector('#font-awesome-css') || document.head.firstChild,
		);
		return () => {
			node.parentNode.removeChild(node);
		};
	}, []);

	// REact hook to handle when the profile dropdown is opened
	useEffect(() => {
		// When the user hovers over the profile dropdown
		// Set the caret icon to rotate
		if (user && open) {
			userNavProfileRef.current.classList.add('open_close');
		}
		else if (user && !open) {
			userNavProfileRef.current.classList.remove('open_close');
		}
		else {
			setOpen(false);
		}
	}, [user, open]);


	return (
		<div className='navigation__container'>
			<div className='navMenu_logo_container'>
				<Link to="/">
					<img src='https://imgur.com/3S4kh9l.png'
						alt='d2r.market'
						className='navMenu_logo' />
				</Link>
			</div>
			<PlatformSelector />

			<ul className='navMenu_list'>
				<li className='navMenu_category'>
					<NavLink to="/" className={({ isActive }) => isActive
						? 'navMenu_link_active'
						: 'navMenu_link'}>
						<ShoppingCartIcon className='navMenu_market_icon' />
						<div className='navMenu_title'><span>Market</span></div>
					</NavLink>
				</li>

				<li className='navMenu_category'>
					<NavLink to="/services" className={({ isActive }) => isActive
						? 'navMenu_link_active'
						: 'navMenu_link'}>
						<Icon baseClassName='far' className='fa-handshake'></Icon>
						<div className='navMenu_title'>
							<span>Services</span>
							<span className="navMenu_title_subscript">
								Rushes | Cows | Ubers
							</span>
						</div>
					</NavLink>
				</li>

				<li className="navMenu_category_separator"></li>

				{/* If the user is logged in, show the user's profile and logout options */}
				{user ? (
					<><li className='navMenu_category'>
						<NavLink to="/profile" className={({ isActive }) => isActive
							? 'navMenu_link_active'
							: 'navMenu_link'}>
							<Icon baseClassName='fa'
								className='fa-solid fa-user' id='profileIcon' />
							<div className='navMenu_title'><span>My Profile</span></div>
						</NavLink>
					</li><li className="navMenu_category">
							<NavLink to="/messages" className={({ isActive }) => isActive
								? 'navMenu_link_active'
								: 'navMenu_link'}>
								<Icon baseClassName='fa'
									className='fa-solid fa-envelope' id='messagesIcon' />
								<div className='navMenu_title'><span>My Messages</span></div>
							</NavLink>
						</li><li className="navMenu_profileComboBox"
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseOut}>
							<ul className="profileShift"
								ref={userNavProfileRef}>
								<li className="profile_text_entry">
									Select your status
								</li>
								<li className="profile_status_switch">
									<span className='status_online'>Online</span>
									<span className='status_online_ingame'>Online in game</span>
									<span className='status_invisible'>Invisible</span>
								</li>
								<li className="profile_settings">
									<Link to="/settings/account" className="smartlink">
										<FontAwesomeIcon icon={faGears}
											className="profile_settings_icon" />
										<div className='profile_settings_title'>
											<span>Settings</span>
										</div>
									</Link>
								</li>
								<li className="profile_signout">
									<Link to='/' onClick={handleLogout} className="smartlink">
										<FontAwesomeIcon icon={faRightFromBracket}
											className="profile_logout_icon" />
										<div className='profile_logout_title'>
											<span>Sign out</span>
										</div>
									</Link>
								</li>
							</ul>
							<UserNavProfile open={open} />
						</li></>
				) : (
					<li className='navMenu_category'>
						<NavLink to="/login" className={({ isActive }) => isActive
							? 'navMenu_link_active'
							: 'navMenu_link'}>
							<LoginIcon className='navMenu_login_icon' />
							<div className='navMenu_title'><span>Log In</span></div>
						</NavLink>
					</li>
				)}
			</ul>
		</div>
	);
};

export default NavMenu;
