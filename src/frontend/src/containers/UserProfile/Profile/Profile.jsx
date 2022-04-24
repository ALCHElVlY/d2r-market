// Builtin imports
import { useEffect } from 'react';

// External imports
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
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
		else {
			document.title = `Profile - ${user.username} | Diablo II Market`;
		}
	}, [user, navigate]);

	return (
		<div>
			<br />
			<br />
			<br />
			<br />
			<center>
				<h1>This is the user profile page!</h1>
			</center>
		</div>
	);
};

export default Profile;