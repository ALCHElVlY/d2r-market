// Internal imports
import {
	ItemSearchBar,
} from '../../components/index';
import './header.css';

const Header = () => {
	return (
		<section className='header__container'>
			<div className="header_body flex__root">
				<div className='flex--left'></div>
				<section className='search_header container'>
					<div className="row">
						<ItemSearchBar />
					</div>
				</section>
				<div className='flex--right'></div>
			</div>
		</section>
	);
};

export default Header;
