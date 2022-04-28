// External imports
import {
	FormControl,
	FormLabel,
	RadioGroup,
} from '@mui/material';

// Internal imports
import {
	FilterAll,
	FilterOnSite,
	FilterInGame,
} from '../Buttons/index';
import { RealmSelectMenu } from '../../components/index';
import './filterrecentorders.css';

const FilterRecentOrders = () => {
	return (
		<div className="filter_order_container">
			<div className="headerFilter">
				<header>
					<h1>Most Recent Orders</h1>
				</header>
			</div>
			<div className="statusFilter">
				<FormControl>
					<FormLabel className="statusFilter_label"
						sx={{ color: '#fff', fontFamily: 'inherit' }}
						focused={false}>
                        Online Status
					</FormLabel>
					<RadioGroup
						row
						aria-labelledby='statusFilter_RadioGroup'
						defaultValue="filterAll">
						<FilterAll />
						<FilterOnSite />
						<FilterInGame />
					</RadioGroup>
				</FormControl>
			</div>
			<div className='realmFilter'>
				<h5>Realm</h5>
				<RealmSelectMenu />
			</div>
		</div>
	);
};

export default FilterRecentOrders;
