// Builtin imports
import { useEffect } from 'react';

// External imports
import { useSelector } from 'react-redux';

const Profile = () => {
	// State variable
	const { user } = useSelector((state) => state.auth);

	// React hook to handle setting the page title
	useEffect(() => {
		document.title = `Profile - ${user.username} | Diablo II Market`;
	}, [user]);

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