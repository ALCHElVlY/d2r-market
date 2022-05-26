// Built-in imports
import { useEffect } from "react";

// External imports
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Internal imports
import { LoginForm, Footer } from "../../components/index";
import "./login.css";

const LoginHeader = () => {
  return (
    <header className="login_header">
      <div className="flex__left"></div>
      <div className="header_content flex__root">
        <h1>Sign In</h1>
      </div>
      <div className="flex__right"></div>
      <div className="header_image_overlay"></div>
    </header>
  );
};
const LoginBody = () => {
  return (
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
  );
};
const Login = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  // React hook to handle setting the page title
  useEffect(() => {
    document.title = "Sign In | Diablo II Market";
  }, []);

  // React hook to redirect the user to the home page if they
  // are already logged in
  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  return (
    <div className="content__wrapper">
      <section className="login__container">
        <LoginHeader />
        <LoginBody />
        <div className="flex_bottom"></div>
      </section>
      <Footer />
    </div>
  );
};

export default Login;
