// External imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Internal imports
import {
	NavMenu,
	RequireAuth,
	ErrorBoundary,
	PlaceOrder,
} from './components/index';
import {
	ContentWrapper,
	Services,
	Register,
	Login,
	OAuthLogin,
	Profile,
	Messages,
	Settings,
	Subscription,
	Notifications,
} from './containers';
import './App.css';


function App() {
	return (
		<div className="main__container">
			<ErrorBoundary>
			<Router>
				<NavMenu />
				<Routes>
					{/* Public routes - users do not need to be logged in */}
					<Route exact path="/" element={<ContentWrapper />} />
					<Route path='/services' element={<Services />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/oauth" >
						<Route path="bnet" element={<OAuthLogin target="bnet" />} />
						{ /* <Route path="xbox" element={<OAuthLogin target="xbox" />} /> */}
						{/* <Route path="discord" element={<OAuthLogin target="discord" />} /> */}
					</Route>

					{/* Private routes - users must be logged in */}
					<Route element={<RequireAuth />}>
						<Route path="/profile" element={<Profile />} />
						<Route path="/messages" element={<Messages />} />
						<Route path="/settings" >
							<Route path="account" index element={<Settings />} />
							<Route path="subscription" element={<Subscription />} />
							<Route path="notifications" element={<Notifications />} />
						</Route>
					</Route>

				</Routes>
			</Router>
			<PlaceOrder />
			<ToastContainer />
			</ErrorBoundary>
		</div>
	);
}

export default App;
