// Built-in imports
import { useEffect, useState, useRef } from 'react';

// Internal imports
import {
    ClearSearchButton,
} from '../../../Buttons/index';

const SuggestionDropDown = (props) => {
    const { suggestions } = props;
    return (
        <section className="suggestions__dropdown">
            <ul className="suggestions">
                {suggestions.map((suggestion, index) => (
                    <li onClick={props.onClick}
                        key={index}>
                        {suggestion}
                    </li>
                ))}
            </ul>
        </section>
    );
};
const ItemSeeker = (props) => {
    // Reference variables
    const searchInputRef = useRef(null);

    // State variables
    const [searchInput, setSearchInput] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    // Event handlers
    const handleSearchInput = (e) => {
        const { value } = e.target;
        const { data } = props;
        let suggestions = [];

        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = data
                .sort((a,b) => a - b)
                .filter(v => regex.test(v));
        }

        setSearchInput(value);
        setSuggestions(suggestions);
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
        setSuggestions([]);
        setIsVisible(false);
    };
    const handleSuggestionSelected = (e) => {
        const selected = e.target.innerText;
        setSearchInput(selected);
        setSuggestions([]);
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


    return (
        <div className="item_seeker"
            onFocus={handleFocus}
            onBlur={handleBlur}
            ref={searchInputRef}>
            <section className="item_seeker_input margin">
                <span className="real_input">
                    <input type="text" placeholder="Select Item"
                        value={searchInput} onChange={handleSearchInput} />
                </span>
                <div className="fake_input">
                    <span className="fake_input_invisible"></span>
                    <span className="fake_input_visible"></span>
                </div>
            </section>
            <ClearSearchButton
                isVisible={isVisible}
                onClick={handleClearSearchButtonClick} />
            {(searchInput.length > 0 && suggestions.length > 0) &&
                <SuggestionDropDown onClick={handleSuggestionSelected}
                    suggestions={suggestions} />}
        </div>
    );
}

export default ItemSeeker;