// Import react router dom
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import the default app stylesheet
import './App.css';

// Import the components
import {
	NavMenu,
} from './components';

// Import the containers
import {
	ContentWrapper,
	Register,
	Login,
	Profile,
	Messages,
	Services,
} from './containers';


function App() {
	return (
		<div className="main__container">
			<Router>
				<NavMenu />
				<Routes>
					<Route exact path="/" element={<ContentWrapper />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/messages" element={<Messages />} />
					<Route path='/services' element={<Services />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
