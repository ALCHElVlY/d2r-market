// Builtin imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Internal imports
import './App.css';
import {
	NavMenu,
} from './components';
import {
	ContentWrapper,
	Services,
	Register,
	Login,
	Profile,
	Messages,
	Settings,
	Subscription,
	Notifications,
} from './containers';


function App() {
	return (
		<div className="main__container">
			<Router>
				<NavMenu />
				<Routes>
					<Route exact path="/" element={<ContentWrapper />} />
					<Route path='/services' element={<Services />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/messages" element={<Messages />} />
					<Route path="/settings" >
						<Route path="account" index element={<Settings />} />
						<Route path="subscription" element={<Subscription />} />
						<Route path="notifications" element={<Notifications />} />
					</Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
