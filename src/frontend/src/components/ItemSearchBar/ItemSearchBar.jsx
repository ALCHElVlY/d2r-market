// Import React & any hooks we may need
import React, { useState, useRef, useEffect } from 'react';

// Import the search bar stylesheet
import './itemsearchbar.css';

// Import the custom components as well as the material ui components
import { Button } from '@mui/material';
import ClearSearchButton from './Buttons/ClearSearchButton';

const ItemSearchBar = () => {
    const searchInputRef = useRef(null); // The search input ref
    const [searchInput, setSearchInput] = useState(''); // The search input state
    const [isVisible, setIsVisible] = useState(false); // The clear search button state
    const [isFocused, setIsFocused] = useState(false); // The search input focus state

    // The handleSearchInput function is called whenever
    // the user types in the search bar
    const handleSearchInput = (e) => {
      setSearchInput(e.target.value);
      handleClearSearchVisibility(e);
    };

    // The handleClearSearchVisibility function handles the visibility
    // of the clear search button
    const handleClearSearchVisibility = (e) => {
      switch (e.target.value.length > 0) {
        case true:
          setIsVisible(true);
          break;
        default:
          setIsVisible(false);
      }
    }

    // The handleClearSearch function is called when the user clicks
    // the clear search button
    const handleClearSearchButtonClick = () => {
      setSearchInput('');
      setIsVisible(false);
    };

    // Test log the search value
    const handleSearchButtonClick = () => {
        console.log(searchInput);
    };

    // Handle the when the ItemSearchBar is focused
    const handleFocus = () => {
      setIsFocused(true);
    };

    // Handle the when the ItemSearchBar is blurred
    const handleBlur = () => {
      setIsFocused(false);
    };

    // React hook to handle the focus and blur events
    useEffect(() => {
      if (isFocused) {
        // Add the focus class to the search input field
        searchInputRef.current.classList.add('focus');
      }
      else {
        // Remove the focus class from the search input field
        searchInputRef.current.classList.remove('focus');
      }
    }, [isFocused]);

    // Define some custom search button properties
    const searchButtonProps = {
      backgroundColor: 'var(--primary-button-background)',
      borderRadius: '1.5px',


      '&&:hover': {
        backgroundColor: 'var(--primary-button-background_lighter)',
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
  )
};

export default ItemSearchBar;
