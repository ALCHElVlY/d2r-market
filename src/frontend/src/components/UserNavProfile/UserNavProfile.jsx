// Builtin imports
import { useEffect, useRef } from 'react';

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

	// State variables
	const { user } = useSelector((state) => state.auth);

	// React hook to handle the user profile dropdown open and close
	useEffect(() => {
		if (user && props.open) {
			return caretIconRef.current.classList.add('icon_caret_rotate');
		}
		else if (user && !props.open) {
			return caretIconRef.current.classList.remove('icon_caret_rotate');
		}

	}, [user, props.open]);


	return (
		<div className="userProfileHeader" >
			{user.customAvatar ? (
				<img src={user.customAvatar} alt="Avatar" className="custom_user_avatar" />
			) : (
				<FontAwesomeIcon icon={faUserCircle}
					className="default_user_avatar" />
			)}
			<div className="username_and_status">
				<span className="nickname">
					{user ? user.username : ''}
				</span>
				<div className="statusIndicator">
					<span className="status">
						{user.onlineStatus}
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