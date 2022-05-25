// Built-in imports
import { useEffect } from 'react';

// External imports
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Internal imports
import {
	RegisterForm,
	Footer,
} from '../../components/index';
import './register.css';


const RegisterHeader = () => {
	return (
		<header className="register_header flex__root">
			<div className="flex__left"></div>
			<div className="header_content flex__root">
				<h1>Registration</h1>
			</div>
			<div className="flex__right"></div>
			<div className="header_image_overlay"></div>
		</header>
	);
};
const RegisterBody = () => {
	return (
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
	);
};
const Register = () => {
	const navigate = useNavigate();
	const { user, } = useSelector((state) => state.auth);


	// React hook to handle setting the page title
	useEffect(() => {
		document.title = 'Registration | Diablo II Market';
	}, []);

	// React hook to keep logged in users from accidently navigating
	// back to the login page
	useEffect(() => {
		if (user) navigate('/');
	}, [user, navigate]);

	return (
		<div className="content__wrapper">
			<section className="register__container">
				<RegisterHeader />
				<RegisterBody />
				<div className="flex_bottom"></div>
			</section>
			<Footer />
		</div>
	);
};

export default Register;