// Builtin imports
import { useEffect, useRef } from 'react';

// External imports
import {
	faUserCircle,
	faCaretLeft,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector, useDispatch } from 'react-redux';

// Internal imports
import './usernavprofile.css';
// Import the getMe and reset actions
// import { reset } from '../../features/auth/authSlice';

const UserNavProfile = (props) => {
	// Declare the dispatch variable
	// eslint-disable-next-line no-unused-vars
	const dispatch = useDispatch();

	// Declare ref hooks for the user profile dropdown icons
	const caretIconRef = useRef(null);

	// Get the user from state
	// eslint-disable-next-line no-unused-vars
	const { user, isError, isSuccess, message } = useSelector(
		(state) => state.auth);

	useEffect(() => {
		// When the user hovers over the profile dropdown
		// Set the caret icon to rotate
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