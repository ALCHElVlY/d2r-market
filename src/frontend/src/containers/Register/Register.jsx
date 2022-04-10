// External imports
import { useEffect } from 'react';


// Internal imports
import RegisterForm from './Form/RegisterForm.jsx';

import './register.css';

const Register = () => {

	// Create a hook to dymanically change the page title
	useEffect(() => {
		document.title = 'Registration | Diablo II Market';
	}, []);

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