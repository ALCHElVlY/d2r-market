/* eslint-disable no-inline-comments */
// Builtin imports
import { useState, useRef, useEffect } from 'react';

// External imports
import { Button } from '@mui/material';

// Internal imports
import ClearSearchButton from '../Buttons/ClearSearchButton';
import './itemsearchbar.css';

const ItemSearchBar = () => {
	// Reference variables
	const searchInputRef = useRef(null);

	// State variables
	const [searchInput, setSearchInput] = useState('');
	const [isVisible, setIsVisible] = useState(false);
	const [isFocused, setIsFocused] = useState(false);

	// Event handlers
	const handleSearchInput = (e) => {
		setSearchInput(e.target.value);
		handleClearSearchVisibility(e);
	};
	const handleClearSearchVisibility = (e) => {
		switch (e.target.value.length > 0) {
		case true:
			setIsVisible(true);
			break;
		default:
			setIsVisible(false);
		}
	};
	const handleClearSearchButtonClick = () => {
		setSearchInput('');
		setIsVisible(false);
	};
	// Test log the search value
	const handleSearchButtonClick = () => {
		console.log(searchInput);
	};
	const handleFocus = () => {
		setIsFocused(true);
	};
	const handleBlur = () => {
		setIsFocused(false);
	};

	// React hook to handle the focus and blur events
	useEffect(() => {
		if (isFocused) {
			searchInputRef.current.classList.add('focus');
		}
		else {
			searchInputRef.current.classList.remove('focus');
		}
	}, [isFocused]);

	// Custom prop styling
	const searchButtonProps = {
		backgroundColor: 'var(--primary-button-background)',
		borderRadius: '1.5px',


		'&&:hover': {
			backgroundColor: 'var(--primary-active-link)',
		},
	};

	return (
		<section className="search_field">
			<div className="item_finder"
				onFocus={handleFocus}
				onBlur={handleBlur}
				ref={searchInputRef}>
				<section className="item_finder_input">
					<span className="real_input">
						<input
							type="text"
							value={searchInput}
							placeholder="Search..."
							onChange={handleSearchInput}
						/>
					</span>

					<div className="fake_input">
						<span className="fake_input_invisible"></span>
						<span className="fake_input_visible"></span>
					</div>
				</section>
				<ClearSearchButton
					isVisible={isVisible}
					onClick={handleClearSearchButtonClick}
				/>
			</div>
			<Button
				variant="contained"
				onClick={handleSearchButtonClick}
				sx={searchButtonProps}
				disableRipple
			>
      Search
			</Button>
		</section>
	);
};

export default ItemSearchBar;
