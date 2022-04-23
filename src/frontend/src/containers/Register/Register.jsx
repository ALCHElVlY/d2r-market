// Built-in imports
import { useEffect } from 'react';

// External imports
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Internal imports
import RegisterForm from '../../components/Forms/RegisterForm.jsx';
import './register.css';

const Register = () => {
	const navigate = useNavigate();
	const { user, } = useSelector(
		(state) => state.auth);


	// React hook to dynamically set the page title
	useEffect(() => {
		document.title = 'Registration | Diablo II Market';
	}, []);

	// React hook to keep logged in users from accidently navigating
	// back to the login page
	useEffect(() => {
		(async () => {
			if (user) await navigate('/');
		})();
	}, [user, navigate]);

	return (
		<section className="register__container">
			<header className="register_header flex__root">
				<div className="flex__left"></div>
				<div className="header_content flex__root">
					<h1>Registration</h1>
				</div>
				<div className="flex__right"></div>
				<div className="header_image_overlay"></div>
			</header>
			<div className="register_body flex__root">
				<div className="flex__left"></div>
				<div className="form_container">
					<div className="row py-4">
						<RegisterForm />
						<div className="col-12 col-lg-6"></div>
					</div>
				</div>
				<div className="flex__right"></div>
			</div>
			<div className="flex_bottom"></div>
		</section>
	);
};

export default Register;