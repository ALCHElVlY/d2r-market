// External imports
import { Helmet } from 'react-helmet';

// Internal imports
import RegisterForm from './Form/RegisterForm.jsx';
import './register.css';

const Register = () => {
	return (
		<section className="register__container">
			<Helmet defer={false}>
				<title>Registration | Diablo II Market</title>
			</Helmet>
			<header className="register_header">
				<div className="flex__left"></div>
				<div className="header_content">
					<h1>Registration</h1>
				</div>
				<div className="flex__right"></div>
				<div className="header_image_overlay"></div>
			</header>
			<div className="register_body">
				<div className="flex__left"></div>
				<div className="form_container">
					<div className="row">
						<RegisterForm />
						<div className="auth__errors"></div>
					</div>
				</div>
				<div className="flex__right"></div>
			</div>
			<div className="flex_bottom"></div>
		</section>
	);
};

export default Register;