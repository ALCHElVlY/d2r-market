// External imports
import { useEffect } from 'react';

// Internal imports
import {
	FilterRecentOrders,
	Footer,
} from '../../components/index';
import {
	Header,
	ContentBody,
} from '../index';
import './contentwrapper.css';

const ContentWrapper = () => {
	useEffect(() => {
		document.title = 'Diablo II Market';
	}, []);
	
	return (
		<div className='content__wrapper'>
			<Header />
			<section className='content'>
				<div className="content_header_second">
					<div className="flex__left"></div>
					<div className="container">
						<FilterRecentOrders />
					</div>
					<div className="flex__right"></div>
				</div>
				<ContentBody />
			</section>
			<Footer />
		</div>
	);
};

export default ContentWrapper;
