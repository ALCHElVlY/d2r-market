// Import React
import React from 'react';

// Import the header stylesheet
import './header.css';

// Import the ItemSearchBar component
import { ItemSearchBar } from '../../components/index';

const Header = () => {
  return (
      <section className='header__container'>
        <div className="header_body">
          <div className='flex--left'></div>

          <section className='header_search_container'>
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
