// Builtin imports
import { useEffect, useState, useRef } from 'react';

// External imports
import {
	faUserCircle,
	faCaretLeft,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';

// Internal imports
import './usernavprofile.css';

const UserNavProfile = (props) => {
	// Reference variables
	const caretIconRef = useRef(null);
	const statusRef = useRef(null);

	// State variables
	const { user } = useSelector(
		(state) => state.auth);
	const [username, setUsername] = useState('');
	const [avatar, setAvatar] = useState(false);
	const [onlineStatus, setOnlineStatus] = useState('');

	// React hook to handle updating the user profile
	useEffect(() => {
		// Set the users status when it changes
		if (user) {
			setOnlineStatus(user.onlineStatus);
		}
		// Set the users username when it changes
		if (user && user.username !== null) {
			setUsername(user.username);
		}
		// Set the users avatar when it changes
		if (user && user.customAvatar) {
			setAvatar(true);
		}
		// Apply the CSS style to the status class when it changes
		switch (onlineStatus) {
			case 'online':
				onlineStatus === 'online'
					? statusRef.current.classList.toggle('online')
					: statusRef.current.classList.toggle('online');
				break;
			case 'online in game':
				onlineStatus === 'online in game'
					? statusRef.current.classList.toggle('online_ingame')
					: statusRef.current.classList.toggle('online_ingame');
				break;
			case 'invisible':
				onlineStatus === 'invisible'
					? statusRef.current.classList.toggle('invisible')
					: statusRef.current.classList.toggle('invisible');
				break;
			default:
				break;
		}

		setAvatar(false);
	}, [
		user, onlineStatus,
		// Functions
		setUsername,
	]);

	// React hook to handle the user profile dropdown open and close
	useEffect(() => {
		if (user && props.open) {
			return caretIconRef.current?.classList
				.add('icon_caret_rotate');
		}
		else if (user && !props.open) {
			return caretIconRef.current?.classList
				.remove('icon_caret_rotate');
		}

	}, [
		user,
		// Properties
		props.open
	]);


	return (
		<div className="userProfileHeader" >
			{avatar ? (
				<img src={user.customAvatar} alt="Avatar" className="custom_user_avatar" />
			) : (
				<FontAwesomeIcon icon={faUserCircle}
					className="default_user_avatar" />
			)}
			<div className="username_and_status">
				<span className="nickname">
					{username}
				</span>
				<div className="statusIndicator">
					<span className="status" ref={statusRef}>
						{onlineStatus}
					</span>
				</div>
			</div>
			<FontAwesomeIcon icon={faCaretLeft}
				className="icon_caret"
				forwardedRef={caretIconRef} />
		</div>
	);
};

export default UserNavProfile;