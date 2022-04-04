// External imports
import { useEffect } from 'react';

// Internal imports
import {
	FilterRecentOrders,
} from '../../components/index';
import {
	Header,
	Footer,
} from '../index';
import './contentwrapper.css';

const ContentWrapper = () => {
	// Create a hook to dymanically change the page title
	useEffect(() => {
		document.title = 'Diablo II Market';
	}, []);
	
	return (
		<div className='content__container'>
			<Header />
			<section className='content'>
				<div className="content_header_second">
					<div className="flex__left"></div>
					<div className="container">
						<FilterRecentOrders />
					</div>
					<div className="flex__right"></div>
				</div>
				<div className="content_body_second">
                    This is the second section body
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default ContentWrapper;
