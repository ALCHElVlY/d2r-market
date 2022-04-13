// External imports
import { useEffect } from 'react';

// Internal imports
import LoginForm from '../../components/Forms/LoginForm.jsx';
import './login.css';

const Login = () => {
	// Create a hook to dymanically change the page title
	useEffect(() => {
		document.title = 'Sign In | Diablo II Market';
	}, []);

	return (
		<section className="login__container">
			<header className="login_header">
				<div className="flex__left"></div>
				<div className="header_content flex__root">
					<h1>Sign In</h1>
				</div>
				<div className="flex__right"></div>
				<div className="header_image_overlay"></div>
			</header>
			<div className="login_body">
				<div className="flex__left"></div>
				<div className="form_container">
					<div className="row">
						<LoginForm />
						<div className="auth__errors py-4 col-12 col-lg-6"></div>
					</div>
				</div>
				<div className="flex__right"></div>
			</div>
			<div className="flex_bottom"></div>
		</section>
	);
};

export default Login;