// Import React
import React from 'react';

// Import the content wrapper stylesheet
import './contentwrapper.css';

// Import the content containers
import {
	Header,
	Footer,
} from '../index';

// Import the components
import {
    FilterRecentOrders,
} from '../../components/index';

const ContentWrapper = () => {
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
