// Import React
import React from 'react';

// Import the filter recent orders stylesheet
import './filterrecentorders.css';

// Import the Button and ButtonGroup classes from mui
import {
    FormControl,
    FormLabel,
    RadioGroup,
} from '@mui/material';

// Import the button icons
import {
    FilterAll,
    FilterOnSite,
    FilterInGame,
} from './Buttons/index';

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
                    <FormLabel
                        className="statusFilter_label"
                        sx={{ color: '#fff', fontFamily: 'inherit' }}
                        focused={false}
                    >
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
            <div className='realmFilter'></div>
        </div>
    );
};

export default FilterRecentOrders;
